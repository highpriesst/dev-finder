import "./App.css";
import SearchBar from "./components/searchBar";
import UserCard from "./components/userCard";

function App() {
  return (
    <div className="h-screen w-screen border flex justify-center items-center">
      <div className="w-[600px] h-[500px] border flex flex-col items-center">
        <SearchBar />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
