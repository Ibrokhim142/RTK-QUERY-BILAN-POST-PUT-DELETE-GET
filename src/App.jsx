import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CarList from './components/CarList/CarList';
import CarForm from './components/CarForm/CarForm';
import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='h1'>Car Management</h1>
        <CarForm />
        <CarList />
      </div>
    </Provider>
  );
};

export default App;
