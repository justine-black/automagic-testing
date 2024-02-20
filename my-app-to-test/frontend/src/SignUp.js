import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp(props) {
  const { handleChange } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      aboutMe: data.get("aboutMe"),
    });
  };

  const handleSigninClick = () => {
    handleChange(null, 0);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  inputProps={{
                    "data-testid": "signup-firstname",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputProps={{
                    "data-testid": "signup-lastname",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputProps={{
                    "data-testid": "signup-email",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputProps={{
                    "data-testid": "signup-password",
                  }}
                />
              </Grid>
              <Grid item xs={12} xl={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={3}
                  name="aboutMe"
                  label="Tell me about yourself"
                  type="text"
                  id="text"
                  inputProps={{
                    "data-testid": "signup-about",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              data-testid="signup-submit"
            >
              Sign In
            </Button>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleSigninClick}>
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Typography variant="caption" fontStyle={"italic"}>
              This is an example of a sign up form for test automation practice.
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
