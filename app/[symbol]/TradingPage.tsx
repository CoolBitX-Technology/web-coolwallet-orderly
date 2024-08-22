'use client';
import { ConnectorProvider } from '@orderly.network/web3-onboard';
import { useRouter } from 'next/navigation';
import { OrderlyAppProvider, TradingPage } from '@orderly.network/react';
import Config from '@/orderly.config';
import { useCallback, useEffect, useState } from 'react';
import { TradingViewChartConfig } from '@orderly.network/react/esm/block/tradingView';
import { Arbitrum, Base, Optimism, Polygon } from '@orderly.network/types';
import NotificationView from './NotificationView';

function getMessage(startTime: Date, endTime: Date): string {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  // return `服務將會在 ${dateFormatter.format(startTime)} – ${dateFormatter.format(endTime)} 暫停`;
  return 'Futures will be unavailable on August 27th, 2024, from 06:00 to 07:00 AM (UTC) due to a scheduled Orderly upgrade. Please be aware that losses during this period will not be compensated.'
}

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

  // notification
  const [showNotification, setShowNotification] = useState(true);
  
  const startDate = new Date('2024-08-22T00:00:00+00:00');
  const endDate =   new Date('2024-08-27T07:00:00+00:00');
  const message = getMessage(startDate, endDate)

  const handleNotificationClose = () => {
    setShowNotification(false)
  }

  return (
       <ConnectorProvider {...wallet}>
       {showNotification && <NotificationView
        message={message}
        startDate={startDate}
        endDate={endDate} 
        onClose={handleNotificationClose}
      />}
      <OrderlyAppProvider
        networkId="testnet"
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
    </ConnectorProvider>
  );
}
