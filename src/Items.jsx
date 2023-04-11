export const ItemList = ({ items, removeItem, editItem }) => (
  <ul className="items">
    {items.map((item) => {
      return (
        <li className="single-item" key={item.id}>
          <input
            type="checkbox"
            onClick={(e) => editItem(item.id)}
            checked={item.completed}
          ></input>
          <p style={{ textDecoration: item.completed && "line-through" }}>
            {item.name}
          </p>
          <button
            className="btn remove-btn"
            onClick={() => removeItem(item.id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
