'use client';
import { ConnectorProvider } from '@orderly.network/web3-onboard';
import { useRouter } from 'next/navigation';
import { OrderlyAppProvider, TradingPage } from '@orderly.network/react';
import Config from '@/orderly.config';
import { useCallback, useState } from 'react';
import { TradingViewChartConfig } from '@orderly.network/react/esm/block/tradingView';
import { Arbitrum, Base, Optimism, Polygon } from '@orderly.network/types';
import NotificationView from './NorificationView';

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

  const [isShowing, setIsShowing] = useState(true);

  const handleNotificationClose = () => {
    console.log('closed notification')
    setIsShowing(false)
  }


  return (
    <ConnectorProvider {...wallet}>
      <NotificationView
        message="服務將會在 xxxx/xx/xx mm:ss – mm:ss 暫停， 如果這邊太長的話就斷行做顯示～"
        isShowing={isShowing}
        onClose={handleNotificationClose}
      />
      <OrderlyAppProvider
        networkId="mainnet"
        brokerId={app.brokerId}
        brokerName={app.brokerName}
        appIcons={app.appIcons}
        onChainChanged={onChainChanged}
        shareOptions={{ pnl: { backgroundImages: [] } }}
        theme={{}}
        chainFilter={{
          mainnet: [Arbitrum, Base, Polygon, Optimism],
          testnet: [],
        }}
      >
        <>
          <TradingPage
          symbol={symbol}
          tradingViewConfig={
            pages.trading?.tradingView as TradingViewChartConfig
          }
          onSymbolChange={(symbol) => {
            router.push(`/${symbol.symbol}`);
          }}
        />
        </>
      </OrderlyAppProvider>
    </ConnectorProvider>
  );
}
