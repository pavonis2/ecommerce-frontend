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
        </div>
        {!isLoading && 
          <>
            <div className='middle'>Payment failed!!!</div>
            <div>
                For any product related query, drop an email to
            </div>
            <div>fashionhub@shop.com</div>
            <Link className='home' to="/">Continue Shopping</Link>
          </>
        }
      </div>
    </div>
  )
}

export default Failure;
