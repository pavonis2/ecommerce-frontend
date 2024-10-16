import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Blurhash } from 'react-blurhash'
import { useEffect } from 'react'

const Card = ({item}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = import.meta.env.VITE_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url
  }, [import.meta.env.VITE_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url])
  
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className='card'>
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <>
            <div style={{display: imageLoaded ? 'none' : 'inline'}}>
              <Blurhash 
                hash='LEHLk~WB2yk8pyo0adR*.7kCMdnj'
                width={300}
                height={400}
                resolutionX={32}
                resolutionY={32}
                punch={1}
                />
            </div>
            <img 
              src={import.meta.env.VITE_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} 
              alt="" 
              className="mainImg" 
              style={{display: !imageLoaded ? 'none' : 'inline'}}
            />
            <img 
              src={import.meta.env.VITE_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url} 
              alt="" 
              className="secondImg" 
            />
          </>
          
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 10}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card