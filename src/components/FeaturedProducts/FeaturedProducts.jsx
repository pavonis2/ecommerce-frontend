import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    );
    
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        {type === "featured" 
          ? (<p>
              Experience the epitome of luxury and refinement with our meticulously curated selection of handpicked products. Discover our featured collection, where exceptional quality meets timeless style. Elevate your lifestyle and indulge in the art of craftsmanship. Explore now and embrace a world of elegance and sophistication that defines your unique taste.
            </p>)
          : (<p>
              Stay ahead of the curve with our handpicked selection of trending products. Explore the hottest items in fashion, technology, home decor, and more. Shop now and be the first to experience the latest must-have items that are making waves in the market.
            </p>)
        }
      </div>
      <div className="bottom">
        {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts