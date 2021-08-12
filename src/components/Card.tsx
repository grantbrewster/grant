import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapsible from 'react-collapsible';
import { Grid } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
  root: {
    minWidth: '20vh',
    maxWidth: '50vh',
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

const SimpleCard: React.FC<{title: string, content:Array<String>}> = ({title, content}) => {
  const classes = useStyles();


  const Trigger = () => <Button size="small">Learn More</Button>;

  return (
    <Card className={classes.root} style={{maxWidth: '100vh'}}>
      <CardContent>
        <Typography variant='h4' color="textPrimary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
        <Collapsible trigger={<Trigger/>}>
          <Grid item>
            <List dense={true}>
              {content.map((item, i) => 
                <ListItem divider={true} >{item}</ListItem>)}
            </List>
          </Grid>
        </Collapsible>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;