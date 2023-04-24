export const ListItem = ({ item, callback }) => {
  return (
    <li>
      <span>{item.text}</span>
      <button type="button" onClick={() => callback(item.id)}>
        Feito
      </button>
    </li>
  );
};
