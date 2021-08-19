import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Account } from "./Account.js";
import { HashUseCase } from "./HashUseCase.js";

export class AccountRepository {
	constructor() {
		this.db = new DB("account.db");
		this.db.query(`
			CREATE TABLE IF NOT EXISTS accounts (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
		        username TEXT,
				password TEXT,
		        email TEXT,
		        comment TEXT,
				hashKey TEXT
		    )
		`);
	}

	getDB() {
		return this.db;
	}

	async add(username, password, email, comment) {
		const hashKey = await HashUseCase.getHash();

		this.getDB().query(
			"INSERT INTO accounts (username, password, email, comment, hashKey) VALUES ('" +
			username + "', '" +
			password + "', '" +
			email + "', '" +
			comment + "', '" +
			hashKey + "');"
		)

		return "アカウントが追加されました \"" + username + "\"";
	}

	find(key, password) {
		const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return (validate.test(key) ? this.findByEmail(key, password) : this.findByName(key, password));
	}

	findBy(key, value) {
		return this.getDB().query("SELECT * FROM accounts WHERE " + key + " = '" + value + "';");
	}

	findAccountBy(dataKey, dataValue, password) {
		const data = this.findBy(dataKey, dataValue)[0];

		if (Array.isArray(data)) {
			if (data[2] === password) {
				return new Account(data);
			}
		}

		return null;
	}

	findByName(username, password) {
		return this.findAccountBy("username", username, password);
	}

	findByEmail(email, password) {
		return this.findAccountBy("email", email, password);
	}

	findByHashKey(hashKey) {
		return new Account(this.getDB().query("SELECT * FROM accounts WHERE hashKey = '" + hashKey + "';")[0]);
	}

	exists(key, value) {
		const result = this.findBy(key, value);
		return result[0] !== undefined;
	}
}