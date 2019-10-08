import React from 'react'
import './styles.scss'

export const MenuItem = ({ imageUrl, title, subtitle, size }) => (
  <div className={`${size} menu-item`}>
    <div 
      className='background-image' 
      style={{
        backgroundImage: `url(${imageUrl})`
      }} 
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
)