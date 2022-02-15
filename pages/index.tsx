import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='px-120 py-11 h-screen w-full flex justify-center items-center'>
      <Head>
        <title>Template</title>
      </Head>
      <div className='max-w-7xl w-full h-full text-center flex items-center'>
        <div className='w-full grid place-items-center gap-6 grid-flow-row grid-cols-4'>
          {Array.from({ length: 8 }).map((v, i) => {
            return (
              <div
                className='rounded-15 w-250 aspect-square bg-primary-800 cursor-pointer trasnform hover:-translate-y-1 duration-200 shadow-1'
                key={i}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
