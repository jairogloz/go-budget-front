import React, { useState } from "react";
import config from "../../../config";
import { useSession } from "../../../context/SessionContext";

function AddForm({ refreshTransactions }) {
  const [date, setDate] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");
  const timeChange = (e) => {
    setTime(e.target.value);
  };
  const [formData, setFormData] = useState({
    amount: 0,
    account_id: "",
    category_id: "",
    subcategory_id: "",
    description: "",
  });

  const sessionCtx = useSession();
  const accessToken = sessionCtx.session?.access_token;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      // Allow "-" sign for negative numbers
      if (value === "-" || value === "") {
        setFormData({
          ...formData,
          [name]: value,
        });
      } else {
        setFormData({
          ...formData,
          [name]: parseFloat(value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const formatDateTime = (dateStr, timeStr) => {
    // Combine the date and time strings
    const dateTimeStr = `${dateStr}T${timeStr}:00`;

    // Create a new Date object using the combined string
    const dateObj = new Date(dateTimeStr);

    // Convert it to UTC format and return the ISO string (which includes the Z for UTC)
    return dateObj.toISOString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDateTime = formatDateTime(date, time);

    // Add the created_at field to formData
    const updatedFormData = {
      ...formData,
      created_at: formattedDateTime,
    };

    console.log("Form data:", updatedFormData);

    try {
      const response = await fetch(`${config.backendURL}/transactions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      console.log("Response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Call the refreshTransactions function to fetch the latest transactions
      refreshTransactions();

      alert("Transaction added!");
    } catch (error) {
      console.log(error);
      alert("Error adding transaction:", error);
    }
  };

  return (
    <div className="card" style={{ maxWidth: "400px" }}>
      <div className="card-header">Add Transaction</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Amount */}
          <div className="form-group">
            <label>Amount: </label>
            <input
              type="number"
              step="0.01"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="-99999999"
            />
          </div>

          {/* Account ID */}
          {/* Todo: load dinamically */}
          <div className="form-group">
            <label>Account ID: </label>
            <select
              name="account_id"
              value={formData.account_id}
              onChange={handleChange}
              required
            >
              <option value="">-- Select an account --</option>
              <option value="66f9a19143e5eece5b710f75">BBVA Credit</option>
              <option value="66f9a19143e5eece5b710f76">BBVA Main</option>
              <option value="66f9a19143e5eece5b710f77">BBVA Cuenta</option>
              <option value="66f9a19143e5eece5b710f78">BBVA Ahorro10</option>
              <option value="66f9a24443e5eece5b710f7a">Cash MXN</option>
              <option value="66f9a2b243e5eece5b710f7c">Cash USD</option>
            </select>
          </div>

          {/* Category ID */}
          {/* Todo: load dinamically */}
          <div className="form-group">
            <label>Category ID:</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option value="guilt-free">Guild Free</option>
              <option value="fixed-costs">Fixed Costs</option>
              <option value="savings">Savings</option>
              <option value="investments">Investments</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Subcategory ID */}
          {/* Todo: load dinamically */}
          <div className="form-group">
            <label>Subcategory:</label>
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option value="eating out">Eating Out</option>
              <option value="groceries">Groceries</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label>Date:</label>
            <input type="date" name="date" value={date} onChange={dateChange} />
          </div>

          {/* Time */}
          <div className="form-group">
            <label>Time:</label>
            <input type="time" name="time" value={time} onChange={timeChange} />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
