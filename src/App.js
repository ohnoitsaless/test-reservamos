import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import WeatherList from './routes/weatherList';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<WeatherList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
