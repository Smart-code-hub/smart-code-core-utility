const fs = require("fs");

function GeneratereactRelatedFolders(dir) {
  if (!fs.existsSync(dir + "/Components/Shared")) {
    fs.mkdirSync(dir + "/Components/Shared", { recursive: true });
  }
  if (!fs.existsSync(dir + "/Services")) {
    fs.mkdirSync(dir + "/Services", { recursive: true });
  }
  if (!fs.existsSync(dir + "/State/Actions")) {
    fs.mkdirSync(dir + "/State/Actions", { recursive: true });
  }
  if (!fs.existsSync(dir + "/State/Reducers")) {
    fs.mkdirSync(dir + "/State/Reducers", { recursive: true });
  }
    if (!fs.existsSync(dir + "/State/Sagas")) {
    fs.mkdirSync(dir + "/State/Sagas", { recursive: true });
  }
}
module.exports = { GeneratereactRelatedFolders };
