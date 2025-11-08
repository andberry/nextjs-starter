import { Container } from '@components/helpers/Container';
export const Footer = () => {
  return (
    <header className="font-urbanist border-gray border-t py-4 text-sm font-medium tracking-wider text-black uppercase">
      <Container size="3xl">
        <div className="flex justify-between">
          <div>Footer Left</div>
          <div>Footer Right</div>
        </div>
      </Container>
    </header>
  );
};
