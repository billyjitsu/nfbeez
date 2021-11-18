import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

  await deploy('NFBeez', {
    from: deployer,
    args: ["NOTTheNFBeez",
    "NNFB", 
    "ipfs://QmbdVXi8dMDRcFfeh1m6ABVsv8Cmsn74YAsSBVmkG7sMyd/", 
    "ipfs://Qmf3jnLANDhhVuUkjCgVDgRWoJsEo7s2dqzGGSGVrQcUhL/1.json"],
    log: true,
  });

  
  await deployments.execute('NFBeez', {
    from: deployer,
    log: true
  },
  'setOnlyWhitelisted', false
  )



  
};
export default func;
func.tags = ['NFBeez'];
