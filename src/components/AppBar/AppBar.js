import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GameIcon from '@material-ui/icons/VideogameAsset';
import HomeIcon from '@material-ui/icons/Home';
import PopupIcon from '@material-ui/icons/BlurOn';
import StarIcon from '@material-ui/icons/Stars';


const styles = {
  root: {
    flexGrow: 1,
    textAlign: "left"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  }
};

class MenuAppBar extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <GameIcon />
              <HomeIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>
              Star Wars Wiki
            </Typography>
              <div>
                <IconButton color="inherit" >
                  <a href="https://github.com/hmahajan99" className={classes.link}>
                    <PopupIcon />
                    <StarIcon />
                  </a>
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);