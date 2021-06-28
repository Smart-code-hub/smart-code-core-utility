const {
  GenerateApiRelatedFolders
} = require("./FoldersUtility/javascript/api/generateApiFolders");
const {
  GeneratereactRelatedFolders
} = require("./FoldersUtility/javascript/react/GenerateReactFolders");

const { UpdateEntity } = require("./FormateEntities//index");

const ZipAFolder = require("./FoldersUtility/Ziputility/index");
const { copyFolder } = require("./FoldersUtility/CopyFolders");

function UpdateEntities(entities) {
  entities.forEach(entity => {
    entity.entitySchema = UpdateEntity(entity.properties);
  });
}
module.exports = {
  GenerateApiRelatedFolders,
  GeneratereactRelatedFolders,
  UpdateEntities,
  ZipAFolder,
  copyFolder
};
