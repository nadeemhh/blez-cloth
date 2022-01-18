import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import './menu.item.scss';

const Menuitem = ({title,imageUrl,size,history,linkUrl,match})=>{
    
    return(
    <div style={{
        backgroundImage:`url(${imageUrl})`
    }} className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div className='content'>
    <h1 className='subtitle'>{title.toUpperCase()}</h1>
    <span className=''>shop now</span>
</div>
</div>
)}
export default withRouter(Menuitem);
