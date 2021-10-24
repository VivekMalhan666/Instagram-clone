function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck"
        alt="user profile"
        className="rounded-full border p-[2px] w-16 h-16 object-cover"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Vivek</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button type="button" className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
