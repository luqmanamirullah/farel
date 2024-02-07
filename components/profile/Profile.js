import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import FlipCard from "../card/flipCard/FlipCard";
import ClearFix from "../container/ClearFix";
import ContentWrap from "../wrapper/ContentWrap";
import FancyTitle from "../wrapper/FancyTitle";
import HeadingBlock from "../wrapper/HeadingBlock";
import content from "../../contents/profile.json";

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
    margin: "30px 0",
    padding: "30px 0",
    overflow: "hidden",
  },
  imageWrapper: {
    boxSizing: "border-box",
    marginTop: "10px !important",
    marginBottom: "0 !important",
    display: "block",
    position: "relative",
  },
  image: {
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    verticalAlign: "middle",
    borderStyle: "none",
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 30,
    paddingTop: 0,
    fontSize: 20,
    lineHeight: "27.28px",
    textAlign: "left",
    fontWeight: 300,
    fontFamily: "nunito",
    color: "#377998",
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
      {/*<Visi />}
      {/* <TeamProfile /> */}
    </section>
  );
};

const SvaraProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ClearFix>
        <Row style={{ marginRight: "0%" }}>
          <Col lg={6} sm={6} xs={12}>
            <div className={classes.imageWrapper}>
              <img src="all-team.jpg" alt="Image" style={{ padding: "0px 25px" }} />
            </div>
          </Col>
          <Col lg={6} sm={6} xs={12}>
            <div className={classes.imageWrapper}>
              <HeadingBlock style={{ marginBottom: 15 }} withBorder>
              <img
                  src={content.image}
                  style={{
                  display: "flex",
                  width: "425px",
                  height: "85px",
                  }}
              />
              <span
                  id="subtitle"
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#377998",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "30px",
                    marginTop: 15
                  }}
              >
                  {content.headline}
              </span>
              <i>
              <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 350 25" 
              fill="none" 
              style={{
              width: "350px",
              height: "35px",
              flexShrink: 0,
              display: "flex",
              marginTop: 5
              }}
              >
              <path d="M4 14.8486C19.8178 3.89151 28.2222 5.79049 42.8802 14.8486C58.8069 25.9694 68.318 28.0891 
              87.7151 14.8486C111.644 -2.24796 123.793 3.27674 140.606 14.8486C157.419 26.4205 175.616 30.215 197 
              14.8486" stroke="#377998" stroke-width="7" stroke-linecap="round" 
              />
              </svg>
              </i>
              </HeadingBlock>
              <p className={classes.paragraph}>{content.subheadline}</p>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "25px" }}>
          <Col lg={6} sm={6} xs={12} style={{padding: "0px 45px"}}>
            <div className={classes.Wrapper}
            style={{ 
              marginTop: "auto",
              marginBottom: "auto",
              backgroundColor: "#fff", 
              border: "2px solid #f0f0f0", 
              borderRadius: "15px",
            }}>
              <div
              style={{
                width: "100%",
                height: "100%"
              }}>
                <p style={{
                marginBottom: "5px !important",
                fontFamily: "Poppins",
                color: "#377998",
                fontWeight: "bolder",
                fontSize: "25px",
                lineHeight: "30px",
              }}>Alamat</p>
                <p style={{
                marginBottom: "5px !important",
                fontFamily: "Poppins",
                color: "#377998",
                fontSize: "20px",
                lineHeight: "30px",
              }}>Jl. Bungur No 09 Kel. Cipedes Kec. Sukajadi, Bandung
               40162(022) 82045711</p>
                <h3 style={{
                marginBottom: "5px !important",
                fontFamily: "Poppins",
                color: "#377998",
                fontWeight: "bolder",
                fontSize: "25px",
                lineHeight: "30px",
              }}>Gmail</h3>
                <p style={{
                marginBottom: "5px !important",
                fontFamily: "Poppins",
                color: "#377998",
                fontSize: "20px",
                lineHeight: "30px",
              }}>info@svarainnovation.co.id</p>
                <h3 style={{
                marginBottom: "5px !important",
                fontFamily: "Poppins",
                color: "#377998",
                fontWeight: "bolder",
                fontSize: "25px",
                lineHeight: "30px",
              }}>Number</h3>
                <p style={{
                marginBottom: "5px !important",
                fontFamily: "Poppins",
                color: "#377998",
                fontSize: "20px",
                lineHeight: "30px",
              }}>+62 811 2346 207</p>
              </div>
              <div style={{marginBottom: "15px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.070988040667!2d107.59251760056485!3d-6.882099603553707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d9ea7dc573%3A0xc2d70083714d38b9!2sPT%20Svara%20Inovasi%20Indonesia!5e0!3m2!1sen!2sid!4v1704190135836!5m2!1sen!2sid" 
                width="90%" height="50%" allowfullscreen="" style={{
                  border: "2px solid #f0f0f0", 
                  borderRadius: "15px",
                  boxShadow: "inset 0px 2px 5px rgba(0, 0, 0, 0.5)", }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={6} xs={12}>
          <div className={classes.wrapper} 
          style={{ 
              width: "100%",
              height: "73%",
              paddingTop: "0px !important",
              paddingBottom: "0px !important",
              marginTop: "60px",
              backgroundColor: "#fff",  
              borderRadius: "50px",
              boxShadow: "3px 5px 10px rgba(0, 0, 0, 0.5)", 
            }}>
          <img src={content.logo} alt="" style={{ height: 125, padding: 15 }}></img>
          <h3 
            style={{
              color: "#377998",
              textAlign: "center",
              marginTop: 20,
              fontFamily: "arial",
              fontSize: "28px",
            }}
          >
            <i>"{content.visi}"</i>
          </h3>
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
    <div className={classes.wrapper} style={{ backgroundColor: "#7c88a5" }}>
      <img src={content.logo} alt="" style={{ height: 80, padding: 15 }}></img>
      <h3
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: 20,
          fontFamily: "Poppins",
        }}
      >
        <i>"{content.visi}"</i>
      </h3>
    </div>
  );
};

const TeamProfile = () => {
  return (
    <ContentWrap style={{ paddingBottom: 0 }}>
      <ClearFix style={{ overflow: "visible" }}>
        <FancyTitle
          title="Our Teams"
          style={{ paddingLeft: 15, color: "#6d7893" }}
        />

        <Row style={{ marginBottom: 40 }}>
          {content.team.map((member) => (
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
