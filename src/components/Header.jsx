import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

import Box from "@mui/material/Box";
import { Typography, Divider, Chip, Stack, CardHeader } from "@mui/material";
import { withStyles } from "@mui/styles";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontWeight: "bold",
    // backgroundColor: "red",
    // fontFamily: "sans",
  },
})(Typography);
const WhiteTextTypographyNotBold = withStyles({
  root: {
    color: "#FFFFFF",
    // fontFamily: "sans",
  },
})(Typography);
const WhiteChip = withStyles({
  root: {
    color: "#FFFFFF",
    backgroundColor: "#404040",
    borderRadius: "3px",
    minWidth: "150px",
    justifyContent: "space-between",
  },
})(Chip);

export default function Header() {
  return (
    <div className="background makeFlex">
      <div className="makeFlex makeCentre">
        <div className="break"></div>
        <div className="break"></div>
        <div>
          <Avatar
            alt="Avinash Kumar Singh"
            src={require("../images/myPic.jpeg")}
            sx={{ width: 130, height: 130 }}
          />
        </div>

        <WhiteTextTypography variant="h5">
          Avinash Kumar Singh
        </WhiteTextTypography>
        <div>
          <WhiteTextTypographyNotBold variant="h7">
            IIT Kharagpur
          </WhiteTextTypographyNotBold>
        </div>
        <div className="break"></div>
        <div className="break"></div>
        <div className="break"></div>
        <div className="describe">
          <div>
            <button
              className="removePre"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.linkedin.com/in/avinash-kumar-singh-5939b2192/";
              }}
            >
              <WhiteChip
                avatar={
                  <Avatar
                    alt="LinkedIn"
                    src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                    sx={{ width: 40, height: 40 }}
                    className="linkSpacing"
                  />
                }
                label="Linkedin"
                className="removePre"
              />
            </button>
          </div>
          <div>
            <button
              className="removePre"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://codeforces.com/profile/avinash007";
              }}
            >
              <WhiteChip
                avatar={
                  <Avatar
                    alt="Codeforces"
                    src={require("../images/codeforces.png")}
                    sx={{ width: 40, height: 40 }}
                    className="linkSpacing"
                    // variant="rounded"
                  />
                }
                label="Codeforces: 1639"
                className="removePre"
              />
            </button>
          </div>
          <div>
            <button
              className="removePre"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.codechef.com/users/vishma_pitamah";
              }}
            >
              <WhiteChip
                avatar={
                  <Avatar
                    alt="Codechef"
                    src={require("../images/codechef.jpeg")}
                    sx={{ width: 40, height: 40 }}
                    className="linkSpacing"
                    // variant="rounded"
                  />
                }
                label={`Codechef: 5★`}
                className="removePre"
              />
            </button>
          </div>
          <div>
            <WhiteChip
              avatar={<MailIcon style={{ color: "white" }} />}
              label="avinash007kumarsingh@gmail.com"
              className="removePre"
            />
          </div>
        </div>
        <div>
          <button
            className="removePre"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://tinyurl.com/avinashResumeLink";
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="About Me"
                  src={require("../images/cv.png")}
                  variant="square"
                />
              }
            />
          </button>
        </div>
        <div className="break"></div>
        <div className="break"></div>
      </div>
    </div>
  );
}
