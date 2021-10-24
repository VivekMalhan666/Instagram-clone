//  Code splitting using dynamic loading
import dynamic from 'next/dynamic';

// Importing component using dynamic loading
const Post = dynamic(() => import('./Post'));

const posts = [
  {
    id: '123',
    username: 'rjvivekmalhan',
    userImg:
      'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck',
    img: 'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck',
    caption: "Let's go",
  },
  {
    id: '234',
    username: 'rjvivekmalhan',
    userImg:
      'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck',
    img: 'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck',
    caption: 'One step towards success',
  },
  {
    id: '345',
    username: 'rjvivekmalhan',
    userImg:
      'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck',
    img: 'https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck',
    caption: 'Failure is just a stepping stone',
  },
];

function Posts() {
  return (
    <div>
      {posts.map(({ id, userImg, username, caption, img }) => (
        <Post
          key={id}
          id={id}
          username={username}
          userImg={userImg}
          img={img}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default Posts;
