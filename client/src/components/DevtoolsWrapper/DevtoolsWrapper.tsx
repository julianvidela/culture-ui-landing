'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const DevtoolsWrapper = () => {
  return <ReactQueryDevtools initialIsOpen={false} />;
};
