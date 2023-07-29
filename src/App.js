import { useState } from "react";
import {
  FriendsList,
  FormAddFriend,
  Button,
  FormSplitBill,
} from "./components";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [listFriends, setListFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleListFriends = (newFriend) => {
    setListFriends([...listFriends, newFriend]);
    setShowAddFriend(false);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((cur) => (cur === friend ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setListFriends((friends) =>
      friends.map((friend) =>
        friend.name === selectedFriend
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
console.log(selectedFriend);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={listFriends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onListFriends={handleListFriends} />}

        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={Math.trunc(Math.random() * 1000) + Date.now()}
        />
      )}
    </div>
  );
}

export default App;
