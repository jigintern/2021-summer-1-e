import {Server} from "https://js.sabae.cc/Server.js";
TravelDB.init();


class MyServer extends Server{
	async api(path, req){
		
	}
}

new Server(8001);

export class TravelDB {
	static init() {
		import { DB } from "https://deno.land/x/sqlite/mod.ts";
		self.db = new DB("travel.db");
		self.db.query(`
			CREATE TABLE IF NOT EXISTS accounts (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
		        username TEXT,
				password TEXT,
		        email TEXT,
		        comment TEXT
		    )
		`).then(() => {
			console.log("DB init.");
		});
	}
	
	static getDB() {
		return self.db;
	}
	
	static add(username, password, email, comment) {
		self.getDB().query("INSERT INTO accounts (username, password, email, comment) VALUES ('${username}', '${password}', '${email}', '${comment}')")
		.then(() => {
			console.log("add record \"${username}\"");
		})
	}

	static findBy(key, value) {
		return self.getDB().query("SELECT * FROM accounts WHERE ${key} = '${value}';");
	}

	static findAccountBy(dataKey, dataValue, password) {
		const data = self.findBy(dataKey, dataValue);
		if(data !== null) {
			if(data.password === password) {
				return new Account(data);
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

class Account {
	constructor(data) {
		this.username = data.username;
		this.email = data.email;
		this.comment = data.comment;
	}

	getName() {return this.username;}
	getEmail() {return this.email;}
	getComment() {return this.comment;}
}

class Save{
	
}