import React, { useState} from "react";
import "./List.css";

function Item({ item, index, removeItem }) {
  return (
    <div className="items">
      {item.title}
      {"  "}
      <button style={{ background: "#761137" ,float:"right" }} onClick={() => removeItem(index)}>
        x
      </button>
    </div>
  );
}

function CreateItem({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new Item"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function List() {
  const [items, setItems] = useState([
    {
      title: "Dummy item 1",
    },
    {
      title: "Dummy item 2",
    },
    {
      title: "Dummy item 3",
    },
  ]);

  const addItem = (title) => {
    const newItems = [...items, { title, completed: false }];
    setItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="list-container">
      <div className="header">A list </div>

      <div className="create-item">
        <CreateItem addItem={addItem} />
      </div>
  
        <div className="items">
          {items.map((item, index) => (
            <Item
              item={item}
              index={index}
              removeItem={removeItem}
              key={index}
            />
          ))}
        </div>
      
    </div>
  );
}

export default List;
