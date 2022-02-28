import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
