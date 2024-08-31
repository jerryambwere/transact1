import React from "react";
import styles from "./transaction.module.css";

const Transactions = ({ transact, setTransact }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transact.map((transaction) => (
            <tr key={transaction.id}>
              <td className={styles.date} data-label="Date">{transaction.date}</td>
              <td className={styles.category} data-label="Category">{transaction.category}</td>
              <td className={styles.amount} data-label="Amount">${transaction.amount}</td>
              <td className={styles.description} data-label="Description">{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
