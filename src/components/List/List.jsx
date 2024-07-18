import React from 'react'
import Card from '../Card/Card'
import './List.scss'
import useFetch from '../../hooks/useFetch';

const List = ({subCats, maxPrice, sort, catId}) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className='list'>
      <img 
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="" 
          className='catImg'
      />
       {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List