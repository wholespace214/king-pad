import { ethers } from 'ethers';
import contracts from './contracts.json';
import { END_POINT } from '../Config/general';

const provider = new ethers.providers.JsonRpcProvider(END_POINT);

const GeneralSpawnerLocker = new ethers.Contract(
  contracts.GeneralSpawnerLocker.address,
  contracts.GeneralSpawnerLocker.abi,
  provider
);

const KING_locker = new ethers.Contract(contracts.KING_locker.address, contracts.KING_locker.abi, provider);
const KINGPAD_Factory = new ethers.Contract(contracts.KINGPAD_Factory.address, contracts.KINGPAD_Factory.abi, provider);
const KINGPAD_infoGetter = new ethers.Contract(
  contracts.KINGPAD_infoGetter.address,
  contracts.KINGPAD_infoGetter.abi,
  provider
);
const kingPad_locker = new ethers.Contract(contracts.kingPad_locker.address, contracts.kingPad_locker.abi, provider);
const KINGPAD_Presale = new ethers.Contract(contracts.KINGPAD_Presale.address, contracts.KINGPAD_Presale.abi, provider);
const KINGpass = new ethers.Contract(contracts.KINGpass.address, contracts.KINGpass.abi, provider);

export {
  provider,
  GeneralSpawnerLocker,
  KING_locker,
  KINGPAD_Factory,
  KINGPAD_infoGetter,
  kingPad_locker,
  KINGPAD_Presale,
  KINGpass
};
