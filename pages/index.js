/* ./pages/index.js               */
import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ho'onalu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='md:container md:mx-auto'>Welcome to Ho'onalu</div>
    </div>
  );
}
