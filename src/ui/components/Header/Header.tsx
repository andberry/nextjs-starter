import { Container } from '@components/helpers/Container';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoIosRocket } from 'react-icons/io';
import { IconLink } from '../base/IconLink';
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
              <IconLink
                Icon={FaFacebook}
                url="https://www.facebook.com"
                target="_blank"
              />
              <IconLink
                Icon={FaInstagram}
                url="https://www.instagram.com"
                target="_blank"
              />
              <IconLink
                Icon={FaTwitter}
                url="https://www.x.com"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
