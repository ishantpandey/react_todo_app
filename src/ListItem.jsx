import React from 'react'

function ListItem({id,val,delItem}) {
  return (
    <li className='list-item' key={id}><p className='card-text'>{val}</p> <button className='btn btn text-danger text-center' onClick={()=>{delItem(id)}}><span class="material-symbols-outlined">
    delete
    </span></button></li>
  )
}
export default ListItem