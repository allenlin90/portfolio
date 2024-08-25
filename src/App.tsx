import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Routes as Paths } from '@/constants/routes';

import { HomePage } from '@/pages/home';
import { ImageSliderPage } from '@/pages/image-slider';

import { ErrorFallback } from '@/components/ErrorFallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={Paths.UI}>
          <Route path={Paths.ImageSlider} element={<ImageSliderPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
