import { useState } from "react";
import { Button } from "./Button";

const idGenerator = () => {
  return Math.trunc(Math.random()).toString(36) + Date.now().toString(36);
};

export const FormAddFriend = ({ onListFriends }) => {
  const [friendName, setFriendName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=933372");

  const handleFriendName = ({ target }) => {
    setFriendName(target.value);
  };
  const handleImage = ({ target }) => {
    setImage(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!friendName || !image) return;

    const newFriend = {
      id: idGenerator(),
      name: friendName,
      image: image,
      balance: 0,
    };
    onListFriends(newFriend);
    setFriendName("");
    setImage("https://i.pravatar.cc/48?u=933372");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type="text" value={friendName} onChange={handleFriendName} />

      <label>Image url</label>
      <input type="text" value={image} onChange={handleImage} />

      <Button>Add</Button>
    </form>
  );
};
