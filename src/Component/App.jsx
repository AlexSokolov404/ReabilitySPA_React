import React from "react";
import headerInfo from "./HeaderFooterComp/HeaderInfo";
import Footer from "./HeaderFooterComp/Footer";
import Header from "./HeaderFooterComp/Header";
import ContentPageOne from "./ContentElem/ContentPageOne";
import ContentPageTwo from "./ContentElem/ContentPageTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import state from "../Redux/State";

export default function App() {
  return (
    <div className="position-relative">
      <div
        className="btn-group br_bt d-flex fixed-top bg-white"
        role="group"
        aria-label="Basic outlined example"
        style={{ borderBottom: "2px solid #6f47d7" }}
      >
        <Header name={headerInfo} />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<ContentPageOne />} />
          <Route
            path="/NewModel"
            element={<ContentPageTwo state={state.infoImg} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
