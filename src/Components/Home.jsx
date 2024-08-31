import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

// Component
const Home = () => {
  const navigate = useNavigate();
  function navigator() {
    navigate("/transactions");
    // alert("Welcome to Finance Tracker")
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Finance Tracker</h1>
      <h2 className={styles.subtitle}>
        Your one-stop solution for tracking expenses{" "}
      </h2>
      <button onClick={navigator} className={styles.button}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
