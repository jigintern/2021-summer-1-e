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

        if(id_user == null || name == null || location_x == null || location_y == null || time == null || tag == null){
            console.log("不明な経路データが追加されました");
            return false;
        }

        this.getDB().query(
            "INSERT INTO article (id_user, name, location_x, location_y, time) VALUES ('" +
            id_user + "', '" +
            name + "', '" +
            location_x + "', '" +
            location_y + "', '" +
            time + "', '" +
            tag + "')"
        )

        console.log("経路データが追加されました \"" + name + "\"");

        return true;
    }

    findBy(id, value) {
		return this.getDB().query("SELECT * FROM article WHERE " + id_user + " = '" + value + "';");
	}

    fingById(val){
        return this.findBy("id_user", val);
    }
}