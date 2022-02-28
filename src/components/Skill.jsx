import {
  Stack,
  Paper,
  CardMedia,
  Chip,
  Card,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import "./Competition.css";

const skills = [
  {
    img: "cpp",
    alt: "C++",
  },
  {
    img: "js",
    alt: "Javascript",
  },
  {
    img: "react",
    alt: "React Js",
  },

  {
    img: "html",
    alt: "HTML",
  },
  {
    img: "python",
    alt: "Python",
  },
  {
    img: "css",
    alt: "CSS",
  },
];
export default function Skill() {
  return (
    <>
      <Card>
        <div
          style={{
            // width: "100%",
            // backgroundColor: "red",
            display: "flex",
            minHeight: "100px",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px",
            flexWrap: "wrap",
          }}
        >
          {skills.map((item) => {
            console.log(item.img);
            return (
              <div key={item.img}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                  }}
                  alt={item.alt}
                  src={require("../images/" + item.img + ".png")}
                />
              </div>
            );
          })}

          <div>
            <Chip label="OOPS" />
          </div>
          <div>
            <Chip label="Data Structures" />
          </div>
          <div>
            <Chip label="Algorithms" />
          </div>
        </div>
      </Card>
    </>
  );
}
