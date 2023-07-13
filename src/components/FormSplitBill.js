import { useState } from "react";
import { Button } from "./Button";

export const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [selectedPayer, setSelectedPayer] = useState("user");

  const payByFriend = bill ? bill - yourExpense : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !yourExpense) return;
    onSplitBill(selectedPayer === "user" ? payByFriend : -yourExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend}'s expense</label>
      <input type="text" disabled value={payByFriend} />

      <label>Who is paying the bill</label>
      <select
        value={selectedPayer}
        onChange={(e) => setSelectedPayer(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};
