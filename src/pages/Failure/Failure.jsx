import React, { useEffect, useState } from 'react';
import './Failure.scss';
import { Link } from 'react-router-dom';

const Failure = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
      <div className="card">
        <div className={`checkMark ${isLoading ? 'spinner' : 'success'}`}>
          {isLoading ? '' : '❌'}
        </div>
        {!isLoading && 
          <>
            <div className='middle'>Something went wrong!!!</div>
            <Link className='home' to="/">KEEP SHOPPING</Link>
          </>
        }
      </div>
    </div>
  )
}

export default Failure;
