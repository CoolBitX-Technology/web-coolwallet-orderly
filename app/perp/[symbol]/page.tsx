"use client";
import { ConnectorProvider } from "@orderly.network/web3-onboard";
import { useRouter } from 'next/navigation'
import { OrderlyAppProvider, TradingPage } from "@orderly.network/react";
import Config from "@/orderly.config";

export default function Trading({ params }: { params: { symbol: string } }) {
  const symbol = params.symbol.startsWith("PERP_")
    ? params.symbol
    : `PERP_${params.symbol}`;

  const router = useRouter();

  const {app, pages, wallet} = Config({});

  return (
    <ConnectorProvider {...wallet}>
      <OrderlyAppProvider
        networkId="testnet"
        brokerId={app.brokerId}
        brokerName={app.brokerName}
        appIcons={app.appIcons}
        onChainChanged={(chain) => {
          // TODO: handle chain change
        }}
      >
        <TradingPage
          symbol={symbol}
          tradingViewConfig={pages.trading.tradingView}
          onSymbolChange={(symbol) => {
            router.push(`/perp/${symbol.symbol}`);
          }}
        />
      </OrderlyAppProvider>
    </ConnectorProvider>
  );
}
