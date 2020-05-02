import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, Divider, Chip, IconButton, Avatar } from '@material-ui/core';
import Chart from "react-apexcharts";

const useStyles = makeStyles(theme => ({
  imageContainer: {
    backgroundColor: '#f5f8f9',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  image: {
    maxWidth: '100%',
    height: 'auto'
  },
  viewsWrapper: {
    textAlign: 'center'
  },
  viewsData: {
    marginLeft: theme.spacing(0.3)
  },
  actionButton: {
    textAlign: 'right'
  },
  tagContainer: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5,0.5,0.5,0),
    margin: 0,
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
  avatars: {
    justifyContent: 'flex-end',
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(0.5),
    }
  },
  avatar: {
    width: 25,
    height: 25,
    fontSize: '0.75rem'
  },
  chartContainer: {

  }  
}));

const ItemListCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"             
      spacing={1}
      {...rest}
      className={clsx(classes.root, className)}    
    >
      <Grid item xs={10}>
        <Grid 
          container
          direction="row"         
          justify="center"       
          spacing={2}
        >
          <Grid item xs={2}>
            <div className={classes.imageContainer}>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </div>
          </Grid>
          <Grid item xs={10}>
            <Grid 
              container
              direction="row"
              justify="center"          
              spacing={0}
            >
              <Grid item xs={4}>
                <Typography variant="h5">
                  {product.title}
                </Typography> 
                <Typography variant="subtitle2">
                  Subtitle: {product.subTitle}
                </Typography>                                
              </Grid>
              <Grid item xs={4}>
                <div className={classes.viewsWrapper}>
                  <img
                    alt="Views"
                    className={classes.image}
                    src={product.viewsImageUrl}
                  />
                  <Typography variant="body2" display="inline" className={classes.viewsData}>
                    {product.viewsData}
                  </Typography>            
                </div>                   
              </Grid>
              <Grid item xs={4}>
                <div className={classes.actionButton}>
                  <IconButton size="small" aria-label="Action">
                    <img
                      alt="Views"
                      className={classes.image}
                      src={product.actionIconUrl}
                    />
                  </IconButton>
                </div>
              </Grid>                            
            </Grid>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"             
              spacing={0}
            >
              <Grid item xs={12}>
                <Typography variant="body1">
                  Description: {product.description}
                </Typography>                   
              </Grid>
            </Grid>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"             
              spacing={0}
            >
              <Grid item xs={6}>
                <ul className={classes.tagContainer}>
                  {product.tags.map((data) => {
                    return (
                      <li key={data.key}>
                        <Chip
                          size="small"
                          label={data.label}
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
                </ul>
              </Grid>         
              <Grid item xs={6}>
                <div className={classes.avatars}>
                  <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar className={classes.avatar} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar className={classes.avatar} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </div>
              </Grid>                            
            </Grid>
          </Grid>                                          
        </Grid>                   
      </Grid>
      <Grid item xs={2}>
        <div className={classes.chartContainer}>
          <Chart
            options={product.chartData.options}
            series={product.chartData.series}
            type="radialBar"
          />              
        </div>
      </Grid>                              
    </Grid>
  );
};

ItemListCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ItemListCard;
