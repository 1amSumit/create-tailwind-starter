#!usr/bin/env node

const repoName = process.argv[2];

const { execSync } = require("child-process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const gitCheckOutCommand = `git clone --depth 1 https://github.com/1amSumit/tailwind--starter ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const checkOut = runCommand(gitCheckOutCommand);
if (!checkOut) {
  process.exit(code - 1);
}

console.log(`Installing dependensies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
  process.exit(code - 1);
}

console.log(
  `Congratullations! you are ready. Follow the following command to start`
);

console.log(`cd ${repoName} && npm start`);
