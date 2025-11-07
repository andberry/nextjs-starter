import { Container } from '@components/helpers/Container';
export const Header = () => {
  return (
    <header className="font-urbanist text-secondary bg-black py-4 text-lg font-normal tracking-wider uppercase">
      <Container size="3xl">
        <div className="flex justify-between">
          <div>Header Left</div>
          <div>Header Right</div>
        </div>
      </Container>
    </header>
  );
};
