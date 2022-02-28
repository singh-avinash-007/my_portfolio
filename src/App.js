import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Typography, Divider, CardHeader } from "@mui/material";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import projects from "./components/data/project";
import Competition from "./components/Competition";
import Skill from "./components/Skill";
import Academic from "./components/Academic";
import Education from "./components/Education";

const LEN = projects.length;
function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="head">
        <Header />
      </div>
      <div className="makeFlex fullWidth makeCentre">
        <div className=" makeCentre reduceWidth">
          <div className="breakDiv"></div>

          {/* <Divider variant="left" sx={{ borderBottomWidth: 4 }} /> */}

          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="About Me"
                src={require("./images/id-card.png")}
                variant="square"
              />
            }
            titleTypographyProps={{
              variant: "h7",
              color: "#282C35",
              // fontWeight: "bold",
            }}
            title="About Me"
          />
          <Divider variant="left" sx={{ borderBottomWidth: 4 }} />
          <div className="breakDiv"></div>
          <About />
          <div className="breakDiv"></div>

          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="competition"
                src={require("./images/projects.png")}
                variant="square"
              />
            }
            titleTypographyProps={{
              variant: "h7",
              color: "#282C35",
              // fontWeight: "bold",
            }}
            title="Projects "
          />
          <Divider variant="left" sx={{ borderBottomWidth: 4 }} />
          <div className="breakDiv"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // backgroundColor: "red",
            }}
          >
            <Avatar
              sx={{ backgroundColor: "#505050" }}
              variant="rounded"
              onClick={() => {
                setIndex((((index - 1) % LEN) + LEN) % LEN);
              }}
              className="magnify"
            >
              <ArrowLeftIcon fontSize="large" />
            </Avatar>
            <Projects ind={index} />
            <Avatar
              sx={{ backgroundColor: "#505050" }}
              onClick={() => {
                setIndex((index + 1) % LEN);
              }}
              variant="rounded"
              className="magnify"
            >
              <ArrowRightIcon fontSize="large" />
            </Avatar>
          </div>
          <div className="breakDiv"></div>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="IIT"
                src={require("./images/competition.png")}
                variant="square"
              />
            }
            titleTypographyProps={{
              variant: "h7",
              color: "#282C35",
              // fontWeight: "bold",
            }}
            title="Competition"
          />
          <Divider variant="left" sx={{ borderBottomWidth: 4 }} />
          <div className="breakDiv"></div>
          <Competition />
          <div className="breakDiv"></div>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="IIT"
                src={require("./images/skills.png")}
                variant="square"
              />
            }
            titleTypographyProps={{
              variant: "h7",
              color: "#282C35",
              // fontWeight: "bold",
            }}
            title="Skills"
          />
          <Divider variant="left" sx={{ borderBottomWidth: 4 }} />
          <div className="breakDiv"></div>
          <Skill />

          <div className="breakDiv"></div>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="IIT"
                src={require("./images/academic.png")}
                variant="square"
              />
            }
            titleTypographyProps={{
              variant: "h7",
              color: "#282C35",
              // fontWeight: "bold",
            }}
            title="Academic Achievements"
          />
          <Divider variant="left" sx={{ borderBottomWidth: 4 }} />
          <div className="breakDiv"></div>
          <Academic />
          <div className="breakDiv"></div>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="IIT"
                src={require("./images/edu.png")}
                variant="square"
              />
            }
            titleTypographyProps={{
              variant: "h7",
              color: "#282C35",
              // fontWeight: "bold",
            }}
            title="Education"
          />
          <Divider variant="left" sx={{ borderBottomWidth: 4 }} />
          <div className="breakDiv"></div>
          <Education />
          <div className="breakDiv"></div>
        </div>
      </div>
    </>
  );
}

export default App;
