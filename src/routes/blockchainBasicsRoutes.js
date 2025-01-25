import BlockchainSteps from '../pages/blockchainbasics/blockchainsteps.';
import DLT from '../pages/blockchainbasics/howbcworks/DLT';
import ConsensusExplainer from '../pages/blockchainbasics/howbcworks/consensus';
import ConsensusQuiz from '../pages/blockchainbasics/howbcworks/consensusquiz';
import Decentralization from '../pages/blockchainbasics/howbcworks/decentralization';
import Encouragement from '../pages/blockchainbasics/howbcworks/encouragement';
import BlockchainBasicsQuiz from '../pages/blockchainbasics/howbcworks/basicsquiz';
import FinalEncouragement from '../pages/blockchainbasics/howbcworks/finalencouragement';
import Cryptography from '../pages/blockchainbasics/howbcworks/cryptography';

const blockchainBasicsRoutes = [
  { path: "/blockchain-basics", element: <BlockchainSteps /> },
  { path: "blockchain-basics/how-blockchain-works", element: <DLT /> },
  { path: "blockchain-basics/consensus", element: <ConsensusExplainer /> },
  { path: "blockchain-basics/consensus-quiz", element: <ConsensusQuiz /> },
  { path: "blockchain-basics/decentralization", element: <Decentralization /> },
  { path: "blockchain-basics/encouragement", element: <Encouragement /> },
  { path: "blockchain-basics/basics-quiz", element: <BlockchainBasicsQuiz /> },
  { path: "blockchain-basics/final-encouragement", element: <FinalEncouragement /> },
  { path: "blockchain-basics/cryptography", element: <Cryptography /> }

];

export default blockchainBasicsRoutes;
