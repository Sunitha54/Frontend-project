import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Breadcrum/Breadcrum'
import { ProductDisplay } from '../ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../DiscriptionBox/DescriptionBox'
import { RelatedProduct } from '../RelatedProduct/RelatedProduct'

export const Product = () => {

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  


  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />     
      <RelatedProduct />
      
    </div>
  )
}
