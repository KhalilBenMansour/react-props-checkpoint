import "./App.css";
import Profile from "./profile/Profile";
import photo from "./profilePhoto.jpg";

function App() {
  const alertMyName = (name) => alert(name);
  return (
    <div className="App">
      <Profile
        fullName="Khalil Ben Mansour"
        bio="civil engineer"
        profession="Web Developer"
        alertMyName={alertMyName}
      >
        <img src={photo} alt="profileImg" style={{ width: 200 }} />
      </Profile>
    </div>
  );
}

export default App;
