import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  const addItemtoBasket = () => {
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
    // Push item into REDUX
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // Remove item into REDUX
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} className='object-contain' />

      {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p className=''>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='USD' />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              src='https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png'
              alt='prime'
              className='w-12'
            />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className='flex flex-col space-y-2 my-auto justify-end'>
        <button className='button mt-auto' onClick={addItemtoBasket}>
          Add to Basket
        </button>
        <button className='button mt-auto' onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
