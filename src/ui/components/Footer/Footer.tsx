import { Container } from '@components/helpers/Container';
export const Footer = () => {
  return (
    <header className="font-urbanist bg-secondary py-2 text-sm font-medium tracking-wider text-black uppercase">
      <Container>
        <div className="flex justify-between">
          <div>Footer Left</div>
          <div>Footer Right</div>
        </div>
      </Container>
    </header>
  );
};
