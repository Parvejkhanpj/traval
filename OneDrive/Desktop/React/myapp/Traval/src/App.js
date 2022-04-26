import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaGlobeAfrica } from "react-icons/fa";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Data from "./Data";
import "./style.css";

export default function App() {
  const dataelement = Data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div>
      <Navbar />
      <section>{dataelement}</section>
    </div>
  );
}
