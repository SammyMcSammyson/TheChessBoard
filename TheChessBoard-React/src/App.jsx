import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import FrontPage from './Components/FrontPage';
import HowIBecameMe from './Components/HowIBecameMe';
import ThroughMyLens from './Components/ThroughMyLens';
import Snowboarding from './Components/Snowboarding';
import Chess from './Components/Chess';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<FrontPage />} />
            <Route path='HowIBecameMe' element={<HowIBecameMe />} />
            <Route path='ThroughMyLens' element={<ThroughMyLens />} />
            <Route path='Snowboarding' element={<Snowboarding />} />
            <Route path='Chess' element={<Chess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
