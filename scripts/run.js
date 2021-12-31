const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('Pugeez');
    const nftContract = await nftContractFactory.deploy(
        "Gigadig",
        "GIGA", 
        "ipfs://QmRGMsp4xshQG6gzWQd3FzuwTgmQjVsuuWZ6L6uxjvGSd4/", 
        "ipfs://QmWFbcEmC9PFaWWjDvincjacEm32pak8vT272Zwy98pMkV/1.json" ,
        ["0x49284a18822eE0d75fD928e5e0fC5a46C9213D96","0x49284a18822eE0d75fD928e5e0fC5a46C9213D96"],
        {
            value: hre.ethers.utils.parseEther('1000'),
          }
        );
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
  
    for(let i = 1; i < 3335; i++) {
    // Call the function.
   let txn = await nftContract.mint(1)
    // Wait for it to be mined.
    await txn.wait()
    console.log(`Minted NFT:`, i)
    }

    let rev = await nftContract.reveal();
    await rev.wait()
    console.log("Contract revealed");
    
  
    /*
    let info = await nftContract.baseURI();
    console.log(info)
    let token = await nftContract.tokenURI(1);
    console.log(token)
    let rev = await nftContract.reveal();
    await rev.wait()
    token = await nftContract.tokenURI(1);
    console.log(token)
  */
  /*
    txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #2")
    */
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();