import React from 'react';


const Navbar = ({size, setShow}) => {
  return (
    <>
    
    
        <div className="navbar flex justify-around bg-green-700 h-20 items-center">
            <div className=" font-serif cursor-pointer" onClick={()=>setShow(true)}>
                My Shopping
            </div>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
        
        </>
  )
}

export default Navbar