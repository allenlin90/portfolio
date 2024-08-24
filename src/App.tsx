import { Routes, Route } from 'react-router-dom';

import { Routes as Paths } from '@/constants/routes';

import { HomePage } from '@/pages/home';
import { ImageSliderPage } from '@/pages/image-slider';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={Paths.UI}>
        <Route path={Paths.ImageSlider} element={<ImageSliderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
