import Image from 'next/image';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* 1) Top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        {/* 640px-ees doosh Amazon logo ni GROW hj telne. */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            width={150}
            height={40}
            className='cursor-pointer object-contain'
          />
        </div>

        {/* 1.1) Search nav */}
        {/* 640px-ees doosh search bas alga bolno. */}
        <div className='ml-4 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none'
          />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>

        {/* 1.2) Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          {/* =====SIGN IN & SIGN OUT===== */}
          <div className='link' onClick={!session ? signIn : signOut}>
            <p className='hover:underline'>
              {session ? `Hello, ${session.user.name}` : 'Sign In'}
            </p>
            <p className='font-extrabold md:text-sm mt-2'>Account & Lists</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          {/* =====SHOPPING CART===== */}
          <div
            onClick={() => router.push('/checkout')}
            className='relative link flex items-center'
          >
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              {items.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* 2) Bottom nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <Bars3Icon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals Video</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Price</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper toolkit Again</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
