import React from 'react';
import './preview.component.collection.scss';
import Collectionitem from '../collection-item/collection.item.component';

const Collectiopreview = ({title,items})=>{
 
  return(
<div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>      {
    items.filter((item, idx) => idx < 4)
        .map(item => (
          <Collectionitem key={item.id} item={item} />
        ))}
</div>
</div>
)}

export default Collectiopreview;