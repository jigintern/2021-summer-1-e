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
				return this.accountRepository.add(
					req['username'],
					req['password'],
					req['email'],
					req['comment']
				);

			case "/api/account/find":
				return this.accountRepository.find(
					req['key'],
					req['password']
				);

			case "/api/article/add":
				return this.articleRepository.add_data(
					req['id_user'],
					req['name'],
					req['location_x'],
					req['location_y'],
					req['time'],
					req['tag']
				);

			case "/api/article/find":
				return this.articleRepository.findById(
					req['id_user']
				);

			default:
				console.log("予期していないリクエスト", req);
				break;
		}
	}
}

// 8885がeチームの開発サーバーっぽい
new MyServer(8001);