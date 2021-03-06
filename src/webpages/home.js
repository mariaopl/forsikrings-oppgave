import React from "react";
import Reisebilde from "../assets/reisebilde.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../index.css";
import pdf from "../assets/Avtaledokument.pdf";
import Reisebilde2 from "../assets/reisebilde2.PNG";

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
            <a
              href={pdf}
              target="_blank"
              download="Avtaledokument"
              className="pdf"
            >
              Avtaledokument (PDF) <span className="arrow">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="image-div">
        <img src={Reisebilde2} className="image"></img>
      </div>
    </div>
  );
};

export default Home;
