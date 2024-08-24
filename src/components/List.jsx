import React from 'react';

const Item = ({ item, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {children}
      <div style={{ width: '100px' }}>{item.text}</div>
    </div>
  );
};

const withExtraSymbol = (WrapperComponent, symbol) => {
  return (props) => {
    return (
      <div>
        <WrapperComponent {...props}>
          <div>{symbol}&nbsp;</div>
        </WrapperComponent>
      </div>
    );
  };
};

const ItemWithSymbol = withExtraSymbol(Item, '👍');

/**
 * Renders a list of items with delete and edit buttons.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.list - The list of items to render.
 * @param {Function} props.handleDelete - The function to handle item deletion.
 * @param {Function} props.handleEdit - The function to handle item editing.
 * @return {JSX.Element} The rendered list component.
 */
function List(props) {
  const { list, handleDelete, handleEdit } = props;

  return (
    <ul>
      {list?.map((item) => (
        <li key={item.key} style={{ display: 'flex' }}>
          <ItemWithSymbol item={item} />
          <button onClick={() => handleDelete(item.key)}>Delete</button>
          <button onClick={() => handleEdit(item, item.key)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
