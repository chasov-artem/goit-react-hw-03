const Contact = ({ name, number }) => {
  return (
    <div>
      <li>
        {name} {number}
      </li>
      <button type="button" name="delete-btn">
        Delete
      </button>
    </div>
  );
};
export default Contact;
