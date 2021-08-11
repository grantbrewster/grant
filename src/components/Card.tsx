import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// .continerMember {
//   align-items: center; /* NEW */
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   align-content: center;
//   justify-content: center;
//   height: 4.2rem;
//   list-style: none;
//   padding: 0;
//   border: 1px solid #000;
//   border-radius: 5px;
//   overflow: hidden;
// }

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 343,
    justifyContent: 'center',
    justifyItems: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

const SimpleCard: React.FC<{title: string}> = ({title}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;