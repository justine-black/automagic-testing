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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const apiUrl = process.env.REACT_APP_API_URL;

const defaultTheme = createTheme();

export default function SignUp(props) {
  const { handleChange } = props;

  const [openDialog, setOpenDialog] = React.useState(false);
  const [signupState, setSignupState] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");
    const aboutMe = data.get("aboutMe");

    try {
      const response = await fetch(apiUrl + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password, aboutMe }),
      });

      setSignupState(response.ok);
      setOpenDialog(true);

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      console.log("Signup successful");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleSigninClick = () => {
    handleChange(null, 0);
  };
  const handleClose = () => {
    setOpenDialog(false);
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
              Sign Up
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
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {signupState ? "Signup successful" : "Signup failed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {signupState
              ? "Close this dialog box to practice with more forms"
              : "Something went wrong. Make sure to enter all required fields"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
