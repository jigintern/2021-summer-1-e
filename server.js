import {Server} from "https://js.sabae.cc/Server.js";
import {AccountRepository} from "./src/AccountRepository.js";
import {ArticleRepository} from "./src/ArticleRepository.js";

class MyServer extends Server {
	constructor(port) {
		super(port);
		this.accountRepository = new AccountRepository();
		this.articleRepository = new ArticleRepository();
	}

	async api(path, req) {
		switch(path) {
			case "/api/account/add":
				this.accountRepository.add(req.username, req.password, req.email, req.comment);
				break;
			case "/api/account/find":
				console.log(req);
				console.log(JSON.parse(req));
				return this.accountRepository.find(req.key, req.password);
			case "/api/article/add":
				this.articleRepository.add_data(req.id_user, req.name, req.location_x, req.location_y, req.time, req.tag);
				break;
			default:
				console.log("Error");
				break;
		}
	}
}

// 8885がeチームの開発サーバーっぽい
new MyServer(8001);