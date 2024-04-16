import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainContent } from './components/MainContent';
import { SideBarContainer } from './components/Menu/Side/SideBarContainer';
import { Spacer } from './components/Spacer';
import { UserIdContextProvider } from './context/UserIdContext';
import { Header } from './components/Menu/Header/Header';

function App() {

  return (
    <div className="App flex flex-col md:flex-row md:justify-center h-screen bg-cyan-50">
      <BrowserRouter>
        <UserIdContextProvider>
          <SideBarContainer/>
          <Header/>
          <MainContent/>
          <Spacer/>
        </UserIdContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
