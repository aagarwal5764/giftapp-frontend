import { useState } from "react";
import { addGift } from "../services/api";

function AddGift() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = async () => {
    await addGift({ name, price });
    alert("Gift added");
  };

  return (
    <div>
      <h2>Add Gift</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddGift;