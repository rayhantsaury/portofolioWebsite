import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import eduImgWhite from "../../assets/svg/tugas/eduImgWhite.svg";
import eduImgBlack from "../../assets/svg/tugas/eduImgBlack.svg";
import "./Tugas.css";

function TugasCard({ id, institution, course, startYear, assestment }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    TugasCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`tugas-card ${classes.TugasCard}`}>
        <div className="tugascard-img" style={{ backgroundColor: theme.primary }}>
          <img src={theme.type === "light" ? eduImgBlack : eduImgWhite} alt="" />
        </div>
        <div className="tugas-details">
          <h6 style={{ color: theme.primary }}>{startYear}</h6>
          <h4 style={{ color: theme.tertiary }}>
            <a href={assestment} target="_blank" rel="noopener noreferrer">
              {course}
            </a>
          </h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default TugasCard;
