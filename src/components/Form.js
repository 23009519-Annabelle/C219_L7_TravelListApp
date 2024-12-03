import React, { useState } from "react";


export default function Form({ addItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      addItem(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    function handleDescriptionChange(e) {
      setDescription(e.target.value);
    }
  
    function handleQuantityChange(e) {
      setQuantity(Number(e.target.value));
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <div>
          <select value={quantity} onChange={handleQuantityChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          &nbsp;
          <label>
            <input
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Item..."
            />
          </label>
          &nbsp;
          <button>ADD</button>
        </div>
      </form>
    );
  }