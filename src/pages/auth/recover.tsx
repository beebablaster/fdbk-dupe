import React from 'react';
import { RecoverPage } from '@/components/Auth/recover/RecoverPage';
import { ErrorFallback } from '@/components/error/Error.fallback';
import { RecoverHead } from '@/components/heads/recoverHead';
import { ErrorBoundary } from 'react-error-boundary';

export default function Recover() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecoverHead />
      <RecoverPage />
    </ErrorBoundary>
  )
}

