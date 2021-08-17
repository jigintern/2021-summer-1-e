import {Server} from "https://js.sabae.cc/Server.js";
new Server(8001);

export class TravelDB {
	constructor() {
		import { DB } from "https://deno.land/x/sqlite/mod.ts";
		self.db = new DB("travel.db");
		self.db.query(`
			CREATE TABLE IF NOT EXISTS accounts (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
		        username TEXT,
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
	
	static add(username, email, comment) {
		const db = self.getDB();
		db.query("INSERT INTO accounts (username, email, comment) VALUES (${username})").then(() => {
			console.log("add record \"${username}\"");
		})
	}
}