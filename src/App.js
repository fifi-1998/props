import "./Components/Profile/style.css";
import Profile from "./Components/Profile/Profile.jsx";

function App() {
  const data = [
    {
      fullname: " Mejri Feriel",
      bio: " A hardworking girl the with love of movies and music ",
      profession: " Data science and web devoleper ",
    },
  ];
  const handleName = (name) => {
    alert(`Welcome ${name}`);
  };
  return (
    <div className="App">
      <Profile data={data} handleName={handleName} />
    </div>
  );
}

export default App;
