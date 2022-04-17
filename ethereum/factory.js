import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  //address of contract
  JSON.parse(CampaignFactory.interface),
  '0x75c7c445d59E5B2d69161Ad1745DCfB582e0D923'
  // '0x1B27D81e1C3aA2Aff0803e58147254f382a60fe9'
);

export default instance;
