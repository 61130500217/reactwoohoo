import React from "react";

const options = {
     all: 'All',
     active: 'Active',
     completed: 'Completed'
};

const Filter = (props) => {
     const {filter, change } = props;
     const getClass = key => (key === filter ? 'selected' : '');

     return (
          <ul className="filter list-unstyled clearfix">
               {Object.keys(options).map(key => (
                    <li key={key}>
                         <a href='#' onClick={() => change(key)} className={getClass(key)}>
                              {options[key]}
                         </a>
                    </li>

               ))}
          </ul>
     );
}
export default Filter;