import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category/Category';
import Pages from './pages/Pages';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
