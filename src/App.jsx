import { Messages } from "./Message";
import { useState, useRef, useEffect } from "react";
import { Form } from "./Form";
import { ItemList } from "./Items";

import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  const items =
    (localStorage.getItem("items") &&
      JSON.parse(localStorage.getItem("items"))) ||
    [];
  return items;
};

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (name) => {
    const item = {
      id: nanoid(),
      name: name,
      completed: false,
    };
    const news = [...items, item];
    setItems(news);
    setLocalStorage(news);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main>
      <div className="section-center">
        <ToastContainer />

        {/* all the form functionaluty is handled inside form */}
        <Form addItem={addItem} />
        <ItemList items={items} removeItem={removeItem} editItem={editItem} />
      </div>
    </main>
  );
};

export default App;
