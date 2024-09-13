const Contact = ({ name, number, onDelete }) => {
  return (
    <div>
      <li>
        {name} {number}
      </li>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
