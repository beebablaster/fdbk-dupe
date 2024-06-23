import React from 'react';
import { ShellLayout } from '@/components/Layout/ShellLayout';
import { MessageSentPage } from '@/components/Auth/messageSent/MessageSentPage';
import { LanguageTabs } from '@/components/Auth/LanguageTabs';
import { MessageSentHead } from '@/components/Auth/messageSent/MessageSentHead';
import { AuthLayout } from '@/components/Layout/AuthLayout';
import { ErrorFallback } from '@/components/error/Error.fallback';
import { ErrorBoundary } from 'react-error-boundary';

export default function Test() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ShellLayout>
      <MessageSentHead />
        <AuthLayout image="messageSent">
          <div className="mt-auto" />
          <MessageSentPage />
          <div className="mb-4" />
          <div className="mt-auto flex items-center justify-center">
            <LanguageTabs />
          </div>
        </AuthLayout>
        <div className="h-svh w-full bg-primary"></div>
        <div className="h-svh w-full bg-secondary"></div>
      </ShellLayout>
    </ErrorBoundary>
  )
}
