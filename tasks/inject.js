const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const {
	TASK_COMPILE,
} = require("hardhat/builtin-tasks/task-names");

// injecting additional logic into standard hardhat compile task
task(TASK_COMPILE, async function(args, hre, runSuper) {
	// execute standard hardhat compile task first
	// (note: otherwise it overwrites copied stuff)
	await runSuper();

	// now read the config and copy what is required
	const config = hre.config.dependencyInjector;

	// copy all the compiled dependencies one by one
	for(const dependency of config.paths) {
		const source = path.resolve(hre.config.paths.root, "node_modules", dependency);
		const destination = path.resolve(hre.config.paths.artifacts, dependency);

		if(!fs.existsSync(path.dirname(destination))) {
			fs.mkdirSync(path.dirname(destination), {recursive: true});
		}

		fse.copySync(source, destination, {overwrite: true});
	}
});
