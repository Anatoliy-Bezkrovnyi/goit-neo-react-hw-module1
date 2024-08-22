import Profile from './Profile.jsx'
import './App.module.css'
import userData from '../userData.json'


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
    </>
  );
};

export default App
