import { observable,action } from 'mobx';
import { RouterModel } from 'app/models';

export class HomeStore{
  constructor(){}

  @observable tabs:RouterModel<any>[] = [];

  @action
  add = (tab:RouterModel<any>) => {
    const { path } = tab;
    const index = this.tabs.findIndex((item) => Object.is(item.path,path));
    if(index < 0) return;
    this.tabs = [...this.tabs,tab];
  }

  @action 
  remove = () => {

  }
}

export default HomeStore;