import { observable, computed, action, } from 'mobx';
import { ApiModule } from 'app/models';
import { post } from 'app/utils/api';

export interface LoginModel {

}

export class LoginStore {
	constructor() { }

	@observable public user: LoginModel;


	@action
	public loginUser = (data: any) => {
		post('/oauth', data).subscribe((result:any) => {
			console.log(result)
		})
	}
}


export default LoginStore;
