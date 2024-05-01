import './App.css';
import { io } from 'socket.io-client';
import {useEffect} from "react";

const roomId = "ABCDEFG"

const socket = io("http://localhost:8090", {
  autoConnect: false,
  query: `roomId=${roomId}`
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
