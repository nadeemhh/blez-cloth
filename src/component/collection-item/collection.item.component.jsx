import React from 'react';
import { connect } from 'react-redux';
import './collection.item.component.scss';
import Custambutton from '../custam-button/custam-button.component';
import { addItem } from '../../redux/cart/cart.actions';


const Collectionitem = ({ item, addItem })  => {
   
    const { name, price, imageUrl } = item;

    return(
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
        <Custambutton onClick={() => addItem(item)}  inverted>ADD  TO CART</Custambutton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  

export default connect(null,mapDispatchToProps)(Collectionitem);