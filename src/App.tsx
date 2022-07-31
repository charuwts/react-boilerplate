import {createRoot} from 'react-dom/client'
import Component from './Component';

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container);
  root.render(<Component />);
}