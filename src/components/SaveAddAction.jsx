import React from 'react';

/**
 * A reusable action component for saving and adding items.
 *
 * @param {Object} props - The component props.
 * @param {string} props.input - The input value.
 * @param {Function} props.setInput - The function to set the input value.
 * @param {boolean} props.isEditing - Whether the component is in editing mode.
 * @param {Function} props.handleAdd - The function to handle adding an item.
 * @param {Function} props.handleSave - The function to handle saving an item.
 * @param {Object} props.style - The component style.
 * @param {Object} props.rest - Additional props to be spread on the component.
 * @return {JSX.Element} The rendered action component.
 */
function SaveAddAction(props) {
  const { input, setInput, isEditing, handleAdd, handleSave, style, ...rest } =
    props;
  return (
    <div style={style} {...rest}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {isEditing ? (
        <button onClick={() => handleSave()}>Save</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
    </div>
  );
}

export default SaveAddAction;
