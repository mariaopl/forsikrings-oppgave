import React from "react";
import Reisebilde from "../assets/reisebilde.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <span>Reiseforsikring</span>
        </div>
        <div className="name">
          <span>Per Andreas Hansen</span>
        </div>
      </div>
      <div className="content">
        <div className="sub-header">
          <span className="bold-text medium-text">Du betaler 249 kr/mnd</span>
          <Link className="small-text invoice-link" to="/invoice">
            Fakturaoversikt &#8594;
          </Link>
        </div>
        <div className="info">
          <div className="bold-text left-info">
            <span>Periode</span>
            <span>Avtalenummer</span>
            <span>Dokument</span>
          </div>
          <div className="right-info">
            <span>01.01.2021 - 01.01.2022</span>
            <span>123456789</span>
            <a>
              Avtaledokument (PDF) <span>&#8599;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="image-div">
        <img src={Reisebilde} className="image"></img>
      </div>
    </div>
  );
};

export default Home;
