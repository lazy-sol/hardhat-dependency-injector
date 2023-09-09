const {extendConfig} = require("hardhat/config");

require("./tasks/inject.js");

extendConfig(function(config, userConfig) {
	config.dependencyInjector = Object.assign(
		{
			paths: [],
		},
		userConfig.dependencyInjector
	);
});
