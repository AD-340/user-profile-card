import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photo="https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_640.png"
      />
    </div>
  );
}

export default App;
