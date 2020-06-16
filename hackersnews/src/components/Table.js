import React from 'react';
import {isSearched} from '../App'

const Table = ({list, pattern , onDismiss})=>{
    {list.filter(isSearched(pattern)).map(item=>{
        return(
          <div>
            <span><a href={item.url} >{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <button onClick={()=>onDismiss(item.objectID)}>
         Dismiss 
        </button>
          </div>
        )
      })}   
     
}
export default Table;