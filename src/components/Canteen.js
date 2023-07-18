import React, { useState, useEffect } from "react";
import "./Canteen.css";

function Canteen() {
  const [counts, setCounts] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState(0);

  useEffect(() => {
    updateTotalPrice();
  }, [counts]);

  function incrementCount(index) {
    setCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += 1;
      return updatedCounts;
    });
  }

  function decrementCount(index) {
    setCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      if (updatedCounts[index] > 0) {
        updatedCounts[index] -= 1;
      }
      return updatedCounts;
    });
  }

  function extractPrice(priceString) {
    const numericalPart = priceString.replace(/[^0-9.]/g, "");
    return parseFloat(numericalPart);
  }

  function formatPrice(price) {
    return "₹ " + price.toFixed(2);
  }

  function updateTotalPrice() {
    let newTotalAmount = 0;
    let newSelectedItems = 0;

    counts.forEach((count, index) => {
      const priceString = document.getElementById(`price-${index}`).textContent;
      const price = extractPrice(priceString);

      newTotalAmount += count * price;
      newSelectedItems += count;
    });

    setTotalAmount(newTotalAmount);
    setSelectedItems(newSelectedItems);
  }

  function searchFoodItems() {
    const searchInput = document.querySelector("input[type=search]");
    const searchText = searchInput.value.toLowerCase();
    const foodItems = document.querySelectorAll("tbody tr");

    let found = false;
    foodItems.forEach((foodItem) => {
      const foodName = foodItem
        .querySelector("td:first-child")
        .textContent.toLowerCase();
      if (foodName.includes(searchText)) {
        foodItem.style.display = "";
        found = true;
      } else {
        foodItem.style.display = "none";
      }
    });

    const notFound = document.getElementById("not-found");
    const tdElement = document.getElementById("tdEle");
    if (notFound && tdElement) {
      if (!found) {
        tdElement.colSpan = 3;
        notFound.style.display = "table-row";
      } else {
        tdElement.colSpan = 1;
        notFound.style.display = "none";
      }
    }
  }

  function resetQuantities() {
    setCounts([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  }

  return (
    <div>
      <h1 className="text">VIT BHOPAL HOSTEL CANTEEN MENU</h1>

      <div className="container">
        <div className="search">
          <input
            type="search"
            placeholder="Search here...."
            onChange={searchFoodItems}
          />
        </div>
        <div id="total">Total Price: {formatPrice(totalAmount)}</div>

        <div className="reset-button">
          <button onClick={resetQuantities}>Reset</button>
        </div>
      </div>

      <div className="selected-items">Selected Items: {selectedItems}</div>

      <table>
        <thead>
          <tr>
            <th className="same">Food Items</th>
            <th className="same">Price ( ₹ )</th>
            <th className="same">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bread Omelette</td>
            <td id="price-0">₹ 45.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(0)}>
                  -
                </button>
                <span id="count-0" className="count">
                  {counts[0]}
                </span>
                <button className="plus" onClick={() => incrementCount(0)}>
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Plain Omelette</td>
            <td id="price-1">₹ 35.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(1)}>
                  -
                </button>
                <span id="count-1" className="count">
                  {counts[1]}
                </span>
                <button className="plus" onClick={() => incrementCount(1)}>
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Onion Omelette</td>
            <td id="price-2">₹ 40.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(2)}>
                  -
                </button>
                <span id="count-2" className="count">
                  {counts[2]}
                </span>
                <button className="plus" onClick={() => incrementCount(2)}>
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Boiled Egg</td>
            <td id="price-3">₹ 10.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(3)}>
                  -
                </button>
                <span id="count-3" className="count">
                  {counts[3]}
                </span>
                <button className="plus" onClick={() => incrementCount(3)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Paneer Tikka</td>
            <td id="price-4">₹ 125.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(4)}>
                  -
                </button>
                <span id="count-4" className="count">
                  {counts[4]}
                </span>
                <button className="plus" onClick={() => incrementCount(4)}>
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Chicken Tikka</td>
            <td id="price-5">₹ 130.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(5)}>
                  -
                </button>
                <span id="count-5" className="count">
                  {counts[5]}
                </span>
                <button className="plus" onClick={() => incrementCount(5)}>
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Tandoori Chicken (Full)</td>
            <td id="price-6">₹ 450.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(6)}>
                  -
                </button>
                <span id="count-6" className="count">
                  {counts[6]}
                </span>
                <button className="plus" onClick={() => incrementCount(6)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Tandoori Chicken (Half)</td>
            <td id="price-7">₹ 225.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(7)}>
                  -
                </button>
                <span id="count-7" className="count">
                  {counts[7]}
                </span>
                <button className="plus" onClick={() => incrementCount(7)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Tandoori Chicken (Quarter)</td>
            <td id="price-8">₹ 115.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(8)}>
                  -
                </button>
                <span id="count-8" className="count">
                  {counts[8]}
                </span>
                <button className="plus" onClick={() => incrementCount(8)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Chicken 65</td>
            <td id="price-9">₹ 100.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(9)}>
                  -
                </button>
                <span id="count-9" className="count">
                  {counts[9]}
                </span>
                <button className="plus" onClick={() => incrementCount(9)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Butter Chicken Masala</td>
            <td id="price-10">₹ 150.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(10)}>
                  -
                </button>
                <span id="count-10" className="count">
                  {counts[10]}
                </span>
                <button className="plus" onClick={() => incrementCount(10)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Kadhai Chicken Masala</td>
            <td id="price-11">₹ 140.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(11)}>
                  -
                </button>
                <span id="count-11" className="count">
                  {counts[11]}
                </span>
                <button className="plus" onClick={() => incrementCount(11)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Chicken Masala </td>
            <td id="price-12">₹ 140.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(12)}>
                  -
                </button>
                <span id="count-12" className="count">
                  {counts[12]}
                </span>
                <button className="plus" onClick={() => incrementCount(12)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Chicken Tikka Masala </td>
            <td id="price-13">₹ 140.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(13)}>
                  -
                </button>
                <span id="count-13" className="count">
                  {counts[13]}
                </span>
                <button className="plus" onClick={() => incrementCount(13)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Schezwan Chicken Noodles </td>
            <td id="price-14">₹ 130.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(14)}>
                  -
                </button>
                <span id="count-14" className="count">
                  {counts[14]}
                </span>
                <button className="plus" onClick={() => incrementCount(14)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Schezwan Chicken Rice </td>
            <td id="price-15">₹ 120.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(15)}>
                  -
                </button>
                <span id="count-15" className="count">
                  {counts[15]}
                </span>
                <button className="plus" onClick={() => incrementCount(15)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Chicken Fried Rice </td>
            <td id="price-16">₹ 130.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(16)}>
                  -
                </button>
                <span id="count-16" className="count">
                  {counts[16]}
                </span>
                <button className="plus" onClick={() => incrementCount(16)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Egg Fried Rice </td>
            <td id="price-17">₹ 120.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(17)}>
                  -
                </button>
                <span id="count-17" className="count">
                  {counts[17]}
                </span>
                <button className="plus" onClick={() => incrementCount(17)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Egg Noodles </td>
            <td id="price-18">₹ 120.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(18)}>
                  -
                </button>
                <span id="count-18" className="count">
                  {counts[18]}
                </span>
                <button className="plus" onClick={() => incrementCount(18)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Chicken Noodles </td>
            <td id="price-19">₹ 120.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(19)}>
                  -
                </button>
                <span id="count-19" className="count">
                  {counts[19]}
                </span>
                <button className="plus" onClick={() => incrementCount(19)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>plain Naan </td>
            <td id="price-20">₹ 25.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(20)}>
                  -
                </button>
                <span id="count-20" className="count">
                  {counts[20]}
                </span>
                <button className="plus" onClick={() => incrementCount(20)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Garlic Naan </td>
            <td id="price-21">₹ 35.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(21)}>
                  -
                </button>
                <span id="count-21" className="count">
                  {counts[21]}
                </span>
                <button className="plus" onClick={() => incrementCount(21)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Butter Naan </td>
            <td id="price-22">₹ 30.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(22)}>
                  -
                </button>
                <span id="count-22" className="count">
                  {counts[22]}
                </span>
                <button className="plus" onClick={() => incrementCount(22)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>plain Roti </td>
            <td id="price-23">₹ 20.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(23)}>
                  -
                </button>
                <span id="count-23" className="count">
                  {counts[23]}
                </span>
                <button className="plus" onClick={() => incrementCount(23)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Butter Roti </td>
            <td id="price-24">₹ 30.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(24)}>
                  -
                </button>
                <span id="count-24" className="count">
                  {counts[24]}
                </span>
                <button className="plus" onClick={() => incrementCount(24)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Butter Paneer Masala </td>
            <td id="price-25">₹ 140.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(25)}>
                  -
                </button>
                <span id="count-25" className="count">
                  {counts[25]}
                </span>
                <button className="plus" onClick={() => incrementCount(25)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>kadhai Paneer </td>
            <td id="price-26">₹ 130.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(26)}>
                  -
                </button>
                <span id="count-26" className="count">
                  {counts[26]}
                </span>
                <button className="plus" onClick={() => incrementCount(26)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Chilly Paneer </td>
            <td id="price-27">₹ 130.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(27)}>
                  -
                </button>
                <span id="count-27" className="count">
                  {counts[27]}
                </span>
                <button className="plus" onClick={() => incrementCount(27)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Veg Noodles </td>
            <td id="price-28">₹ 110.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(28)}>
                  -
                </button>
                <span id="count-28" className="count">
                  {counts[28]}
                </span>
                <button className="plus" onClick={() => incrementCount(28)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Schezwan Veg Noodles </td>
            <td id="price-29">₹ 120.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(29)}>
                  -
                </button>
                <span id="count-29" className="count">
                  {counts[29]}
                </span>
                <button className="plus" onClick={() => incrementCount(29)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Veg Fried Rice </td>
            <td id="price-30">₹ 110.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(30)}>
                  -
                </button>
                <span id="count-30" className="count">
                  {counts[30]}
                </span>
                <button className="plus" onClick={() => incrementCount(30)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Schezwan Veg Fried Rice </td>
            <td id="price-31">₹ 125.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(31)}>
                  -
                </button>
                <span id="count-31" className="count">
                  {counts[31]}
                </span>
                <button className="plus" onClick={() => incrementCount(31)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Plain Dosa</td>
            <td id="price-32">₹ 50.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(32)}>
                  -
                </button>
                <span id="count-32" className="count">
                  {counts[32]}
                </span>
                <button className="plus" onClick={() => incrementCount(32)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Masala Dosa</td>
            <td id="price-33">₹60.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(33)}>
                  -
                </button>
                <span id="count-33" className="count">
                  {counts[33]}
                </span>
                <button className="plus" onClick={() => incrementCount(33)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Onion Dosa</td>
            <td id="price-34">₹55.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(34)}>
                  -
                </button>
                <span id="count-34" className="count">
                  {counts[34]}
                </span>
                <button className="plus" onClick={() => incrementCount(34)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Ghee Dosa</td>
            <td id="price-35">₹60.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(35)}>
                  -
                </button>
                <span id="count-35" className="count">
                  {counts[35]}
                </span>
                <button className="plus" onClick={() => incrementCount(35)}>
                  +
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td> Egg Dosa</td>
            <td id="price-36">₹60.00</td>
            <td>
              <div className="quantity">
                <button className="minus" onClick={() => decrementCount(36)}>
                  -
                </button>
                <span id="count-36" className="count">
                  {counts[36]}
                </span>
                <button className="plus" onClick={() => incrementCount(36)}>
                  +
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="another">
        <div className="another_selected-items">
          Selected Items: {selectedItems}
        </div>

        <div id="another_total">Total Price: {formatPrice(totalAmount)}</div>

        <div className="another_reset-button">
          <button onClick={resetQuantities}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Canteen;
