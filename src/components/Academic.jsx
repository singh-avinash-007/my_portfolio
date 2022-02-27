import {
  Stack,
  Paper,
  CardContent,
  Chip,
  Card,
  Typography,
} from "@mui/material";
import "./Competition.css";
export default function Academic() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <ul>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Currently Ranked-2 among 32 students in Applied Geology,
              Department of Geology and Geophysics after the end of sixth
              semester
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Pursuing Minor in the Department of Mathematics and Computing with
              a net CGPA of 8.83 after the end of the seventh semester
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Secured All India Rank of 7874 out of 2.2 lakh shortlisted
              candidates appearing for Joint Entrance Examination Advanced, 2018
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Recipient of the Inspire scholarship awarded for excellence in
              Basic Sciences by Department of Science and Technology, India
            </Typography>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
