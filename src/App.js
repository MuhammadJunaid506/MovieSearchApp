import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import MyRouter from "./config/routes"
import UserContainer from "./config/context/user/UserContainer"

function App() {
  return (
    <div className="App">
      <UserContainer>
        <MyRouter />
      </UserContainer>
    </div>
  );
}

export default App;
