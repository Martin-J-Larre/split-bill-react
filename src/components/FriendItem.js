import React from "react";
import { Button } from "./Button";

export const FriendItem = ({ name, image, balance }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are ok!</p>}
      <Button>Select</Button>
    </li>
  );
};
