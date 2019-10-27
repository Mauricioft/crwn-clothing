import React, { useState } from 'react'
import { SHOP_DATA } from './data'
import { CollectionPreview } from '../../components/collection-preview/index.jsx'
import './styles.scss'

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)
  return(
    <div className='shop-page'>
      {
        collections.map((collection, index) => <CollectionPreview key={index} {...collection} />)
      }
    </div>
  )
}

export default ShopPage