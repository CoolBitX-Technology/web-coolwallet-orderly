import Trading from './TradingPage';

export function generateStaticParams() {
  return [{ symbol: 'PERP_ETH_USDC' }];
}

export default function Page({ params }: { params: { symbol: string } }) {
  return <Trading params={params} />;
}
