export class Article {
	constructor(data) {
		this.id = data[0];
		this.name = data[1];
		this.location_x = data[2];
		this.location_y = data[3];
		this.time = data[4];
		this.tag = data[5];
	}

	getId() {return this.id}
	getName() {return this.name;}
	getLocation_x() {return this.location_x;}
	getLocation_y() {return this.location_y}
	getTime() {return this.time;}
	getTag() {return this.tag;}
}