import * as React from 'react';
import { Container,Content } from 'app/component/Layout';
import { Header } from 'app/component/Header';
import { TodoStore } from 'app/store';
import { STOER_TAG } from 'app/constans';
import { inject,observer } from 'mobx-react';

interface TagProps{
  [STOER_TAG]?:TodoStore;
}

@inject(STOER_TAG)
@observer
export default class Tag extends React.Component<TagProps,any> {
  constructor(props:TagProps,content:any){
    super(props);
    this.state = {

    }
  }
  private store = this.props.tag;
  render() {
    return (
      <Container>
        <Header isSearch  store={ this.store }></Header>
        <Content>
          <div></div>
        </Content>
      </Container>
    );
  }
}