


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ isLoggedIn, userId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {

      axios.get('https://elchocrud.pro/dashboard/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h2>Home Page</h2>
      {isLoggedIn ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      ) : (
        <p>Please login to view the users.</p>
      )}
    </div>
  );
};

export default Home;
