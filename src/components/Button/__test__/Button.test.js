import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react';
import reducers from '../../../reducers';
import Button from '../Button';



const renderWithRedux = (
    component,
    { store = createStore(reducers) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }
  
describe('<Button /> renders correctly', ()=>{
    test('<Button boxId={1} boxValue={"X"} />', () => {
        renderWithRedux(<Button boxId={1} boxValue={"X"} />);
      
        const button = screen.getByTitle(/box1/i);
        const btnValue = button.innerHTML;
      
        expect(button).toBeInTheDocument();
        expect(btnValue).toBe("X");
      });
      
    test('<Button boxId={2} boxValue={"Y"} />', () => {
        renderWithRedux(<Button boxId={2} boxValue={"Y"} />);
      
        const button = screen.getByTitle(/box2/i);
        const btnValue = button.innerHTML;
      
        expect(button).toBeInTheDocument();
        expect(btnValue).toBe("Y");
      });

      test('<Button boxId={1} boxValue={""}', () => {
        renderWithRedux(<Button boxId={1} boxValue={""} />);
      
        const button = screen.getByTitle(/box1/i)
        const btnValue = button.innerHTML;
      
        expect(button).toBeInTheDocument();
        expect(btnValue).toBe("");
      });

});

