import StarkNetHome from '../pages/starknet/StarkNetHome';
import StarkNetWallet from '../pages/starknet/connectwallet/connectwallet';
import StarkNetBasics from '../pages/starknet/basics/basics';
import WhatIsStark from '../pages/starknet/basics/whatisstark';
import StarksSnarks from '../pages/starknet/basics/starkssnarks';
import WalletComparison from '../pages/starknet/connectwallet/walletcomparison';

const starknetRoutes = [
  { path: "/starknet", element: <StarkNetHome /> },
  { path: "/starknet/basics", element: <StarkNetBasics /> },
  { path: "/starknet/connectwallet", element: <StarkNetWallet /> },
  { path: "/starknet/basics/whatisstark", element: <WhatIsStark /> },
  { path: "/starknet/basics/starkssnarks", element: <StarksSnarks /> },
  { path: "/starknet/connectwallet/walletcomparison", element: <WalletComparison /> }
];

export default starknetRoutes;
