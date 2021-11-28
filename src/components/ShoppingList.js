import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [changedValue, setChangedValue] = useState("")

  function handleSearchChange(e) {
    setChangedValue(e.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filterByCategory = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })

  const filterBySearch = filterByCategory.filter((item) => {
    if (changedValue === "") {
      return true;
    } 
    return item.name === changedValue;
  })
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={(newItem) => { 
        const newItemList = [...items, newItem];
        console.log(newItem);
        console.log(newItemList);
        setItems(newItemList);
      }}/>
      <Filter onCategoryChange={handleCategoryChange} inputValue={changedValue} onSearchChange= {handleSearchChange} />
      <ul className="Items">
        {filterBySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
