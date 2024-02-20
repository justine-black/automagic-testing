import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
  const { handleChange } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleSignUpClick = () => {
    handleChange(null, 1);
  };

  const handleForgotPasswordClick = () => {
    handleChange(null, 2);
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputProps={{
                "data-testid": "signin-email",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{
                "data-testid": "signin-password",
              }}
            />
            <FormControlLabel
              control={<Checkbox value="true" color="primary" />}
              label="Remember me"
              name="remember-me"
              inputProps={{
                "data-testid": "signin-remember",
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              data-testid="signin-submit"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleSignUpClick}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Typography variant="caption" fontStyle={"italic"}>
              This is an example of a sign in form for test automation practice.
              <br />
              Email: test@test.com
              <br />
              Password: testing123!
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
