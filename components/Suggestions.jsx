import { useEffect, useState } from 'react';
import faker from 'faker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400 ">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold" type="button">
          See All
        </button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex justify-between mt-3 items-center"
        >
          <img
            className="w-10 h-10 rounded-full p-[2px]"
            src={profile.avatar}
            alt="profile pic"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-sm text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
