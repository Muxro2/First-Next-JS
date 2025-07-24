import Image from 'next/image';

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <Image 
      src='https://res.cloudinary.com/dmkz7axbh/image/upload/w_800,h_600,c_fill,q_auto,f_auto,dpr_auto/IMG_1554_utgk93.jpg'
      alt="cat"
      width={150}
      height={250}
      />
    </>
  )
}