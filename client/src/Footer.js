import React from 'react'
import Filter from './module/Filter';

const Footer = (props) => {
     const {count, filter, changeFilter} = props;

     return (
          <div className="todo-footer clearfix" >
               <div className='pull-left'>
                    <strong>
                      <span className="count-todos">{count}</span>   
                    </strong>
               {' item left '}
               </div>
               <div className='pull-right'>
                    <Filter filter={filter} change={changeFilter} />
               </div>
          </div>
     )
}
export default Footer