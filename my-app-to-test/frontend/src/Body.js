import { Grid, Paper, Typography } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
import BasicTabs from "./TestFormTabs";

const Body = () => {
  return (
    <div className="app-body">
      <p className="text-body">
        This is a simple app that may be used to practice and demonstrate the
        fundamentals of test automation and of web development
      </p>
      <BasicTabs />
    </div>
  );
};

const NewBody = () => {
  return (
    <Grid container spacing={2} className="new-app-body" paddingTop={2}>
      <Grid item xs={12} background={"none"}>
        <Paper
          sx={{
            textAlign: "left",
            padding: "10px 10px",
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Grid item>
              <Typography
                variant="h2"
                fontFamily={"roboto"}
                fontWeight={"bold"}
              >
                Welcome to my Practice React App!
              </Typography>
              <Typography variant="subtitle1" textAlign={"justify"}>
                This is a simple app powered by React.js with Material-UI, that
                may be used to practice and demonstrate the fundamentals of test
                automation and web development.
                <br />
                Test your knowledge and skills with various automation tools and
                frameworks that you may use for your applications, including
                Selenium, Cypress, Robot Framework, and many more!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            background: "rgba(255,255,255,0.2)",
          }}
        >
          <BasicTabs />
        </Paper>
      </Grid>
    </Grid>
  );
};

export { NewBody };
export default Body;
