import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  Tooltip,
} from "@mui/material";
import githubLogo from "./assets/images/github-logo.png";
import linkedinLogo from "./assets/images/linkedin-black-logo.png";
import reactLogo from "./assets/images/react-black-logo.png";

const links = [
  { label: "Learn React", logo: reactLogo, url: "https://react.dev/learn" },
  {
    label: "My Github Portfolio",
    logo: githubLogo,
    url: "https://github.com/justine-black/automagic-testing",
  },
  {
    label: "My LinkedIn Profile",
    logo: linkedinLogo,
    url: "https://www.linkedin.com/in/justine-bea%C3%B1o/",
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

const NewHeader = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#F4F4F4" }}>
      <Container maxWidth="none">
        <Toolbar color="black">
          <Typography
            flexGrow={1}
            variant="h4"
            color={"black"}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            Automagic Test App
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Button
                href={link.url}
                sx={{
                  width: "58px",
                  height: "58px",
                  minWidth: "0",
                  padding: "8px",
                  marginX: "6px",
                  borderRadius: "50%",
                  background: "white",
                }}
              >
                <Tooltip title={link.label}>
                  <Avatar src={link.logo} />
                </Tooltip>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
export { NewHeader };
