import {DB} from "https://deno.land/x/sqlite/mod.ts";

export class ArticleRepository {
    static init(){
        self.db = new DB("article.db");
		self.db.query(`
			CREATE TABLE IF NOT EXISTS article (
		        id INTEGER PRIMARY KEY,
		        name TEXT,
				location_x TEXT,
                location_y TEXT,
		        time TEXT
		    )
		`);
    }

    static getDB() {
		return self.db;
	}

    static add_data(id, name, location_x, location_y, time){
        this.getDB().query(
            "INSERT INTO article (id, name, location_x, location_y, time) VALUES ('" +
            id + "', '" +
            name + "', '" +
            location_x + "', '" +
            location_y + "', '" +
            time + "')"
        )

        console.log("completed save location data");
    }

    static findBy(id, value) {
		return this.getDB().query("SELECT * FROM accounts WHERE " + id + " = '" + value + "';");
	}
}

