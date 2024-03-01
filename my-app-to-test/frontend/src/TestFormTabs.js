import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import Profile from "./Profile";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    textTransform: "none",
    "&": {
      color: "white",
      fontSize: 18,
    },
  });

  return (
    <Box
      sx={{
        margin: "0 auto",
        background: "rgba(255,255,255,0.5)",
        minHeight: "300px",
      }}
    >
      <Box borderBottom={1} borderColor={"divider"}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="form example tabs"
          centered
          sx={{ bgcolor: "#04314c" }}
        >
          <StyledTab
            label="Sign In"
            {...a11yProps(0)}
            data-testid="tab-signin"
          />
          <StyledTab
            label="Sign Up"
            {...a11yProps(1)}
            data-testid="tab-signup"
          />
          <StyledTab
            label="Forgot Password"
            {...a11yProps(2)}
            data-testid="tab-forgot"
          />
          <StyledTab
            label="About Me"
            {...a11yProps(3)}
            data-testid="tab-about"
          />
        </Tabs>
      </Box>
      <Box justifyContent={"center"}>
        <CustomTabPanel value={value} index={0}>
          <SignIn handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUp handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ForgotPassword handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Profile handleChange={handleChange} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default function NewBasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    textTransform: "none",
    "&": {
      color: "gray",
      fontSize: 20,
      fontWeight: "lighter",
    },
    "&.Mui-selected": {
      color: "black",
      borderRadius: 100,
      background: "white",
    },
  });

  const StyledTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      display: "none",
    },
    borderRadius: 100,
    background: "#F2F2F2",
    padding: 5,
  });

  return (
    <Box
      sx={{
        margin: "0 auto",
        background: "rgba(255,255,255,0.5)",
        minHeight: "300px",
      }}
    >
      <Box display={"flex"} justifyContent={"center"} padding={2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="form example tabs"
          centered
        >
          <StyledTab
            label="Sign In"
            {...a11yProps(0)}
            data-testid="signin-tab"
          />
          <StyledTab
            label="Sign Up"
            {...a11yProps(1)}
            data-testid="signup-tab"
          />
          <StyledTab
            label="Forgot Password"
            {...a11yProps(2)}
            data-testid="forgot-tab"
          />
          <StyledTab
            label="About Me"
            {...a11yProps(3)}
            data-testid="about-tab"
          />
        </StyledTabs>
      </Box>
      <Box justifyContent={"center"}>
        <CustomTabPanel value={value} index={0}>
          <SignIn handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUp handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ForgotPassword handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Profile handleChange={handleChange} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
