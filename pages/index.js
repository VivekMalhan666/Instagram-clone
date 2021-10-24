import Head from 'next/head';

// Code splitting using dynamic loading
import dynamic from 'next/dynamic';

// Import using dynamic loading
const Header = dynamic(() => import('../components/Header'));
const Feed = dynamic(() => import('../components/Feed'));

export default function Home() {
  return (
    <div className=" scrollbar-hide overflow-y-visible h-screen">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
}
