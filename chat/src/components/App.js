import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList'
import AddMessage from '../containers/AddMessage';

const App = () => (
  <div className="App">
    <VisibleMessageList />
    <AddMessage />
  </div>
)

export default App;
