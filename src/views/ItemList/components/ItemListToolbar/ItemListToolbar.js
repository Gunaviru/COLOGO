import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  floatingActionButton: {
    textAlign: 'right'
  }
}));

const ItemListToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >    
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center" 
        spacing={2}
      >
        <Grid item xs={6}>
          <Typography variant="h3">
            Page Title
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.floatingActionButton}>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>        
      </Grid>
    </div>
  );
};

ItemListToolbar.propTypes = {
  className: PropTypes.string
};

export default ItemListToolbar;
