import * as React from 'react';
import * as style from './style.scss';
import * as classnames from 'classnames';
import { TodoFilter,TODO_FILTER_TITLES,TODO_FILTER_TYPES } from 'app/constans';

interface FooterProps {
  selectedFilter:TodoFilter;
  activeCount:number;
  completedCount:number;
  onChangeFilter:(filter:TodoFilter) => any;
  onClearCompleted:() => any;
}

interface FooterState{

}

export default class Footer extends React.Component<FooterProps,FooterState> {
  constructor(props:FooterProps){
    super(props);
  }

  private renderTodoCount(){
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';
    return (
      <span className="counr">
        <strong>{ activeCount || 'No' }</strong> { itemWord } left
      </span>
    )
  }

  private renderFilterLink(filter:TodoFilter){
    const title = TODO_FILTER_TITLES[filter];
    const { selectedFilter,onChangeFilter } = this.props;
    const classes = classnames({
      [style.seleced]: Object.is(selectedFilter,filter)
    })
    return <a className={ classes } 
    style={{ cursor:'pointer' }} 
    onClick={ () => { onChangeFilter(filter); } }>
    { title }
    </a>
  }

  render() {
    return (
      <footer className={ style.normal }>
        { this.renderTodoCount() }
        <ul className={ style.filters }>
          { TODO_FILTER_TYPES.map((filter,index) => (
            <li key={ index } children={ this.renderFilterLink(filter) }></li>
          )) }
        </ul>
      </footer>
    );
  }
}
