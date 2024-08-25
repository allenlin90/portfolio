import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Routes as Paths } from '@/constants/routes';

import { HomePage } from '@/pages/home';
import { ErrorFallback } from '@/components/ErrorFallback';
import { LoadingFallback } from '@/components/LoadingFallback';

const ImageSliderPage = lazy(() => import('@/pages/image-slider/image-slider'));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={Paths.UI}>
          <Route
            path={Paths.ImageSlider}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ImageSliderPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
