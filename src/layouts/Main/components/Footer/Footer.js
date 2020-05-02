import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Toolbar, Typography } from '@material-ui/core';
import FooterLogo from 'assets/images/logo/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    borderTop: '2px solid #f5f8f9',
    backgroundColor: '#ffffff',
    color: '#9e9e9e'
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
    <footer
      {...rest}
      className={clsx(classes.root, className)}    
    >
      <Toolbar variant="dense">
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          <Grid 
            item 
            xs
          >
            <Typography variant="body2">
              Powered by COLOGO. &copy; {new Date().getFullYear()} Copyrights Reserved.
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
                src={FooterLogo}
              />
            </RouterLink>  
          </Grid>      
        </Grid>     
      </Toolbar>  
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
