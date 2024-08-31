import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ transact, setTransact }) => {
  const [search, setSearch] = useState("");

  const filterTransact = transact.filter((transaction) =>
    transaction.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          value={search}
          onChange={handleFilter}
          type="text"
          placeholder="Search by category"
        />
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filterTransact.length > 0 ? (
            filterTransact.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.noResults} colSpan="4">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
