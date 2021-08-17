export class Account {
	constructor(data) {
		this.id = data[0];
		this.username = data[1];
		this.password = data[2];
		this.email = data[3];
		this.comment = data[4];
	}

	getId() {return this.id}
	getName() {return this.username;}
	getEmail() {return this.email;}
	getPassword() {return this.password}
	getComment() {return this.comment;}
}