#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const clearPasswords = require("./utils/clearPasswords");

program.version("1.0.0").description("Password Generator");

program
  .option("-L, --length <number>", "Length of the password", "8")
  .option("-S, --save", "Save password to passwords.txt")
  .option("-NN, --no-numbers", "Remove numbers")
  .option("-NS, --no-symbols", "Remove symbols")
  .option("-DD, --delete-file", "Delete passwords.txt")
  .option("-N, --name <name>", "Add a name")
  .parse();

console.log(program.opts());
const { length, save, numbers, symbols, deleteFile, name } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(name, generatedPassword);
}

// Delete file
if (deleteFile) {
  clearPasswords();
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to the clipboard"));
