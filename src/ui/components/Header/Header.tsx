import { Container } from '@components/helpers/Container';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoIosRocket } from 'react-icons/io';
export const Header = () => {
  return (
    <header className="font-urbanist bg-black py-4 text-lg font-normal tracking-wider text-white uppercase">
      <Container size="3xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <IoIosRocket />
            Berry Next.js Starter
          </div>
          <div className="flex items-center gap-12">
            <div>Nav Here</div>
            <div className="flex gap-4">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
