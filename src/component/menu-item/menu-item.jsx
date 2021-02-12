import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.scss';

/* history props getting through app component where component routed,it called props drilling 
   it is bad practice in react routing.

   withRouter gives history,location,match propertise to routing whole component.
*/ 
const MenuItem = ({ title, imageUrl, size, history,match,linkUrl }) => (
  <div className={`${size} menu-item`} onClick={()=>(history.push(`${match.url}${linkUrl}`))}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>

    </div>
  </div>
);

export default withRouter(MenuItem) ;