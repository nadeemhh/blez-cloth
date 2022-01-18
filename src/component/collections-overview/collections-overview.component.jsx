import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collectiopreview from '../../component/preview-component/preview.component.collection'; 
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  
  return(
  <div className='collections-overview'>
    {
collections.map(({id,...othercollectionprops}) => (
    <Collectiopreview key={id} {...othercollectionprops}/>
))

  }
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
