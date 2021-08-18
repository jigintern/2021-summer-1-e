import {DB} from "https://deno.land/x/sqlite/mod.ts";
import {Account} from "./Account.js";

export class AccountRepository {
	constructor() {
		this.db = new DB("account.db");
		this.db.query(`
			CREATE TABLE IF NOT EXISTS accounts (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
		        username TEXT,
				password TEXT,
		        email TEXT,
		        comment TEXT
		    )
		`);
	}
	
	getDB() {
		return this.db;
	}
	
	add(username, password, email, comment) {
		this.getDB().query(
            "INSERT INTO accounts (username, password, email, comment) VALUES ('" +
            username + "', '" +
            password + "', '" +
            email + "', '" +
            comment + "')"
        )

		console.log("add record \"" + username + "\"");
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
		if(data === undefined) {
			return;
		}
		
		if(data.isArray()) {
			if(data.indexOf(2) === 1) {
				if(data[2] === password) {
					return new Account(data);
				}
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
}