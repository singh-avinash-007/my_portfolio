import {
  Stack,
  Paper,
  CardContent,
  Chip,
  Card,
  Typography,
  Avatar,
  CardHeader,
} from "@mui/material";
import "./Competition.css";
export default function Education() {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 45, height: 45 }}
              alt="IIT"
              src={require("../images/iitLogo.png")}
            />
          }
          title="Indian Institute of Technology Kharagpur"
          subheader="2018 - 2023"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Major in Applied Geology
          </Typography>
          <Typography variant="body2" color="text.primary">
            CGPA : 8.59
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Minor in Mathematics and Computing
          </Typography>
          <Typography variant="body2" color="text.primary">
            CGPA : 8.83
          </Typography>
        </CardContent>
      </Card>
      <div className="break"></div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 45, height: 45 }}
              alt="IIT"
              src={require("../images/jnv.jpeg")}
            />
          }
          title="Jawahar Navodaya Vidyalaya Durgapur"
          subheader="2012-2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Mathematics and Physics
          </Typography>
          <Typography variant="body2" color="text.primary">
            CGPA : 10
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
