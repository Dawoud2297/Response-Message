import { ToastContainer } from 'react-toastify';
import './App.css';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <Messages />
      <ToastContainer />
    </div>
  );
}

export default App;
