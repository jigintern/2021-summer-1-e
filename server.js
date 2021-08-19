import { Server } from "https://js.sabae.cc/Server.js";
import { AccountRepository } from "./src/AccountRepository.js";
import { ArticleRepository } from "./src/ArticleRepository.js";

class MyServer extends Server {
	constructor(port) {
		super(port);
		this.accountRepository = new AccountRepository();
		this.articleRepository = new ArticleRepository();
	}

	async api(path, req) {
		switch (path) {
			case "/api/account/add": //アカウント追加
				return this.accountRepository.add(
					req['username'],
					req['password'],
					req['email'],
					req['comment']
				);
			case "/api/account/find": //アカウントを探す
				return this.accountRepository.find(
					req['key'],
					req['password']
				);
			case "/api/account/findByHashKey": //アカウントを探す
				return this.accountRepository.findByHashKey(
					req['hashKey']
				);
			case "/api/account/exist": //メールアドレスがあるかどうかTorF
				const result = this.accountRepository.exists(
					req['key'],
					req['value']
				);
				return result;

			case "/api/article/add": //経路の追加
				return this.articleRepository.add(
					req['id_user'],
					req['name'],
					req['location_x'],
					req['location_y'],
					req['time'],
					req['tag']
				);

			case "/api/article/delete": //経路の削除 T or F
				return this.articleRepository.delete(
					req['id_user'],
					req['name']
				);

			case "/api/article/find": //USER_IDからの登録した経路の検索
				return this.articleRepository.findById(
					req['id_user']
				);

			case "/api/article/serch_tag": //タグからの検索
				return this.articleRepository.serchTag(
					req['serch_tag']
				);

			default:
				console.log("予期していないリクエスト", req);
				break;
		}
	}
}

// 8885がeチームの開発サーバーっぽい
new MyServer(8006);