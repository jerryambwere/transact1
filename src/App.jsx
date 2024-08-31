// import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
import Transactions from "./Components/Transactions";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Components/Post";
function App() {
  const [transact, setTransact] = useState([]);

  useEffect(() => {
    fetch("https://transact-one.vercel.app/transactions")
      .then((res) => res.json())
      .then((transact) => setTransact(transact));
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/filter"
            element={<Filter transact={transact} setTransact={setTransact} />}
          />
          <Route
            path="/transactions"
            element={
              <Transactions transact={transact} setTransact={setTransact} />
            }
          />
          <Route
            path="/Post"
            element={<Post transact={transact} setTransact={setTransact} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
