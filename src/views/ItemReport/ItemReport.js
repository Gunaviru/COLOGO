import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ItemReportToolbar, ItemReportTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ItemReport = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <ItemReportToolbar />
      <div className={classes.content}>
        <ItemReportTable users={users} />
      </div>
    </div>
  );
};

export default ItemReport;
