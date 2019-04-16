import { suite, test } from '@testdeck/jest';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

@suite
class AppTests {

  @test
  'renders without crashing'() {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  }
}

