const fs = require("fs-extra");

const copyFolder = async (source, destination) => {
  await fs.copy(source, destination);
};
module.exports = { copyFolder };
