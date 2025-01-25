import GetProvider from '../pages/wagmi/getprovider/getprovider';
import ChainConfig from '../pages/wagmi/chainconfig/chainconfig';
import GetApiKey from '../pages/wagmi/getapikey/getapikey';
import Intro from '../pages/wagmi/intro/intro';

const builderRoutes = [
  { path: "/intro", element: <Intro /> },
  { path: "/builder/provider", element: <GetProvider /> },
  { path: "/builder/chainconfig", element: <ChainConfig /> },
  { path: "/builder/getapikey", element: <GetApiKey /> }
];

export default builderRoutes;
