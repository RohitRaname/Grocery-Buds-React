import { useState } from "react";
export const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName === "") return;
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Add Item
        </button>
      </div>
    </form>
  );
};
