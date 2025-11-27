import { Grid, Paper, Typography } from "@mui/material";
import BasicTabs from "./TestFormTabs";

const Body = () => {
  return (
    <Grid
      container
      spacing={2}
      className="app-body"
      paddingTop={10}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Grid item xs={6} background={"none"}>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item>
            <Typography
              variant="h3"
              fontStyle={"italic"}
              whiteSpace={"pre-line"}
            >
              Welcome to my
              {"\n"}
              Practice React App!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" whiteSpace={"pre-line"}>
              This is a simple app powered by React.js with Material-UI, that
              may be used to practice and demonstrate the fundamentals of test
              automation and web development.
              {"\n"}
              Test your knowledge and skills with various automation tools and
              frameworks that you may use for your applications, including
              Selenium, Cypress, Robot Framework, and many more!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" fontStyle={"italic"}>
              Select a tab below to practice automation with different example
              forms and pages
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <BasicTabs />
      </Grid>
    </Grid>
  );
};

export default Body;
