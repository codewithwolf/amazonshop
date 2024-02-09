import React from 'react';


const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="cards justify-center">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p className="text-center">{title}</p>
            <p className="text-center">{author}</p>
            <p className="">Price - {price}Rs</p>
            <button className="bg-slate-500" onClick={()=>handleClick(item)}  >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards