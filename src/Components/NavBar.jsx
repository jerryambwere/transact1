import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/filter"
            className={location.pathname === "/filter" ? styles.active : ""}
          >
            Filter
          </Link>
        </li>
        <li>
          <Link
            to="/transactions"
            className={location.pathname === "/transactions" ? styles.active : ""}
          >
            Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/post"
            className={location.pathname === "/post" ? styles.active : ""}
          >
            Add Transaction
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
