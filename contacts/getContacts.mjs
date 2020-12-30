import API from "./api.mjs";

let result = await API.getContacts();

let { contacts, count } = result;

contacts.forEach((c) => console.log(c.email));
console.log(`${count} results`);
console.log("––––––––\n");
