import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 50
  },
  content: {
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: '#f5f8f9',
  },
  footer: {

  }  
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <main 
      className={clsx({
        [classes.root]: true
      })}
    >
      <CssBaseline />
      <Header/>
      <section className={classes.content}>
        {children}
      </section>  
      <Footer className={classes.footer}/>    
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;