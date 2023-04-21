import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./Home.module.css";

import headshot from "../icons/headshot.png";
import headshotMd from "../icons/headshot.png";
import headshotSm from "../icons/headshot_0.5x.png";

import diy from "../icons/DIY_1x.png";
import diyMd from "../icons/DIY_1x.png";
import diySm from "../icons/DIY_0.5x.png";

import team from "../icons/team.png";

import meditation from "../icons/Meditation.png";

import Card from "../components/Card";

import Carousel from "react-bootstrap/Carousel";

import NavBar from "../components/NavBar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.getElementsByClassName("carousel-inner")[0].style.height = "100%";
    document.getElementsByClassName(
      "carousel-control-next-icon"
    )[0].style.backgroundImage =
      "url('https://img.icons8.com/ios-glyphs/90/ffffff/right--v1.png')";
    document.getElementsByClassName(
      "carousel-control-next-icon"
    )[0].style.width = "4rem";
    document.getElementsByClassName(
      "carousel-control-next-icon"
    )[0].style.height = "4rem";
    document.getElementsByClassName(
      "carousel-control-prev-icon"
    )[0].style.backgroundImage =
      "url('https://img.icons8.com/ios-glyphs/30/ffffff/left.png')";
    document.getElementsByClassName(
      "carousel-control-prev-icon"
    )[0].style.width = "4rem";
    document.getElementsByClassName(
      "carousel-control-prev-icon"
    )[0].style.height = "4rem";
  }, []);

  return (
    <section className={`${classes.sectionContainer}`}>
      <NavBar />
      <Carousel className={`${classes.carouselContainer}`} indicators={false}>
        <Carousel.Item className={`${classes.carouselContainer}`}>
          <Card
            title={"Hi! I am Pierre."}
            titleSupport={"I'm a self-learner."}
            subtitle={"And so much more...."}
            img={headshot}
            sizeDefault={"40vw"}
            imgMd={headshotMd}
            sizeMd={"50vw"}
            imgSm={headshotSm}
            sizeSm={"80vw"}
            footer={"Let me tell you who I am."}
          />
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <Card
            title={"I am a doer."}
            titleSupport={"And a risk taker."}
            subtitle={
              "I switched to CS in my junior year. I got my first SWE internship before I completed the introductory CS course."
            }
            img={diy}
            imgMd={diyMd}
            imgSm={diySm}
            sizeSm={"70vw"}
            sizeMd={"50vw"}
            sizeDefault={"40vw"}
            footer={"Not bragging though :)"}
          />
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <Card
            title={"I'm a builder."}
            titleSupport={"And I build in teams."}
            subtitle={
              "I have loved working in teams that act with a sense of purpose and urgency."
            }
            img={team}
            imgMd={team}
            imgSm={team}
            sizeSm={"70vw"}
            sizeMd={"50vw"}
            sizeDefault={"40vw"}
            footer={"And finally"}
          />
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <Card
            title={"I'm a meditator."}
            titleSupport={"Patience and intentions matter a lot."}
            subtitle={
              "I ask myself, 'How can I do something good for our world?'"
            }
            img={meditation}
            imgMd={meditation}
            imgSm={meditation}
            sizeSm={"70vw"}
            sizeMd={"50vw"}
            sizeDefault={"40vw"}
            footer={"Thank you!"}
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Home;
