import * as React from 'react';
// import TodoTextInput from 'app/component/TodoTextInput';
import { Table } from 'antd';

import  './style.scss';

interface ListsProps {
  
}
interface ListsState {
  isInput:boolean;
  text?:string;
}

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

export default class Lists extends React.Component<ListsProps,ListsState> {
  constructor(props:ListsProps){
    super(props);
    this.state = {
      isInput:false,
      text:''
    }
  }
  handleBlur = (text:string,isBlur:boolean) => {
    if(isBlur){
      this.setState({
        isInput:false
      })
    }
    console.log(text);
  }
  render() {
    return (
      <Table dataSource={dataSource} columns={columns} />
      
    );
  }
}

