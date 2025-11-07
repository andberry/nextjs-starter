import { Button } from '@/ui/components/base/Button';
import { Copy } from '@/ui/components/Typography/Copy/Copy';
import { H1 } from '@/ui/components/Typography/Headings/Headings';
import { Container } from '@components/helpers/Container';
import { ServerCrash } from 'lucide-react';

const NotFound = () => {
  return (
    <Container>
      <div className="flex min-h-[75vh] items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <H1>404 Error</H1>
          <ServerCrash size={36} />
          <Copy
            className="mt-20"
            size="large"
          >
            Page Not Found
          </Copy>
          <Button
            href="/"
            label="Back To Home"
            variant="outline"
          />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
