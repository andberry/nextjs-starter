'use client'; // Error boundaries must be Client Components

import { Button } from '@/ui/components/base/Button';
import { Copy } from '@/ui/components/Typography/Copy/Copy';
import { H1 } from '@/ui/components/Typography/Headings/Headings';
import { Container } from '@components/helpers/Container';
import { ServerCrash } from 'lucide-react';
import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="flex min-h-[75vh] items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <H1>Error</H1>
          <ServerCrash size={36} />
          <Copy
            className="mt-20"
            size="large"
          >
            Unexpected error
          </Copy>
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            label="Try Again"
            variant="outline"
          />
        </div>
      </div>
    </Container>
  );
};

export default Error;
