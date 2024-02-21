import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';
import { store } from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className='App flex grow flex-col'>
      <Provider store={store}>
        <Router>
          <AppContent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;