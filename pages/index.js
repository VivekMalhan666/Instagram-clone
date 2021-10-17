import Head from 'next/head';

// Code splitting using dynamic loading
import dynamic from 'next/dynamic';

// Import using dynamic loading
const Header = dynamic(() => import('../components/Header'));

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  );
}
