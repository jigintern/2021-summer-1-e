import {DB} from "https://deno.land/x/sqlite/mod.ts";
import {Account} from "./Account.js";

export class AccountRepository {
	static init() {
		self.db = new DB("account.db");
		self.db.query(`
			CREATE TABLE IF NOT EXISTS accounts (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
		        username TEXT,
				password TEXT,
		        email TEXT,
		        comment TEXT
		    )
		`);
	}
	
	static getDB() {
		return self.db;
	}
	
	static add(username, password, email, comment) {
		this.getDB().query(
            "INSERT INTO accounts (username, password, email, comment) VALUES ('" +
            username + "', '" +
            password + "', '" +
            email + "', '" +
            comment + "')"
        )

		console.log("add record \"" + username + "\"");
	}

	static findBy(key, value) {
		return this.getDB().query("SELECT * FROM accounts WHERE " + key + " = '" + value + "';");
	}

	static findAccountBy(dataKey, dataValue, password) {
		const data = this.findBy(dataKey, dataValue)[0];
		if(data.isArray()) {
			if(data.indexOf(2) === 1) {
				if(data[2] === password) {
					return new Account(data);
				}
			}
		}
	}

	static findByName(username, password) {
		return this.findAccountBy("username", username, password);
	}

	static findByEmail(email, password) {
		return this.findAccountBy("email", email, password);
	}
}