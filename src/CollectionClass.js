export default class CollectionClass {
	#list;
	constructor(...initial) {
		this.#list = initial;
	}
	set collection(value) {
		this.#list.push(value);
	}
	get collection() {
		return this.#list;
	}
}
