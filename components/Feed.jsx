// Code Splitting using dynamic loading
import dynamic from 'next/dynamic';

// Import Components using dynamic loading
const Stories = dynamic(() => import('./Stories'));
const Posts = dynamic(() => import('./Posts'));

function Feed() {
  return (
    <main className="grid bg-gray-50 grid-col-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      {/* Left Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* Right Section */}
      <section>
        {/* mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
