import type { InitOptions } from '@orderly.network/web3-onboard'
import injectedModule from '@web3-onboard/injected-wallets';

/**
 * web3-onboard options
 * @see https://onboard.blocknative.com/docs/modules/core#initialization
 */
const boardOptions: Partial<InitOptions> = {
  wallets: [injectedModule()],
  appMetadata: {
    name: 'CoolWallet Perpetual Contract',
    icon: '/coolwallet.svg',
    description: 'CoolWallet Perpetual Contract',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy',
    },
    gettingStartedGuide: 'https://blocknative.com',
    explore: 'https://blocknative.com',
  },
};

export default boardOptions;