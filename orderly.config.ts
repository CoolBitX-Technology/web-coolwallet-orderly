import {OrderlyConfig, OrderlyConfigCtx} from '@orderly.network/react'
import boardOptions from './orderly/blockNative.config';

const config = (ctx: OrderlyConfigCtx): OrderlyConfig => {
  return {
    wallet: {
      /**
       * 1. Create an Api key at https://explorer.blocknative.com/account
       * 2. Copy the API key and paste it below
       * @see https://onboard.blocknative.com/docs/overview/introduction
       */
      apiKey: '74cc50fe-80f0-4dc5-a353-93e93d95c711',
      /**
       * web3-onboard options
       * @see https://onboard.blocknative.com/docs/modules/core#initialization
       */
      options: boardOptions,
    },
    app: {
      brokerId: 'coolwallet',
      brokerName: 'coolwallet',
      /**
       * customize the app's icons
       * Can use image resources directly or customize React components
       * @see https://sdk.orderly.network/components/theming#appicons
       */
      appIcons: {
        //
        main: {
          img: '/orderly-logo.svg',
        },
        //
        secondary: {
          img: '/orderly-logo-secondary.svg',
        },
      },
    },
    pages: {
      trading: {
        /**
         * TradingView charting config
         * @see https://sdk.orderly.network/components/trading#tradingviewconfig
         */
        tradingView: {
          // TradingView charting library
          scriptSRC: '/tradingView/charting_library/charting_library.js',
          library_path: '/tradingView/charting_library/charting_library.js',
          // optional theme css
          // customCssUrl: "/tradingview/chart.css",
        },
      },
    },
  };
};

export default config;

