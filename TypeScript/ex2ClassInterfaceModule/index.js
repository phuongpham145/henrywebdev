"use strict";
exports.__esModule = true;
var ClassImplementInterface_1 = require("./ClassImplementInterface");
var documentOne = new ClassImplementInterface_1.Invoice("Vinamilk", "drink milk", 500000);
var documentTwo = new ClassImplementInterface_1.Payment("Vietnam", "fly", 250000);
var allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);
