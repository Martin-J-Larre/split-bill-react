import React from "react";
import { Button } from "./Button";

export const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with x</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label>X's expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};
