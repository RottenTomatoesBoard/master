import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div>
    <App />
    <Search />
    </div>, div);
  ReactDOM.unmountComponentAtNode(div);
});
