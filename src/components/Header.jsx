import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import Box from "@mui/material/Box";
import { Typography, Divider, Chip, Stack } from "@mui/material";
import { withStyles } from "@mui/styles";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
  },
})(Chip);

export default function Header() {
  return (
    <div className="background makeFlex">
      <div className="makeFlex leftEnd">
        {/* <div className="break"></div> */}
        <Avatar
          alt="IIT Kharagpur"
          src={require("../images/iitLogo.png")}
          sx={{ width: 45, height: 45 }}
          className="marginLeft marginTop"
          variant="rounded"
        />
      </div>
      <div className="makeFlex makeCentre">
        <div>
          <Avatar
            alt="Avinash Kumar Singh"
            src={require("../images/myPic.jpeg")}
            sx={{ width: 130, height: 130 }}
          />
        </div>

        <WhiteTextTypography variant="h4">
          Avinash Kumar Singh
        </WhiteTextTypography>
        <div>
          <WhiteTextTypographyNotBold variant="h7">
            IIT Kharagpur
          </WhiteTextTypographyNotBold>
        </div>
        <div className="break"></div>
        <div className="break"></div>
        <Stack direction="row" spacing={1}>
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
              variant="outlined"
              label="Linkedin"
              className="removePre"
            />
          </button>
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
              variant="outlined"
              label="Codeforces: 1639"
              className="removePre"
            />
          </button>
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
              variant="outlined"
              label={`Codechef: 5★`}
              className="removePre"
            />
          </button>
        </Stack>
        <div></div>
      </div>
    </div>
  );
}
