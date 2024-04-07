import './App.css';
import { MainContent } from './components/MainContent';
import { SideBarContainer } from './components/Side/SideBarContainer';
import { Spacer } from './components/Spacer';
import { MainContentSelectorProvider } from './context/MainContentSelectorContext';
import { NoteViewContextProvider } from './context/NoteViewContext';

function App() {

  return (
    <div className="App flex justify-center">
      <MainContentSelectorProvider>
        <NoteViewContextProvider>
          <SideBarContainer/>
          <MainContent/>
          <Spacer/>
        </NoteViewContextProvider>
      </MainContentSelectorProvider>
    </div>
  );
}

export default App;
