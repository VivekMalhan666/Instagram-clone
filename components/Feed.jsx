// Code Splitting using dynamic loading
import dynamic from 'next/dynamic';

// Import Components using dynamic loading
const Stories = dynamic(() => import('./Stories'));
const Posts = dynamic(() => import('./Posts'));
const MiniProfile = dynamic(() => import('./MiniProfile'));
const Suggestions = dynamic(() => import('./Suggestions'));

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
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed">
          {/* mini profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
