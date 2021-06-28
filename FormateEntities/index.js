const { pick } = require("lodash");
function UpdateEntity(properties) {
  let schemaobj = {};
  properties.forEach((a) => {
    let formatedObj = GetForMatedObject(a);
console.log(formatedObj);

    schemaobj[a.name] = { ...formatedObj, ...pick(a, ["type"]) };
    if(a.hasRelationShip){
      schemaobj[a.name].ref = formatedObj.ref;
    }
  });
  return schemaobj;
}
function GetForMatedObject(obj) {
  const finalProps = {};
  if (obj.hasRelationShip) {
    const { entityName } = obj.ref;
    obj.type = "ObjectId";
    finalProps.ref = entityName;
  }
  for (const key in obj.specificProperty) {
    if (obj.specificProperty[key].default) {
      finalProps[key] = obj.specificProperty[key].default;
    }
  }
  for (const key in obj.commonProperty) {
    if (obj.commonProperty[key].default) {
      finalProps[key] = obj.commonProperty[key].default;
    }
  }
  for (const key in obj.indexProperty) {
    if (obj.indexProperty[key].default) {
      finalProps[key] = obj.indexProperty[key].default;
    }
  }
  return finalProps;
}
module.exports = { UpdateEntity };
