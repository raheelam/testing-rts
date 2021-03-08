import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react';
import reducers from '../../../reducers';

import Board from '../Board';

const renderWithRedux = (
    component,
    { store = createStore(reducers) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }

describe('Board renders correctly', ()=>{
    test('<Board />', () => {
        renderWithRedux(<Board />);
        expect(screen.getByTitle('board')).toBeInTheDocument();
      });
});

