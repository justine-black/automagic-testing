import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import githubLogo from "./assets/images/github-logo.png";
import linkedinLogo from "./assets/images/linkedin-logo.png";
import reactLogo from "./assets/images/react-logo.png";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#04314c" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            flexGrow={1}
            variant="h4"
            href="#"
            component={"a"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUTOMAGIC TEST APP
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              startIcon={<Avatar src={reactLogo} />}
              href="https://react.dev/learn"
            >
              LEARN REACT
            </Button>
            <Button
              startIcon={<Avatar src={linkedinLogo} />}
              href="https://www.linkedin.com/in/justine-bea%C3%B1o/"
            >
              MY LINKEDIN PROFILE
            </Button>
            <Button
              startIcon={<Avatar src={githubLogo} />}
              href="https://github.com/justine-black/automagic-testing"
            >
              MY GITHUB PORTFOLIO
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
