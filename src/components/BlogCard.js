import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { cardTitle, card } from "./styling/blogCard.module.css";
import "../components/styling/global.css";

const BlogCard = ({ title, date, summary }) => {
  return (
    <Card
      sx={{
        backgroundColor: "var(--blogCardBackground)",
        height: "auto",
      }}
      className={card}
    >
      <CardContent>
        <Typography
          variant="button"
          color="var(--textLight)"
          fontStyle="oblique"
        >
          {date}
        </Typography>
        <Typography
          variant="h5"
          align="left"
          className={cardTitle}
          color="var(--textNormal)"
        >
          {title}
        </Typography>
        <br />
        <Typography
          variant="overline"
          color="text.secondary"
          color="var(--textLight)"
        >
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
