import React, { useState } from "react";
import Form from "./Form.js";
import Logo from "./Logo.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

function App() {
  // State management
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("inputOrder");

  // Handlers for item operations
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    setItems([]); // Clear all items
  };

  // Sorting items based on selected criteria
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "description") return a.description.localeCompare(b.description);
    if (sortBy === "packed") return a.packed - b.packed;
    return 0; // Default input order
  });

  return (
    <div className="app">
      {/* Header */}
      <Logo />

      {/* Form to add new items */}
      <Form addItem={handleAddItem} />

      {/* Packing list with sorted items */}
      <PackingList
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />

      {/* Sorting dropdown */}
      <div className="sort-options">
        <label>
          Sort by:&nbsp;
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="inputOrder">Input Order</option>
            <option value="description">Description</option>
            <option value="packed">Packed Status</option>
          </select>
        </label>
      </div>

      {/* Clear items button */}
      <button onClick={handleClearItems} className="clear-button">
        Clear All Items
      </button>

      {/* Stats component */}
      <Stats items={items} />
    </div>
  );
}

export default App;
