import projects from "./data/project";
import { useEffect } from "react";
import MyCard from "./MyCard";
import { Paper } from "@mui/material";

import "./Projects.css";
const LEN = projects.length;
export default function Projects({ ind }) {
  var project = projects[ind];
  return (
    <div className="Container">
      {/* {projects.map((item) => {
        return <MyCard key={item.title} project={item} />;
      })} */}

      <MyCard project={project} index={ind} len={LEN} />
    </div>
  );
}
