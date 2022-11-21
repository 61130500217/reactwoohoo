import React from 'react'

const TodoItem = (props) => {
     const { data } = props;

return (
     <li className="list-group-item">
            <div className="checkbox">
              
              <label
                className="form-check-label">
                  <input
                className="form-check-input"
                type="checkbox"
                value=""
               /> {data.text}
              </label>
            </div>
          </li>
);}
export default TodoItem;