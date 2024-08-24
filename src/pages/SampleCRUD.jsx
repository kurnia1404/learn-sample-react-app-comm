import { useState } from 'react';
import List from '../components/List';
import SaveAddAction from '../components/SaveAddAction';

function SampleCRUD() {
  const [list, setList] = useState([
    {
      text: 'Sample',
      key: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingKey, setEditingKey] = useState(null);

  const handleDelete = (key) => {
    setList(list.filter((item) => item.key !== key));
  };

  const handleSave = () => {
    setIsEditing(false);
    setList((prev) =>
      prev.map((item) =>
        item.key === editingKey ? { key: editingKey, text: input } : item
      )
    );
    setInput('');
  };

  const handleEdit = (item, key) => {
    setIsEditing(true);
    setInput(item.text);
    setEditingKey(key);
  };

  const handleAdd = () => {
    setList([...list, { text: input, key: new Date() }]);
    setInput('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        width: '500px'
      }}
    >
      <List handleDelete={handleDelete} handleEdit={handleEdit} list={list} />
      <SaveAddAction
        style={{ marginTop: '20px' }}
        handleAdd={handleAdd}
        handleSave={handleSave}
        input={input}
        setInput={setInput}
        isEditing={isEditing}
      />
    </div>
  );
}

export default SampleCRUD;
