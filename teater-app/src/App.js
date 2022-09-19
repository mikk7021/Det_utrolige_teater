
import { Home } from './components/pages/Home';
import { AppRouter } from './components/routing/Routing';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <AppRouter>
          <Home />
        </AppRouter>
    </BrowserRouter>
  );
}

export default App;