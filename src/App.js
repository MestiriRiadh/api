import React from "react";
import UserList from "./UserList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Users List</h1>
      <UserList className="users-list" />
    </div>
  );
};

export default App;
