import "./App.css";

import userData from "../public/userData.json";
import { SyntheticEvent, useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [userName, setUsername] = useState<string>();

  const handleUserName = async () => {
    if (userName) {
      const url = `https://api.github.com/users/${userName}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    }
  };

  function formatDate(dateString: string) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    //@ts-ignore
    return date.toLocaleDateString("en-US", options);
  }

  function capChatAt1(loginName: string) {
    let capWord = loginName.charAt(0).toUpperCase() + loginName.slice(1);
    return capWord;
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <div className="w-[750px] h-[500px] flex flex-col items-center">
        <div className="text-white ml-4 mb-5">
          <h1 className="text-2xl">devfinder</h1>
        </div>
        <div className="p-2 bg-blue-950 rounded-xl flex items-center">
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Search GitHub username..."
            className="p-2 rounded-lg bg-blue-950 placeholder:text-white w-[450px] mr-2"
            onChange={(e: SyntheticEvent) => setUsername(e.target.value)}
          />
          <button
            className="bg-blue-900 rounded-lg text-white font-light p-2 text-sm"
            onClick={handleUserName}>
            Search
          </button>
        </div>

        <div className="mt-3 w-[530px] rounded-xl h-[380px] bg-blue-950">
          <div className="flex p-2">
            <div>
              <img
                src={userData.avatar_url}
                alt="avatar"
                className="h-28 w-28 rounded-full p-2"
              />
            </div>
            <div className="text-white p-2 gap-5">
              <p className="text-2xl">The {capChatAt1(userData.login)}</p>
              <p className=" text-gray-400 font-light">@{userData.login}</p>
              <p className="font-light">
                Joined {formatDate(userData.created_at)}
              </p>
            </div>
          </div>
          <div className="text-white flex p-5">{userData.bio}</div>
          <div className="w-[480px] h-[70px] bg-gray-900 ml-5 rounded-xl text-white flex gap-20 justify-center p-3">
            <p className="flex flex-col">
              <span>Repos</span>
              {userData.public_repos}
            </p>
            <p className="flex flex-col">
              <span>Followers</span>
              {userData.followers}
            </p>
            <p className="flex flex-col">
              <span>Following</span>
              {userData.following}
            </p>
          </div>
          <div className="text-white grid grid-cols-2 ml-20 gap-3 w-[480px] p-2 justify-center items-center">
            <p>{userData.location}</p>
            <p>
              {userData.twitter_username === null
                ? "Not available"
                : userData.twitter_username}
            </p>
            <p>{userData.blog === "" ? "Not available" : userData.blog}</p>
            <p>
              <a href={userData.html_url}>@{userData.login}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
