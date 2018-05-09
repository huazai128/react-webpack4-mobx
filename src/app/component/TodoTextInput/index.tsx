import * as React from 'react';
import classnames from 'classnames';
import * as styles from './style.scss';

export interface TodoTextInputProps{
  text?:string;
  placeholder?:string;
  newTodo?:boolean;
  editing?:boolean;
  onSave:(text:string,isBlur?:boolean) => any;
  type?:string;
}

export interface TodoTextInputState{
  text:string
}

export default class TodoTextInput extends React.Component<TodoTextInputProps,TodoTextInputState> {
  constructor(props:TodoTextInputProps,context:any){
    super(props,context);
    this.state = {
      text: this.props.text || ''
    }
  }

  private handleBlur = (e:any) => {
    const text = e.target.value.trim();
    if(!this.props.newTodo){
      this.props.onSave(text,true);
    }
  }

  private handleChange = (e:any) => {
    this.setState({
      text: e.target.value.trim()
    })
  }

  private handleSubmit = (e:any) => {
    const text = e.target.value.trim();
    if(e.which === 13){
      this.props.onSave(text);
      if(this.props.newTodo){
        this.setState({
          text:''
        })
      }
    }
  }
  
  render() {
    const { text } = this.state;
    const { type,editing,newTodo,placeholder } = this.props;
    const  classes = classnames({
      [styles.edit]:editing,
      [styles.new]:newTodo
    })
    return (
      <input
        className={classes}
        type={type}
        value={ text }
        onBlur={ this.handleBlur }
        onChange={ this.handleChange }
        onKeyDown={ this.handleSubmit }
        placeholder={ placeholder }/>
    );
  }
}