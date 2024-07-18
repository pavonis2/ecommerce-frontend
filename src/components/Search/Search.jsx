import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './Search.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { credentials } from '../../../credentials';

const Search = ({ setShowSearch }) => {

  const [query, setQuery] = useState("")
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  let { data, loading, error } = useFetch(
    `/products?populate=*&[filters][title][$contains]=${query}`
  );

  if(query.length === 0) {
    data = null;
  }

  return (
    <div className='search-modal'>
      <div className='form-field'>
        <input 
          type="text" 
          autoFocus 
          placeholder='Search for products'
          value={query}
          onChange={onChange}
        />
        <CloseIcon onClick={() => setShowSearch(false)} className='close-btn'/>
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.map(item => (
            <div key={item.id} className="search-result-item" onClick={()=> {
              navigate("/product/" + item.id);
              setShowSearch(false);
            }}>
              <div className="image-container">
                <img src={credentials.REACT_APP_UPLOAD_URL +item?.attributes?.img?.data?.attributes?.url} alt='' loading='lazy'/>
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search 

/* import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Search.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { credentials } from '../../../credentials';

const fallbackImage = 'path_to_fallback_image.jpg'; // Replace with your fallback image path

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [imageLoaded, setImageLoaded] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data, loading, error } = useFetch(
    `/products?populate=*&[filters][title][$contains]=${query}`
  );

  if (query.length === 0) {
    data = null;
  }

  const handleImageLoad = (id) => {
    setImageLoaded((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleImageError = (id) => {
    setImageLoaded((prevState) => ({ ...prevState, [id]: 'error' }));
  };

  return (
    <div className='search-modal'>
      <div className='form-field'>
        <input 
          type="text" 
          autoFocus 
          placeholder='Search for products'
          value={query}
          onChange={onChange}
        />
        <CloseIcon onClick={() => setShowSearch(false)} className='close-btn' />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.map((item) => (
            <div 
              key={item.id} 
              className="search-result-item" 
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="image-container">
                //Show grey square while image loads 
                {!imageLoaded[item.id] && <div className="image-placeholder"></div>}
                <img 
                  src={imageLoaded[item.id] === 'error' 
                        ? fallbackImage 
                        : credentials.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} 
                  alt={item.attributes.title}
                  loading='lazy'
                  style={{ display: imageLoaded[item.id] ? 'block' : 'none' }}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item.id)}
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search; */