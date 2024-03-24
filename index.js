import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listedContacts = await listContacts(); // Виклик функції listContacts()
      console.log(listedContacts); // Вивід результату в консоль
      break;

    case "get":
      const foundContact = await getContactById(id); // Виклик функції getContactById() з переданим id
      console.log(foundContact); // Вивід результату в консоль
      break;

    case "add":
      const addedContact = await addContact(name, email, phone); // Виклик функції addContact() з переданими name, email, phone
      console.log(addedContact); // Вивід результату в консоль
      break;

    case "remove":
      const removedContact = await removeContact(id); // Виклик функції removeContact() з переданим id
      console.log(removedContact); // Вивід результату в консоль
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
