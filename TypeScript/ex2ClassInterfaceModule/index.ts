import { Invoice, Payment } from "./ClassImplementInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("Vinamilk", "drink milk", 500000);
const documentTwo: hasPrint = new Payment("Vietnam", "fly", 250000);
const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);
