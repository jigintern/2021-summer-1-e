import {DB} from "https://deno.land/x/sqlite/mod.ts";
import { Article } from "./Article.js";

export class ArticleRepository {
    init(){
        self.db = new DB("article.db");
		self.db.query(`
			CREATE TABLE IF NOT EXISTS article (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_user INTEGER,
		        name TEXT,
				location_x TEXT,
                location_y TEXT,
		        time TEXT,
                tag TEXT
		    )
		`);
    }

    getDB() {
		return this.db;
	}

    add_data(id_user,  name, location_x, location_y, time, tag){
        this.getDB().query(
            "INSERT INTO article (id_user, name, location_x, location_y, time) VALUES ('" +
            id_user + "', '" +
            name + "', '" +
            location_x + "', '" +
            location_y + "', '" +
            time + "', '" +
            tag + "')"
        )

        console.log("completed save location data");
    }

    findBy(id_user, value) {
		return this.getDB().query("SELECT * FROM article WHERE " + id_user + " = '" + value + "';");
	}

    fingById(id, val){
        return this.findBy(id, val);
    }
}

