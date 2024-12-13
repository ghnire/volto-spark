import PlannerTemplate from './customizations/volto/components/manage/Blocks/Listing/PlannerTemplate';

const applyConfig = (config) => {
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'listingPlanner',
      title: 'Planner',
      template: PlannerTemplate,
    },
  ];
  config.blocks.themes = [
    {
      style: {
        '--theme-color': '#293676',
        '--theme-high-contrast-color': 'darkslategrey',
        '--theme-foreground-color': 'white',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--theme-color': 'darkslategrey',
        '--theme-high-contrast-color': 'black',
        '--theme-foreground-color': 'lemonchiffon',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'green',
      label: 'Green',
    },
    {
      style: {
        '--theme-color': '#293676',
        '--theme-high-contrast-color': '#5e6a72',
        '--theme-foreground-color': 'white',
        '--theme-low-contrast-foreground-color': 'lightgrey',
      },
      name: 'sparkblue',
      label: 'SparkBlue',
    },
  ];
  return config;
};

export default applyConfig;
