import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HowItWorks from './HowItWorks.js'
import { useMediaQuery } from '../Media.tsx'

const Welcome = (props) => {
  const bigScreen = useMediaQuery('(min-width: 1005px)');
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh", marginTop: '5%' }}
    >
      <Grid item>
        <div className="container">
          <div className="row space-100">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title" style={{ fontSize: bigScreen ? 25 : 18 }}>
                  {("Find the")} <br /> {("Job that fit your life")}
                </h2>
                <p style={{ fontSize: bigScreen ? 17 : 15, lineHeight: 2 }}>
                  find your life first Job here that because experience doesn't metter here.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="intro-img">
                <img src="assets/img/intro.png" alt="" style={{ height: '100%', width: '110%' }} />
              </div>
            </div>
            <HowItWorks />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = () => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
        <NavLink to='/'>Go Back</NavLink>
      </Grid>
    </Grid>
  );
};


export default Welcome;
