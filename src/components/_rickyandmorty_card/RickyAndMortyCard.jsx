import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  width: 220px;
  background: #222;
  color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 12px 0 4px 0;
`;

const Status = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${({ status }) =>
    status === "Alive" ? "#4caf50" : status === "Dead" ? "#f44336" : "#9e9e9e"};
  color: #fff;
  font-size: 0.9em;
`;

function RickyAndMortyCard() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results || []));
  }, []);

  return (
    <CardGrid>
      {characters.map((char) => (
        <Card key={char.id}>
          <Avatar src={char.image} alt={char.name} />
          <Name>{char.name}</Name>
          <Status status={char.status}>{char.status}</Status>
          <div>{char.species}</div>
        </Card>
      ))}
    </CardGrid>
  );
}

export default RickyAndMortyCard;
