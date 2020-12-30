import API from "./api";

async function createContact(properties) {
  if (!("email" in properties)) {
    console.log("need an email");
    return;
  }
  try {
    let contact = await API.createContact(properties);
    console.log(contact);
    console.log("success!");
    return;
  } catch (err) {
    console.log(err);
  }
}

export default createContact;
