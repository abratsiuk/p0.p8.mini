import React, { useEffect } from 'react';

// Вложенный дочерний компонент
const SubChildWithEffect = () => {
  useEffect(() => {
    console.log('SubChildWithEffect - useEffect вызван');

    return () => {
      console.log('SubChildWithEffect - cleanup вызван');
    };
  }, []);

  return (
    <div>
      <h3>SubChildWithEffect</h3>
    </div>
  );
};

// Средний компонент
const ChildWithEffect = () => {
  useEffect(() => {
    console.log('ChildWithEffect - useEffect вызван');

    return () => {
      console.log('ChildWithEffect - cleanup вызван');
    };
  }, []);

  return (
    <div>
      <h2>ChildWithEffect</h2>
      <SubChildWithEffect />
    </div>
  );
};

// Родительский компонент
export const AppWithEffect = () => {
  useEffect(() => {
    console.log('AppWithEffect - useEffect вызван');

    return () => {
      console.log('AppWithEffect - cleanup вызван');
    };
  }, []);

  return (
    <div>
      <h1>AppWithEffect</h1>
      <ChildWithEffect />
    </div>
  );
};

export const Test = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} checked={checked} />{' '}
        mount
      </label>
      <div>{checked ? 'true' : 'false'}</div>
      {checked && <AppWithEffect />}
    </div>
  );
};
