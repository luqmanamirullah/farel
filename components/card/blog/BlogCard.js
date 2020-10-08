import Link from "next/link";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  imageWrapper: {
    marginBottom: 30,
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
  },
  imageA: {
    backgroundColor: "transparent",
    textDecoration: "none !important",
    color: "#1abc9c",
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
  },
  image: {
    boxSizing: "border-box",
    verticalAlign: "middle",
    maxWidth: "100%",
    border: "none",
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
    borderRadius: 0,
    opacity: 1,
    minHeight: 143.625,
    objectFit: "cover",
  },
  attribute: {
    boxSizing: "border-box",
    padding: 0,
    margin: "10px -10px -15px 0",
    listStyle: "none",

    "& li": {
      listStyle: "none",
      padding: 0,
      float: "left",
      fontSize: 13,
      lineHeight: "14px",
      margin: "0 10px 15px 0",
      color: "#999",
      fontFamily: "'Crete Round', serif",
      fontStyle: "italic",
    },
    "& li:before": {
      content: "'/'",
      display: "inline-block",
      marginRight: 10,
      opacity: 0.5,
    },
    "& li:first-child:before": { display: "none" },

    "& li i": {
      position: "relative",
      top: 1,
      fontSize: 14,
      marginRight: 3,
    },
  },
  title: {
    "& h2": {
      textAlign: "left",
      boxSizing: "border-box",
      color: "#444",
      lineHeight: 1.5,
      fontFamily: "'Raleway', sans-serif",
      margin: 0,
      textTransform: "uppercase",
      letterSpacing: 1,
      fontSize: 17,
      fontWeight: 600,
    },
    "& h2:hover": {
      color: "#1abc9c",
    },
  },

  description: {
    boxSizing: "border-box",
    position: "relative",
    marginTop: 30,
  },
  moreLink: {
    fontWeight: 400,
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    boxSizing: "border-box",
    backgroundColor: "transparent",
    textDecoration: "none !important",
    color: "#1abc9c",
    display: "inline-block",
    borderBottom: "1px solid #1abc9c",
    padding: "0 2px",
    fontFamily: "'Crete Round', serif",
    fontStyle: "italic !important",
    "&:hover": {
      borderBottomColor: "#555",
    },
  },
});
const BlogCard = ({
  imageSrc,
  imageUrl,
  alt,
  href,
  title,
  date,
  description,
}) => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.imageWrapper}>
        <a href={imageUrl} className={classes.imageA}>
          <img src={imageSrc} className={classes.image} alt={alt} />
        </a>
      </div>
      <div className={classes.title}>
        <a href={href} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
      </div>

      <ul className={classes.attribute}>
        <li>
          <i className="icon-calendar3" />
          {date}
        </li>
        <li>
          <i className="icon-camera-retro" />
        </li>
      </ul>

      <div className={classes.description}>
        <p style={{ lineHeight: 1.8 }}>{description}</p>
        <a
          href={href}
          className={classes.moreLink}
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
