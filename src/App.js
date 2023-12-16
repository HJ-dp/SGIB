import Test from './pages/board/Test';
import Board from './pages/board/Board';
import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/globalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <div className="App">
          {/* <Header /> */}
          <div className='main'>
            <Routes>
              <Route className='mains' path="/" element={<Board />} />
              <Route className='mains' path="/test" element={<Test />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
