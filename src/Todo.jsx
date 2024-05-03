import React, { useState } from 'react';

function Todo(props) {
  const [click, setClick] = useState(false);

  const handleRemoveClick = () => {
    // Pass the id prop to the onchecked function
    props.onchecked(props.id);
  };

  return (
    <div>
      <li
      key={props.id}
        onClick={handleRemoveClick}
        style={{
          margin: '10px',
          height: '30px',
          marginBottom: '10px',
          textDecoration: click ? 'line-through' : 'none'
        }}
      >
        {props.item}
      </li>
    </div>
  );
}

export default Todo;
