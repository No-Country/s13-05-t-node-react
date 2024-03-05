import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./components/AppContent";
import { store } from "./redux/store";
import { Provider } from "react-redux";
/**Se importa el store desde ./redux/store para proporcionar el estado de Redux a la aplicación.
 * Se importa Provider de react-redux para envolver la aplicación y proporcionar el contexto de Redux a todos los componentes.
 */

function App() {
  return (
    <div className="App flex grow flex-col">
      <Provider store={store}>
        <Router>
          <AppContent />
        </Router>
      </Provider>
    </div>
  );
}
/**Utiliza el componente Provider de react-redux para envolver la aplicación y proporcionar el contexto de Redux a todos los componentes. Sin esta configuración redux no funcionaría. */

export default App;
