import React from 'react'
import { CollectionItem } from '../collection-item/index.jsx'
import './styles.scss'

export const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((item, idx) => idx < 4).map((item, index) => <CollectionItem key={item.id} {...item} />)
      }
    </div>
  </div>
)