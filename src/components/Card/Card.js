import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: "5px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  smallInfo: {
    fontWeight: 500
  },
  head:{
    fontWeight: 800
  }
};

function SimpleCard(props) {
  const { classes,type,info } = props;
  const bull = <span className={classes.bullet}>•</span>;

  const head = (type!=="films")? info.name : info.title ;

  return (
    <Card className={classes.card} raised={true}>
      <CardContent>

        <Typography className={classes.head} variant="headline" component="h2">
          {bull}
          {head}
          {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {"part of " + type}
        </Typography>

        {
          Object.entries(info).map((value,index) => {
            let str = value[0].toUpperCase() + " : " + value[1]
            if(str.length > 25) {str=null}

            const smallInfo = 
                (<Typography className={classes.smallInfo} key={index} component="p">
                    {str}
                  </Typography>)
            return smallInfo;                  
          })
        }

      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);