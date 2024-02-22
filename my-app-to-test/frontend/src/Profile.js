import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import avatar from "./assets/images/avatar.png";
import { Link } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Profile(props) {
  const { handleChange } = props;

  const handleSigninClick = () => {
    handleChange(null, 0);
  };

  const profile = {
    firstName: "Justine",
    lastName: "Beaño",
    aboutMe:
      "I'm an ISTQB-certified QA Engineer with 5 years of experience successfully collaborated with clients from various countries while based in the Philippines, working on different apps across multiple platforms. Throughout my career, I have demonstrated a deep understanding of QA methodologies, testing processes, and automation tools. My hands-on experience in testing web applications, mobile apps, and software products has equipped me with the ability to identify defects, track issues, and collaborate effectively with cross-functional teams to deliver bug-free software solutions.",
  };

  // profile = null;
  return (
    <ThemeProvider theme={defaultTheme}>
      {profile ? (
        <Container component="main" maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Justine"
              src={avatar}
              sx={{ width: 100, height: 100 }}
            />
            <Typography component="h1" variant="h4" data-testid="profile-name">
              Hi, I'm {profile.firstName} {profile.lastName}!
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "justify",
              }}
              data-testid="profile-about"
            >
              {profile.aboutMe}
            </Typography>
            <Typography variant="caption" fontStyle={"italic"}>
              This is an example of a webpage with data for web scraping
              practice.
            </Typography>
          </Box>
        </Container>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="Justine" src={avatar} sx={{ width: 100, height: 100 }} />
          <Typography component="h1" variant="h4">
            Profile not found
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "justify",
            }}
          >
            <Link href="#" variant="inherit" onClick={handleSigninClick}>
              {"Sign in to access your profile data"}
            </Link>
          </Typography>
        </Box>
      )}
    </ThemeProvider>
  );
}
