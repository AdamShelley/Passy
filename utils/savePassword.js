const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (name, password) => {
  let string = `${name}: ${password}`;
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 0666, (e, id) => {
    fs.write(id, string + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password saved to passwords.txt"));
      });
    });
  });
};

module.exports = savePassword;
