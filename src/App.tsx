import './App.css';
import { MainContent } from './components/MainContent';
import { SideBarContainer } from './components/Side/SideBarContainer';
import { Spacer } from './components/Spacer';

function App() {
  return (
    <div className="App flex justify-center">
        <SideBarContainer/>
        <MainContent/>
        <Spacer/>
    </div>
  );
}

export default App;
