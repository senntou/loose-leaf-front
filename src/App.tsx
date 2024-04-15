import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainContent } from './components/MainContent';
import { SideBarContainer } from './components/Side/SideBarContainer';
import { Spacer } from './components/Spacer';
import { UserIdContextProvider } from './context/UserIdContext';

function App() {

  return (
    <div className="App flex justify-center bg-cyan-50">
      <BrowserRouter>
        <UserIdContextProvider>
          <SideBarContainer/>
          <MainContent/>
          <Spacer/>
        </UserIdContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
