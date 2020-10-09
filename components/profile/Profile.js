import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import FlipCard from "../card/flipCard/FlipCard";
import ClearFix from "../container/ClearFix";
import ContentWrap from "../wrapper/ContentWrap";
import FancyTitle from "../wrapper/FancyTitle";
import HeadingBlock from "../wrapper/HeadingBlock";
import teamMember from "./teamMember";

const useStyles = createUseStyles({
  section: {
    fontWeight: 400,
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    overflow: "hidden",
    marginBottom: 0,
  },
  wrapper: {
    boxSizing: "border-box",
    marginTop: "0",
    marginBottom: "0",
    position: "relative",
    textAlign: "center",
    margin: "60px 0",
    padding: "60px 0",
    overflow: "hidden",
  },
  imageWrapper: {
    boxSizing: "border-box",
    marginTop: "80px !important",
    marginBottom: "0 !important",
    display: "block",
    position: "relative",
    paddingRight: "4%",
  },
  image: {
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 30,
    fontSize: 15,
    lineHeight: 1.8,
    textAlign: "left",
  },
  svaraLogo: {
    textAlign: "center !important",
    boxSizing: "border-box",
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
  },
});

const Profile = () => {
  const classes = useStyles();
  return (
    <section id="section">
      <SvaraProfile />
      <Visi />
      <TeamProfile />
    </section>
  );
};

const SvaraProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ClearFix>
        <Row style={{ marginRight: "-4%" }}>
          <Col lg={6} sm={6} xs={12}>
            <div className={classes.imageWrapper}>
              <img src="all-team.jpg" alt="Image" />
            </div>
          </Col>
          <Col lg={6} sm={6} xs={12}>
            <div className={classes.imageWrapper}>
              <HeadingBlock style={{ marginBottom: 15 }} withBorder>
                <h2 style={{ textAlign: "left" }}>Svara</h2>
                <span id="subtitle" style={{ textAlign: "left" }}>
                  Start-Up yang bergerak di bidang media, broadcasting, &amp;
                  community Platform. Media mencakup informasi, edukasi, dan
                  entertainment. Broadcasting mencakup Radio &amp; TV. Community
                  mencakup radio kampus, government, desa, retail store, dll.
                </span>
              </HeadingBlock>
              <p className={classes.paragraph}>
                SVARA merupakan sebuah Startup yang didirikan sejak September
                2017, namun penelitian kami terkait industri landscape dan
                pengembangan teknologi telah dimulai sejak 2002 oleh founder
                yaitu Bapak Hemat Dwi Nuryanto. SVARA memiliki visi yaitu
                "Become World Leading Media &amp; Broadcasting Platform, &amp;
                Unicorn Startup in 2025".
              </p>
            </div>
          </Col>
        </Row>
      </ClearFix>
    </div>
  );
};

const Visi = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} style={{ backgroundColor: "#f9f9f9" }}>
      <img src="logos.PNG" alt=""></img>
      <h3
        style={{
          color: "#2FB4F5",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <i>
          "Become World Leading Media &amp; Broadcasting Platform, and Unicorn
          Startup in 2025"
        </i>
      </h3>
    </div>
  );
};

const TeamProfile = () => {
  return (
    <ContentWrap style={{ paddingBottom: 0 }}>
      <ClearFix style={{ overflow: "visible" }}>
        <FancyTitle title="Our Teams" style={{ paddingLeft: 15 }} />

        <Row style={{ marginBottom: -40 }}>
          {teamMember.map((member) => (
            <Col xxs={12} xs={12} sm={4} lg={3}>
              <ProfileFlipCard
                src={member.src}
                name={member.name}
                job={member.job}
              />
            </Col>
          ))}
        </Row>
      </ClearFix>
    </ContentWrap>
  );
};

const ProfileFlipCard = ({ src, name, job }) => {
  const front = <img src={src} />;

  const back = (
    <>
      <h3 className="mb-2 text-white">{name}</h3>
      <br />
      <p className="mb-2 text-white">{job}</p>
    </>
  );

  return <FlipCard front={front} back={back} />;
};

export default Profile;
