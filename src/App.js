import SignUpPage from './components/signPage';
import './App.css';
import WelcomePage from './components/welcomePage';
import SideBar from './components/sideBar'
import DashBoard from './components/dashBoard'



function App() {
  return (
    <div className="App">
      <SideBar/>
      <DashBoard/>
      {/*<SignUpPage/>*/}
      {/*<WelcomePage/>*/}
    </div>
  );
}

export default App;
