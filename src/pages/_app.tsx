import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout/Layout';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components/error/Error.fallback';
import '@/styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import NextNProgress from "nextjs-progressbar";
import { colors, initialTheme } from "@/components/constants/colors";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      throwOnError: (error) => {
        if (error.cause === 503) return true;
        return false;
      },
    },
    mutations: {
      throwOnError: (error) => {
        if (error.cause === 503) return true;
        return false;    
      }
    }
  }
});

export default function App(props: AppProps) {
  const {
    Component,
    pageProps,
  } = props;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <Layout>
            <NextNProgress 
              showOnShallow={false}
              options={{ showSpinner: false }}
              color={colors.primary[initialTheme]}
            />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
