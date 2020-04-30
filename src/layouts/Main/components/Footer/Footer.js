import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  logo: {
    maxWidth: '100%', 
    height: 'auto'
  },
  flexGrow: {
    flexGrow: 1
  }  
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        direction="row"
        justify="center"
        spacing={2}
      >
        <Grid item xs>
          <Typography variant="body2">
            Powered by COLOGO. &copy; 2020 Copyrights Reserved.
          </Typography>
        </Grid>
        <Grid 
          item 
          xs
        >
          <RouterLink to="/">
            <img
              align="right"
              alt="Logo"
              src="/images/logos/COLOGO.png"
            />
          </RouterLink>  
        </Grid>      
      </Grid>      
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
