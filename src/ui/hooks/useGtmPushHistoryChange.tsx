// TODO: check this hook works correctly with App Router
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type IRouteChangeProps = (
  /* eslint-disable no-unused-vars */
  url: string,
  { shallow }: { shallow: boolean }
) => void;

export const useGtmPushHistoryChange = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteComplete: IRouteChangeProps = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);
};
