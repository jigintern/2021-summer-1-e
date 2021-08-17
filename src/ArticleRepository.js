import {DB} from "https://deno.land/x/sqlite/mod.ts";

// Locationだけの情報なら LocationRepositoryでもいいと思う
// ↑ 左のファイルツリー(ファイルやフォルダが並んでいるところ)から、今編集しているファイルを右クリックするとメニューが表示される
// ↑ そこから、名前を変更っていうところがあると思うので、そこから変更できるよ！(下部分にあります)

// 記事(ルート?)の情報なら大丈夫！  <- 記事の情報をここで実装して、locationの情報も持つ、という意味
// 見たらコメント消してOK!
export class ArticleRepository {
    static init(){
        self.db = new DB("article.db");
		self.db.query(`
			CREATE TABLE IF NOT EXISTS article (
		        id INTEGER PRIMARY KEY,
		        name TEXT,
				location_x INTEGER,
                location_y INTEGER,
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
}