import { v4 as uuid } from 'uuid';

var chartOptions = {
  colors: ['#f44336'],          
  plotOptions: {
    radialBar: {            
      hollow: {
        size: "60%",
        imageOffsetX: 0,
        imageOffsetY: 0,        
      },
      track: {
        background: '#eee',
        strokeWidth: '100%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 10,
          color: '#f44336',
          fontSize: "22px",
          show: true
        }
      }
    }
  },
  stroke: {
    lineCap: "butt",
  }
};
export default [
  {
    id: uuid(),
    title: 'Item Title',
    subTitle: 'ABCD',
    viewsImageUrl: '/images/icons/minigraph.svg',
    viewsData: '287 views',
    actionIconUrl: '/images/icons/pencilcircle.svg',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: '/images/icons/research.svg',     
    chartData: {
      options: chartOptions,
      series: [74]
    },
    tags: [{ key: 0, label: 'Tags' },{ key: 1, label: 'Tags' },{ key: 2, label: 'Tags' },{ key: 3, label: 'Tags' },{ key: 4, label: 'Tags' }]
  },
  {
    id: uuid(),
    title: 'Item Title',
    subTitle: 'ABCD',
    viewsImageUrl: '/images/icons/minigraph.svg',
    viewsData: '287 views',
    actionIconUrl: '/images/icons/lockcheck.svg',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: '/images/icons/research.svg',
    chartData: {
      options: chartOptions,
      series: [51]
    },
    tags: [{ key: 0, label: 'Tags' },{ key: 1, label: 'Tags' },{ key: 2, label: 'Tags' },{ key: 3, label: 'Tags' },{ key: 4, label: 'Tags' }]    
  },
  {
    id: uuid(),
    title: 'Item Title',
    subTitle: 'ABCD',
    viewsImageUrl: '/images/icons/minigraph.svg',
    viewsData: '287 views',
    actionIconUrl: '/images/icons/lockdisabled.svg',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: '/images/icons/research.svg',
    chartData: {
      options: chartOptions,
      series: [19]
    },
    tags: [{ key: 0, label: 'Tags' },{ key: 1, label: 'Tags' },{ key: 2, label: 'Tags' },{ key: 3, label: 'Tags' },{ key: 4, label: 'Tags' }]    
  },
  {
    id: uuid(),
    title: 'Item Title',
    subTitle: 'ABCD',
    viewsImageUrl: '/images/icons/minigraph.svg',
    viewsData: '287 views',
    actionIconUrl: '/images/icons/locknotavailable.svg',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: '/images/icons/research.svg',
    chartData: {
      options: chartOptions,
      series: [70]
    },
    tags: [{ key: 0, label: 'Tags' },{ key: 1, label: 'Tags' },{ key: 2, label: 'Tags' },{ key: 3, label: 'Tags' },{ key: 4, label: 'Tags' }]
  }
];
