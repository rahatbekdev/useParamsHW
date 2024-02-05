


import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ isLoggedIn, userId }) => {
  const { userId: profileUserId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      {isLoggedIn ? (
        <div>
          <p>Displaying profile for user with ID: {profileUserId}</p>
          {/* Fetch and display user details based on profileUserId */}
        </div>
      ) : (
        <p>Please login to view user profiles.</p>
      )}
    </div>
  );
};

export default UserProfile;
