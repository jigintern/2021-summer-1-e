import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Article } from "./Article.js";

export class ArticleRepository {
    constructor() {
        this.db = new DB("article.db");
        this.db.query(`
			CREATE TABLE IF NOT EXISTS articles (
		        id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_user TEXT,
		        name TEXT,
				location_x TEXT,
                location_y TEXT,
		        time TEXT,
                tag TEXT,
                text TEXT,
                comment TEXT,
                image TEXT
		    )
		`);
    }

    getDB() {
        return this.db;
    }

    add(id_user, name, location_x, location_y, time, tag, text, image) {

        this.getDB().query(
            "INSERT INTO articles (id_user, name, location_x, location_y, time, tag, text, comment, image) VALUES ('" +
            id_user + "', '" +
            name + "', '" +
            location_x + "', '" +
            location_y + "', '" +
            time + "', '" +
            tag + "', '" +
            text + "', '" +
            comment  + "', '" +
            iamge + "');"
        )

        console.log("経路データが追加されました \"" + name + "\"");

        return true;
    }

    findBy(id, value) {
        return this.getDB().query("SELECT * FROM articles WHERE " + id + " = '" + value + "';");
    }

    findById(val) {
        return this.findBy("id_user", val);
    }

    serchTag(serch_tag) {
        return this.getDB().query("SELECT * FROM articles WHERE tag LIKE '%" + serch_tag + "%';");
    }

    delete(id, name) {
        const data = this.getDB().query("DELETE * FROM articles WHERE id_user = '" + id + "' AND name = '" + name + "';");
        console.log("delete result " + data);
        return true;
    }
}