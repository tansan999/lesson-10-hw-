import React from 'react';
import './UserCard.css'; // Assuming you will create a CSS file for styling

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <address>
        <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}
      </address>
    </div>
  );
};

export default UserCard;