import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

const Post = ({ transact, setTransact }) => {
  const navigate = useNavigate();
  const [newTransaction, setNewTransaction] = useState({
    category: "",
    amount: "",
    date: "",
    description: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !newTransaction.date ||
      !newTransaction.description ||
      !newTransaction.amount ||
      !newTransaction.category
    ) {
      alert("Please fill out all fields");
      return;
    }

    fetch("https://transact-one.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransact([...transact, data]);
      })
      .catch((err) => console.log(err));
    setNewTransaction({
      category: "",
      amount: "",
      date: "",
      description: "",
      id: "",
    });
    navigate(`/transactions`);
    alert("Transaction added successfully");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ID"
          value={newTransaction.id}
          name="id"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter category"
          value={newTransaction.category}
          name="category"
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Enter date"
          value={newTransaction.date}
          name="date"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={newTransaction.amount}
          name="amount"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTransaction.description}
          name="description"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
