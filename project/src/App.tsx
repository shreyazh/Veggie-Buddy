import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LayoutDesignerPage from './pages/LayoutDesignerPage';
import PlantInfoPage from './pages/PlantInfoPage';
import GardeningTipsPage from './pages/GardeningTipsPage';
import CommunityPage from './pages/CommunityPage';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="layout-designer" element={<LayoutDesignerPage />} />
            <Route path="plants" element={<PlantInfoPage />} />
            <Route path="tips" element={<GardeningTipsPage />} />
            <Route path="community" element={<CommunityPage />} />
          </Route>
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;