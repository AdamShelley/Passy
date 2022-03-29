const fs = require("fs");

const chalk = require("chalk");

const clearPasswords = () => {
  try {
    fs.unlinkSync("passwords.txt");
    console.log(chalk.red("Passwords file deleted"));
  } catch (err) {
    console.log(err);
  }
};
module.exports = clearPasswords;
