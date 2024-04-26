'use client';
import { ConnectorProvider } from '@orderly.network/web3-onboard';
import { OrderlyConfigProvider } from '@orderly.network/hooks';
import { useRouter } from 'next/navigation';
import { OrderlyAppProvider, TradingPage } from '@orderly.network/react';
import Config from '@/orderly.config';
import { useCallback } from 'react';
import { TradingViewChartConfig } from '@orderly.network/react/esm/block/tradingView';

export default function Trading({ params }: { params: { symbol: string } }) {
  const symbol = params.symbol.startsWith('PERP_')
    ? params.symbol
    : `PERP_${params.symbol}`;

  const router = useRouter();

  const { app, pages, wallet } = Config({});

  const onChainChanged = useCallback(
    (chainId: number, isTestnet: boolean) => {
      // realod page
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
    [symbol]
  );
  return (
    <ConnectorProvider {...wallet}>
      <OrderlyConfigProvider networkId="mainnet" brokerId={app.brokerId}>
        <OrderlyAppProvider
          networkId="mainnet"
          brokerId={app.brokerId}
          brokerName={app.brokerName}
          appIcons={app.appIcons}
          onChainChanged={onChainChanged}
          shareOptions={{ pnl: { backgroundImages: [] } }}
          theme={{}}
        >
          <TradingPage
            symbol={symbol}
            tradingViewConfig={
              pages.trading?.tradingView as TradingViewChartConfig
            }
            onSymbolChange={(symbol) => {
              router.push(`/${symbol.symbol}`);
            }}
          />
        </OrderlyAppProvider>
      </OrderlyConfigProvider>
    </ConnectorProvider>
  );
}