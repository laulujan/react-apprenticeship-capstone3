import Router from './components/Router/Router';
import AuthProvider from './Provider/Auth/Provider';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
