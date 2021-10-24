import PropTypes from 'prop-types';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt={username}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Image */}
      <img src={img} alt="Post" className="object-cover w-full" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="post-button" />
          <ChatIcon className="post-button" />
          <PaperAirplaneIcon className="post-button rotate-45" />
        </div>
        <BookmarkIcon className="post-button" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1 cursor-default">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment...."
          className="border-none flex-1 focus:ring-0 outline-none "
        />
        <button type="submit" className="font-bold text-blue-400">
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
Post.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  userImg: PropTypes.string,
  img: PropTypes.string,
  caption: PropTypes.string,
};
