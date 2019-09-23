import * as React from 'react';

export const MiniAppContext = React.createContext({});

const App = ({ children }) => {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Learning Javascript', completed: true },
    { id: 2, text: 'Learning ES2016', completed: true },
    { id: 3, text: 'Learning Remax', completed: false },
  ]);

  return (
    <MiniAppContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </MiniAppContext.Provider>
  );
};

export default App;