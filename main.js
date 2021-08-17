import {Server} from "https://js.sabae.cc/Server.js";
new Server(8001);

export class TravelDB {
	constructor() {
		import { DB } from "https://deno.land/x/sqlite/mod.ts";
		this.db = new DB("travel.db");
		this.db.query(`
			CREATE TABLE IF NOT EXISTS people (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
		        name TEXT
		    )
		`).then(() => {});
	}
}