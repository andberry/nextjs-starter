import { Container } from '@/ui/components/helpers/Container/Container';
import { H1, H2, H3 } from '@/ui/components/Typography/Headings/Headings';
import { Copy } from '@/ui/components/Typography/Copy/Copy';

const Page = () => {
  return (
    <div className="py-12">
      <Container size="lg">
        <H1>This is Heading One</H1>
        <H2>This is Heading Two</H2>
        <H3>This is Heading Three</H3>
      </Container>
      <Container size="lg">
        <Copy size="small">
          Copy Small Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, possimus! Accusamus, alias atque deleniti sit explicabo omnis
          ratione distinctio esse, necessitatibus natus repellendus odit,
          tempore cupiditate. Consequuntur dignissimos mollitia a.
        </Copy>
        <Copy size="medium">
          Copy Medium Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, possimus! Accusamus, alias atque deleniti sit explicabo omnis
          ratione distinctio esse, necessitatibus natus repellendus odit,
          tempore cupiditate. Consequuntur dignissimos mollitia a.
        </Copy>
        <Copy size="large">
          Copy Large Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur quibusdam rerum incidunt distinctio perspiciatis vero
          aperiam repudiandae reprehenderit molestiae libero dolorem amet
          laboriosam ratione nihil ipsa, mollitia officia tempore vitae?
        </Copy>
      </Container>
    </div>
  );
};

export default Page;
