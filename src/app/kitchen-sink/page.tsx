import { Container } from '@/ui/components/helpers/Container';
import { H1, H2, H3 } from '@/ui/components/Typography/Headings/Headings';
import { Copy } from '@/ui/components/Typography/Copy/Copy';
import { Anchor } from '@/ui/components/base/Anchor';
import { Button } from '@/ui/components/base/Button';

const Page = () => {
  return (
    <div>
      <section
        className="my-36 px-12"
        id="ks-colors"
      >
        <H2>Colors</H2>
        <Container size="xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="flex aspect-square items-center justify-center bg-black text-sm text-white uppercase">
              Black
            </div>
            <div className="flex aspect-square items-center justify-center border border-black bg-white text-sm uppercase">
              White
            </div>
            <div className="bg-primary flex aspect-square items-center justify-center text-sm uppercase">
              Primary
            </div>
          </div>
        </Container>
      </section>
      <section
        className="my-36 px-12"
        id="ks-containers"
      >
        <H2>Containers</H2>
        <Container
          size="sm"
          className="my-20"
        >
          <H3>sm</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
        <Container
          size="md"
          className="my-20"
        >
          <H3>md</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
        <Container
          size="lg"
          className="my-20"
        >
          <H3>lg</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
        <Container
          size="xl"
          className="my-20"
        >
          <H3>xl</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
        <Container
          size="2xl"
          className="my-20"
        >
          <H3>2xl</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
        <Container
          size="3xl"
          className="my-20"
        >
          <H3>3xl</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
        <Container
          size="fluid"
          className="my-20"
        >
          <H3>fluid</H3>
          <Copy>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            soluta, corporis consequuntur quis unde quidem ipsum tempore itaque
            repellat nam veritatis quos omnis alias. Consequuntur et omnis
            labore est error.
          </Copy>
        </Container>
      </section>
      <section
        className="my-36 px-12"
        id="ks-typography"
      >
        <H2>Typography</H2>
        <Container size="lg">
          <H1>This is Heading One</H1>
          <H2>This is Heading Two</H2>
          <H3>This is Heading Three</H3>
          <Copy size="small">
            Copy Small Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, possimus! Accusamus, alias atque deleniti sit explicabo
            omnis ratione distinctio esse, necessitatibus natus repellendus
            odit, tempore cupiditate. Consequuntur dignissimos mollitia a.
          </Copy>
          <Copy size="medium">
            Copy Medium Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, possimus! Accusamus, alias atque deleniti sit explicabo
            omnis ratione distinctio esse, necessitatibus natus repellendus
            odit, tempore cupiditate. Consequuntur dignissimos mollitia a.
          </Copy>
          <Copy size="large">
            Copy Large Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur quibusdam rerum incidunt distinctio perspiciatis vero
            aperiam repudiandae reprehenderit molestiae libero dolorem amet
            laboriosam ratione nihil ipsa, mollitia officia tempore vitae?
          </Copy>
        </Container>
      </section>
      <section
        className="my-36 px-12"
        id="ks-base"
      >
        <H2>Base</H2>
        <H3>Anchor</H3>
        <Container size="lg">
          <Anchor href="https://www.spotagency.ch/">Anchor</Anchor>
        </Container>
        <H3>Buttons</H3>
        <Container size="lg">
          <div className="flex gap-4">
            <Button
              href="https://www.spotagency.ch/"
              label="Primary Button"
              variant="primary"
            />
            <Button
              href="https://www.spotagency.ch/"
              label="Black Button"
              variant="black"
            />
            <Button
              href="https://www.spotagency.ch/"
              label="Outline Button"
              variant="outline"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
