import React from "react";
import { FriendItem } from "./FriendItem";

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((f) => (
        <FriendItem
          key={f.id}
          name={f.name}
          image={f.image}
          balance={f.balance}
        />
      ))}
    </ul>
  );
};
