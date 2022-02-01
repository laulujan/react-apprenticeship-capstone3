import Router from './components/Router/Router';
import AuthProvider from './Provider/Auth/Provider';
import NotesProvider from './Provider/Notes/Provider';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <Router />
      </NotesProvider>
    </AuthProvider>
  );
}

export default App;
