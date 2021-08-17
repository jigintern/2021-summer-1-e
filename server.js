import {Server} from "https://js.sabae.cc/Server.js";
import {AccountRepository} from "./src/AccountRepository.js";

class MyServer extends Server {
	constructor(port) {
		super(port);
		AccountRepository.init();
	}

	async api(path, req) {
		switch(true) {
			case path === "/api/account":
				break;
			case path === "/api/save_root":
				console.log(req);
				break;
			default:
				console.log("Error");
				break;
		}
	}
}

// 8885がeチームの開発サーバーっぽい
new MyServer(8001);