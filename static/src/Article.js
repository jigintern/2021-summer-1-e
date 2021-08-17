export class Article {
	constructor(data) {
		this.id = data[0];
		this.name = data[1];
		this.location_x = data[2];
		this.location_y = data[3];
		this.time = data[4];
	}

	getId() {return this.id}
	getName() {return this.username;}
	getEmail() {return this.email;}
	getPassword() {return this.password}
	getComment() {return this.comment;}
}