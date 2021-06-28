const properties = [
    {
      "_id": "",
      "isHash": false,
      "isImage": false,
      "isRichText": false,
      "name": "productsku",
      "htmlElement": "",
      "type": "String",
      "hasRelationShip": true,
      "ref": {
        "columnNameToDisplay": "sku",
        "entityName": "product",
        "columnNameAsValue": "sku"
      },
      "commonProperty": {
        "required": { "type": 0, "default": false },
        "default": { "type": 1, "default": "" },
        "select": { "type": 0, "default": false },
        "alias": { "type": 1, "default": "" }
      },
      "indexProperty": {
        "index": { "type": 0, "default": false },
        "unique": { "type": 0, "default": false },
        "sparse": { "type": 0, "default": false }
      },
      "specificProperty": {
        "minlength": { "type": 1, "default": "" },
        "maxlength": { "type": 1, "default": "" },
        "lowercase": { "type": 0, "default": false },
        "uppercase": { "type": 0, "default": false },
        "trim": { "type": 0, "default": false },
        "match": { "type": 0, "default": false }
      }
    },
    {
      "_id": "",
      "isHash": false,
      "isImage": false,
      "isRichText": false,
      "name": "quantity",
      "htmlElement": "",
      "type": "String",
      "hasRelationShip": false,
      "ref": {
        "columnNameToDisplay": "",
        "entityName": "",
        "columnNameAsValue": ""
      },
      "commonProperty": {
        "required": { "type": 0, "default": false },
        "default": { "type": 1, "default": "" },
        "select": { "type": 0, "default": false },
        "alias": { "type": 1, "default": "" }
      },
      "indexProperty": {
        "index": { "type": 0, "default": false },
        "unique": { "type": 0, "default": false },
        "sparse": { "type": 0, "default": false }
      },
      "specificProperty": {
        "minlength": { "type": 1, "default": "" },
        "maxlength": { "type": 1, "default": "" },
        "lowercase": { "type": 0, "default": false },
        "uppercase": { "type": 0, "default": false },
        "trim": { "type": 0, "default": false },
        "match": { "type": 0, "default": false }
      }
    },
    {
      "_id": "",
      "isHash": false,
      "isImage": false,
      "isRichText": false,
      "name": "lastUpdated",
      "htmlElement": "",
      "type": "Date",
      "hasRelationShip": false,
      "ref": {
        "columnNameToDisplay": "",
        "entityName": "",
        "columnNameAsValue": ""
      },
      "commonProperty": {
        "required": { "type": 0, "default": false },
        "default": { "type": 1, "default": "" },
        "select": { "type": 0, "default": false },
        "alias": { "type": 1, "default": "" }
      },
      "indexProperty": {
        "index": { "type": 0, "default": false },
        "unique": { "type": 0, "default": false },
        "sparse": { "type": 0, "default": false }
      },
      "specificProperty": {
        "min": { "type": 5, "default": "" },
        "max": { "type": 5, "default": "" }
      }
    }
  ]

const data = require('./FormateEntities/index').UpdateEntity(properties);

console.log(data);
