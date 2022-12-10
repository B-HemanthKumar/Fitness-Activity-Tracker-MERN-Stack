import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "./Button";
import Typography from "./Typography";
import HomePageLayout from "./HomePageLayout";

const backgroundImage =
  "https://www.pexels.com/photo/an-on-treadmill-1954524/";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HomePage(props) {
  const { classes } = props;

  return (
    <HomePageLayout backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
         Stay Healthy, Stay Fit........
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
       Hey! Peeps, Start Recording your fitness activities by tracking with "FITTRACK" and stay consistent in your journey.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/user"
      >
        Create User Here
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Don't know, where to Start....? Just Tap on the above button to create user and start tracking your activity
      </Typography>
    </HomePageLayout>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
