import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  //generating random rating star number
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState();

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  const dispatch = useDispatch();

  const addItemToBusket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //sending the product as an action to REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 items-center'>
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
        <Currency quantity={price} currency='GBP' />
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
      <button onClick={addItemToBusket} className='mt-auto button'>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
