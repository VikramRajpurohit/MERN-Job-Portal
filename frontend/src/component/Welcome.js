import { Grid, Typography } from "@material-ui/core";
import HowItWorks from './HowItWorks.js'

const Welcome = (props) => {
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
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">
                  {("Find the")} <br /> {("Job that fit your life")}
                </h2>
                <p>
                  find your life first Job here that because experience doesn't metter here.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="intro-img">
                <img src="assets/img/intro.png" alt="" />
              </div>
            </div>
            <HowItWorks />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
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
      </Grid>
    </Grid>
  );
};


export default Welcome;
