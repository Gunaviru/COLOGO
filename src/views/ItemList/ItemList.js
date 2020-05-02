import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';

import { ItemListToolbar, ItemListCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3)
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 'unset'
  },  
  spacer: {
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2, 0)
  }
}));

const ItemList = () => {
  const classes = useStyles();
  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <ItemListToolbar />
      <div className={classes.content}>
        <Grid 
          container
          direction="row"            
          spacing={2}
        >
          <Grid item xs={3}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
          <Grid item xs={9}>
            {products.map(product => (
              <Paper key={product.id} className={clsx(classes.paper, classes.spacer)}>
                <ItemListCard product={product} />
              </Paper>              
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ItemList;
