import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  //generating random rating star number
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        Cateogory
      </p>
      <Image src={image} height={200} width={200} className='object-contain' />

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {/* https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f */}
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' key={i} />
          ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5 '>
        <Currency quantity={price} currenct='GBP' />
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img
            src='https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png'
            alt='prime'
            className='w-12'
          />
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      )}
      <button className='mt-auto button'>Add to basket</button>
    </div>
  );
};

export default Product;
