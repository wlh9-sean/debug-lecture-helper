import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 275,
    margin: '10px 0px'
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
};

function random() {
  let noArr = ["I'd rather not.", "Nope.", "I kinda like this car.", "No one wants to buy that.", "You don't have the authority to sell this car.", "Uh, oh. Trying to sell something that isn't your ain't cool!", 'No. ☹']
  alert(noArr[Math.floor(Math.random() * 7)])
}

function SimpleCard(props) {
  const { id, year, make, model, color, price, classes } = props.vehicle;

  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography color="textSecondary">
          {year}
        </Typography>
        <Typography variant="headline" component="h2">
          {make}
        </Typography>
        <Typography variant="headline" component="h2">
          {model}
        </Typography>
        <Typography color="textSecondary">
          {color}
        </Typography>
        <Typography component="p">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={random}>Sell car</Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
