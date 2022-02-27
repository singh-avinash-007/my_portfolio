import { Stack, Paper, CardHeader, Chip } from "@mui/material";
import { height } from "@mui/system";
import "./MyCard.css";
import Avatar from "@mui/material/Avatar";

export default function MyCard({ project, index, len }) {
  const { title, date, descriptionList, technologies, link } = project;
  return (
    <div className="container">
      <a href={link} style={{ textDecoration: "none" }}>
        <Paper
          elevation={2}
          style={{
            backgroundColor: "#f9f9f9",
            margin: "10px",
            padding: "5px",
            borderRadius: "10px",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Avatar sx={{ backgroundColor: "#505050" }}>
            {" "}
            {`${index + 1}/${len}`}
          </Avatar>

          {/* <div style={{ height: "10px", backgroundColor: "#505050" }}></div> */}
          <CardHeader title={title} subheader={date} />
          <ul style={{ color: "#505050" }}>
            {descriptionList.map((item) => {
              return (
                <li key={item} style={{ fontSize: "15px" }}>
                  {item}
                </li>
              );
            })}
          </ul>
          <Stack direction="row" spacing={0.5}>
            {technologies.map((lang) => {
              return (
                <Chip key={lang} label={lang} color="primary" size="small" />
              );
            })}
          </Stack>
          {/* <div style={{ height: "5px" }}></div> */}
        </Paper>
      </a>
    </div>
  );
}
