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

const links = [
  { label: "Learn React", logo: reactLogo, url: "https://react.dev/learn" },
  {
    label: "My LinkedIn Profile",
    logo: linkedinLogo,
    url: "https://www.linkedin.com/in/justine-bea%C3%B1o/",
  },
  {
    label: "My Github Portfolio",
    logo: githubLogo,
    url: "https://github.com/justine-black/automagic-testing",
  },
];

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
            Automagic Test App
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Button
                sx={{ textTransform: "none" }}
                startIcon={<Avatar src={link.logo} />}
                href={link.url}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
