import React from "react";
import { getOptions } from "../services/filter";

const options = getOptions()

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