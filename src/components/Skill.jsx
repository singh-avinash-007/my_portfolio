import {
  Stack,
  Paper,
  CardContent,
  Chip,
  Card,
  Typography,
  Avatar,
} from "@mui/material";
import "./Competition.css";
export default function Skill() {
  return (
    <>
      <Card>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Chip label="C++" color="secondary" />
            <Chip label="Javascript" color="secondary" />
            <Chip label="React Js" color="secondary" />
            <Chip label="OOPS" color="secondary" />
            <Chip label="Data Structures" color="secondary" />
            <Chip label="Algorithms" color="secondary" />
            <Chip label="Python" color="secondary" />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
