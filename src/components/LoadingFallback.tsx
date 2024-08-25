import { Spinner } from '@/components/ui/spinner';

export const LoadingFallback: React.FC = () => {
  return (
    <div className='w-full h-dvh flex justify-center items-center'>
      <Spinner />
    </div>
  );
};
