import React from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
  return (
    <UserCardDiv>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <address>
        <strong>Address:</strong> {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </address>
    </UserCardDiv>
  );
};

const UserCardDiv = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    color: #2d3a4b;
  }
  p,
  address {
    margin: 6px 0;
    color: #555;
    font-size: 15px;
  }
  address {
    font-style: normal;
  }
`;

export default UserCard;
