import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

  await deploy('NFBeez', {
    from: deployer,
    args: ["NFBeez",
    "NFB", 
    "ipfs://QmbdVXi8dMDRcFfeh1m6ABVsv8Cmsn74YAsSBVmkG7sMyd/", 
    "ipfs://QmRte2aJTeFtwC6YjsVTseY2wigvc7dUU5TqugR2cTwcHX/1.json",
    ["0x49284a18822eE0d75fD928e5e0fC5a46C9213D96","0x49284a18822eE0d75fD928e5e0fC5a46C9213D96"]],
    log: true,
  });

  //"ipfs://QmbdVXi8dMDRcFfeh1m6ABVsv8Cmsn74YAsSBVmkG7sMyd/"    old link
  // "ipfs://QmRte2aJTeFtwC6YjsVTseY2wigvc7dUU5TqugR2cTwcHX/1.json", og hidden larva
  
  await deployments.execute('NFBeez', {
    from: deployer,
    log: true
  },
  'setOnlyWhitelisted', false,
  )



  
};
export default func;
func.tags = ['NFBeez'];
