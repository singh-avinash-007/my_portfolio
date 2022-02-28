import { Stack, Paper, CardHeader, Chip, CardContent } from "@mui/material";
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
            minHeight: "320px",
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
          <CardContent>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {technologies.map((lang) => {
                return (
                  <div style={{ marginRight: "1px", marginBottom: "1px" }}>
                    <Chip key={lang} label={lang} size="small" />
                  </div>
                );
              })}
            </div>
          </CardContent>
          <ul style={{ color: "#505050" }}>
            {descriptionList.map((item) => {
              return (
                <li key={item} style={{ fontSize: "15px" }}>
                  {item}
                </li>
              );
            })}
          </ul>
          {/* <div style={{ height: "5px" }}></div> */}
        </Paper>
      </a>
    </div>
  );
}
