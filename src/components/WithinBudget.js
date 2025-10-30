import React, { useState } from 'react'

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

    const [budget,setBudget] = useState("")
    return (
        <div className='p-14'>
            <h2 className='font-bold'>Enter your budget to check avaliable items:</h2>

            <input
            type='number'
            value={budget}
            onChange={(e)=>setBudget(e.target.value)}
            />

            <h3>Items you can buy are in green color</h3>
            <table>
                <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>
                {item.name}
              </td>
              <td
                className={`${Number(budget)>=item.price ? "text-green-600" : "text-red-600"}`}
              >
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
            </table>
        </div>
    )
}

export default WithinBudget