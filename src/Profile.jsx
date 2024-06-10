// Profile.js
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from backend
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Username: {user.username}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
