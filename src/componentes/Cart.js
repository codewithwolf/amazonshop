import React,{useState} from 'react';
import { useEffect } from 'react';


const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className=" ">
                <div className=" " key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button className=" ml-8 " onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button className=" ml-16 bg-slate-500 w-40" onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>rs {price}</span>
        </div>
    </article>
  )
}

export default Cart