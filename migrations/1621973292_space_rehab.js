const SpaceRehab = artifacts.require("SpaceRehab");

module.exports = async function(_deployer) {
  // Use deployer to state migration tasks.
  await _deployer.deploy(SpaceRehab);
};
