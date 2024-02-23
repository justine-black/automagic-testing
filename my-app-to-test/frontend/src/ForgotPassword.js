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

export default function ForgotPassword(props) {
  const { handleChange } = props;
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    try {
      const response = await fetch(apiUrl + "/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setIsValidEmail(response.ok);
      setOpenDialog(true);

      if (!response.ok) {
        throw new Error("Login failed");
      }

      console.log("Login successful");
    } catch (error) {
      console.error("Error logging in:", error.message);
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
            Forgot Password
          </Typography>
          <Typography variant="caption">
            Enter your email and we'll send you a link to reset your password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              inputProps={{
                "data-testid": "forgot-email",
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              data-testid="forgot-submit"
            >
              Submit
            </Button>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleSigninClick}>
                  {"Back to Sign in"}
                </Link>
              </Grid>
            </Grid>
            <Typography variant="caption" fontStyle={"italic"}>
              This is an example of a forgot password form for test automation
              practice.
              <br />
              Email: test@test.com
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
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {isValidEmail
              ? "Password reset link was sent to your email"
              : "The email address provided does not exist in our system"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
