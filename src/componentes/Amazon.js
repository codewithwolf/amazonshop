import React from 'react';
import list from '../Data';

import Cards from './Card';

const Amazon = ({handleClick}) => {
  return (
    <div className=" bg-yellow-50">
    <section className="mt-9 max-w-[1000px] mx-auto grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 justify-center">
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </div>
  )
}

export default Amazon