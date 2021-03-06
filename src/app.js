import parse from './parse.js'

/*
 * the location parse class
 */

class Location {
	constructor(){
		this.$location = Object.create(null)
	}

	get location(){
		return window.location
	}

	get hash(){
		return this.location.hash
	}

	get search(){
		return this.location.search
	}

	getHash(key){
		let val = parse(this.hash)
		if(key){
			val = val[key]
		}
		return val	
	}

	getSearch(key){
		let val = parse(this.search)
		if(key){
			val = val[key]
		}
		return val	

	}
}

window.locationJS = new Location()

