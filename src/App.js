import Regist from './pages/board/Regist';
import Board from './pages/board/Board';
import MainPage from './pages/Mainpage';
import NotFound from './pages/NotFound';
import AppLayout from './components/AppLayout';
import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/globalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <AppLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/board/:category" element={<Board boardList={'team'}/>} />
            <Route path="/hrboard" element={<Board boardList={'hr'}/>} />
            <Route path="/login" element={<Board />} />
            <Route path="/regist" element={<Regist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
