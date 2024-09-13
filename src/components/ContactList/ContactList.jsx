import Contact from "../Contact/Contact";
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;
