import { lazy, Suspense } from 'react';

import { LoadingFallback } from '@/components/LoadingFallback';

const ImageSlider = lazy(() => import('@/image-slider/image-slider'));

export const ImageSliderPage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ImageSlider />
    </Suspense>
  );
};
