import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { HomePage } from '@/pages/home';

import { ErrorFallback } from '@/components/ErrorFallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
