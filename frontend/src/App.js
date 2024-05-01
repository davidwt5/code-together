import './App.css';
import { io } from 'socket.io-client';
import {useEffect} from "react";

const socket = io("http://localhost:8090", {
  autoConnect: false
});

function App() {
  useEffect(() => {
    socket.connect();
  }, []);

  return (
      <div></div>
  );
}

export default App;
