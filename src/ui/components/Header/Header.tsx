import { Container } from '@components/helpers/Container';
import { Rocket } from 'lucide-react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
export const Header = () => {
  return (
    <header className="font-urbanist bg-black py-4 text-lg font-normal tracking-wider text-white uppercase">
      <Container size="3xl">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Rocket />
            Berry Next.js Starter
          </div>
          <div className="flex gap-12">
            <div>Nav Here</div>
            <div className="flex gap-2">
              <Twitter strokeWidth={1} />
              <Facebook strokeWidth={1} />
              <Instagram strokeWidth={1} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
