import { observable, action,computed } from 'mobx';



export class Tag {
	constructor(){}

	private _query = {
		page: 0
	}

	private get query (){
		return this._query;
	}

	@action
	getData = (parmse:any) =>{

	}
}

export default Tag;
