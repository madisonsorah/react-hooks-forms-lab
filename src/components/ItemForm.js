import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setName] = useState("");
  const [itemCategory, setCategory] = useState("Produce");

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };
  
  function handleItemName(e) {
    setName(e.target.value);
  }
  
  function handleItemCategory(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    console.log("Hello");
    e.preventDefault();
    onItemFormSubmit(newItem);
  }
  
  
  return (
    <form className="NewItem" onSubmit= { handleSubmit }>
      <label>
        Name:
        <input type="text" name="name" onChange= { handleItemName }/>
      </label>

      <label>
        Category:
        <select name="category" onChange= { handleItemCategory }>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
