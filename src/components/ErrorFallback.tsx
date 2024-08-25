import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FallbackProps } from 'react-error-boundary';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Routes } from '@/constants/routes';
import { buttonVariants } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface ErrorFallbackProps
  extends FallbackProps,
    VariantProps<typeof buttonVariants>,
    React.HTMLAttributes<HTMLAnchorElement> {}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  variant,
  size,
  className,
  ...props
}) => {
  const { t } = useTranslation();
  const onClick = useCallback(() => resetErrorBoundary(), [resetErrorBoundary]);

  return (
    <div className='w-full h-dvh flex flex-col justify-center items-center'>
      <div>{error.message}</div>
      <Link
        to={Routes.Home}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {t('fallback.backToHome')}
      </Link>
    </div>
  );
};

ErrorFallback.displayName = 'Fallback';
