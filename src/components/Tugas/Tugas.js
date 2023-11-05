import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Tugas.css";
import TugasCard from "./TugasCard";

import { tugasData } from "../../data/tugasData";
import { Link } from "react-router-dom";

function Tugas() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="tugas" id="tugas" style={{ backgroundColor: theme.secondary }}>
      <div className="tugas-body">
        <div className="tugas-description">
          <h1 style={{ color: theme.primary }}>Tugas</h1>
          {tugasData.map((tugas) => (
            <TugasCard key={tugas.id} id={tugas.id} institution={tugas.institution} course={tugas.course} assestment={tugas.assestmen} />
          ))}
        </div>
        <div className="tugas-image">
          <img src={theme.eduimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tugas;
