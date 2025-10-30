import React, { useState } from "react";

function WithinBudget() {
  const items = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Neutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "Sound Bar", price: 50 },
    { name: "Iphone", price: 80 },
  ];

  const [budget, setBudget] = useState("");

  return (
    <div>
      <h2>Enter your budget to check available items:</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <h3>Items you can buy are in Green color</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const affordable = Number(budget) >= item.price;
            const color = budget
              ? affordable
                ? "green"
                : "red"
              : "black"; // default black
            return (
              <tr key={item.name}>
                <td style={{ color }}>{item.name}</td>
                <td style={{ color }}>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WithinBudget;
