import React from "react";
import { KEY_RETURN } from 'keycode-js'
//end here
class InputBox extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               value: props.value || ''
          };
     }
     
     handleKeyUpEvent(e) {
          const {addNewItem} = this.props;
          const text = this.state.value.trim()

          if(e.keyCode === KEY_RETURN && text ) {
               //Add new todo here + clear text box
               addNewItem(text);
               this.clear()          }
     }
     
     handleChangeEvent(e) {
               this.setState({value: e.target.value});
     }
     render() {
          return (
               <input type="text" 
               className="form-control add-todo" 
               value={this.state.value}
               onKeyUp={this.handleKeyUpEvent.bind(this)}
               onChange={this.handleChangeEvent.bind(this)}
               placeholder="add new"/> )
     }
     
}
export default InputBox