import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './CompostTurningRecord.css'
import Nav from '../../../Nav/Nav';


class CompostTurningRecord extends Component {


  state= {
    
  }




  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
      <Nav/>
      <Typography variant="h6" gutterBottom align="center">
          Compost Turning Record
      </Typography>
      <Grid container spacing={24}
      direction="column"
      justify="center"
      alignItems="center">
         
          <Grid item xs={12} sm={6}>
             
          </Grid>

      </Grid>
     
  </React.Fragment>
    );
  }
}

const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
});



const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(withStyles(styles)(CompostTurningRecord));