import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  flipCard: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    height: "100%",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    textAlign: "center !important",
    transformStyle: "preserve-3d",
    perspective: 1000,
    "&:hover #back": {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backfaceVisibility: "hidden",
      borderRadius: 6,
      color: "#fff",
      fontSize: "1.5rem",
      backgroundColor: "#666",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "100%",
      transition:
        "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
      transform: "rotateY(0deg)",
      transformStyle: "preserve-3d",
    },
    "&:hover #front": {
      boxSizing: "border-box",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backfaceVisibility: "hidden",
      width: "100%",
      height: 280,
      borderRadius: 6,
      color: "#fff",
      fontSize: "1.5rem",
      transition:
        "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
      transform: "rotateY(-180deg)",
      transformStyle: "preserve-3d",
    },
  },
  front: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition:
      "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
    backfaceVisibility: "hidden",
    width: "100%",
    minHeight: 280,
    borderRadius: 6,
    color: "#fff",
    fontSize: "1.5rem",
    transform: "rotateY(0deg)",
    transformStyle: "preserve-3d",

    "&:after": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      width: "100%",
      height: "100%",
      content: '"',
      display: "block",
      opacity: 0.6,
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      borderRadius: 6,
    },
  },
  back: {
    textAlign: "center !important",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition:
      "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
    backfaceVisibility: "hidden",
    borderRadius: 6,
    color: "#fff",
    fontSize: "1.5rem",
    backgroundColor: "#666",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    transform: "rotateY(180deg)",
    transformStyle: "preserve-3d",
    "&:after": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      width: "100%",
      height: "100%",
      content: '"',
      display: "block",
      opacity: 0.6,
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      borderRadius: 6,
    },
  },
  inner: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: "'Lato', sans-serif",
    textAlign: "center !important",
    color: "#fff",
    fontSize: "1.5rem",
    transform: "translateY(-50%) translateZ(60px) scale(0.94)",
    top: "50%",
    position: "absolute",
    left: 0,
    width: "100%",
    padding: "2rem",
    boxSizing: "border-box",
    outline: "1px solid transparent",
    perspective: "inherit",
    zIndex: 2,
  },
});
const FlipCard = ({ front, back }) => {
  const classes = useStyles();

  const [cardHeight, setHeight] = useState(0);
  const cardSize = useRef(null);

  useEffect(() => {
    setHeight(cardSize.current.clientHeight);
  }, [cardSize.current]);

  return (
    <div style={{ position: "relative", marginBottom: 40, height: cardHeight }}>
      <div className={classes.flipCard}>
        <div className={classes.front} id="front" ref={cardSize}>
          {front}
        </div>
        <div className={classes.back} id="back" style={{ height: cardHeight }}>
          <div className={classes.inner}>{back}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
