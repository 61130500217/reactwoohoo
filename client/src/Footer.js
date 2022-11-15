import React from 'react'
import Filter from './module/Filter';

const Footer = (props) => {
     const {count, filter, changeFilter} = props;

     return (
          <div className="todo-footer clearfix" >
               <div className='float-start'>
               <span className="count-todos">{count}</span>
               {' item left '}
               </div>
               <div className='float-end'>
                    <Filter filter={filter} change={changeFilter} />
               </div>
          </div>
     )
}
export default Footer