import Image from 'next/image';
import photo1 from '../public/images/photo1.jpeg';

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <Image 
      src='https://res.cloudinary.com/dmkz7axbh/image/upload/IMG_1444_krgzjv.jpg'
      alt="cat"
      width={200}
      height={300}
      placeholder='blur'
      blurDataURL='https://res.cloudinary.com/dmkz7axbh/image/upload/e_blur:1000,q_1,w_10,f_webp/IMG_1444_krgzjv.jpg'
      />
    </>
  )
}