import {
  Stack,
  Paper,
  CardContent,
  Chip,
  Card,
  Typography,
} from "@mui/material";
import "./Competition.css";
export default function Competition() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <ul>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Ranked Top-50 in Code Drive Div-2
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                <strong>Organisarion: </strong>Codechef
              </Typography>
            </Typography>
            {/*  Secured Global-Rank 1320, out of more than 11000 participants in Google Kickstart Round-D */}
          </li>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Secured Global-Rank 1320, out of more than 11000 participants in
              Google Kickstart Round-D
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                <strong>Organisarion: </strong> Google
              </Typography>
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Combinely solved more than 800 problems on various coding
              platforms
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                <strong>Platforms: </strong> Codeforces, Codechef, Leetcode
              </Typography>
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
              Rated 5-Star on Codechef(2075) and Expert on Codeforces(1639)
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                <strong>Platforms: </strong> Codeforces, Codechef
              </Typography>
            </Typography>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
