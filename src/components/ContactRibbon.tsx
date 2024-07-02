import {
  BsChatSquareFill,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTelephoneFill,
  BsTwitter,
} from "react-icons/bs";
import Container from "./Container";

const ContactRibbon = () => {
  return (
    <div className="bg-slate-800 py-2 text-white text-xs z-[1001] fixed w-full">
      <Container className="flex justify-between items-center">
        <div className="flex gap-x-4 lg:gap-x-8">
          <p className="flex gap-x-2 lg:gap-x-4 items-center cursor-pointer">
            <BsTelephoneFill />
            <span>(414)867 - 0107</span>
          </p>
          <p className="flex gap-x-2 lg:gap-x-4 items-center cursor-pointer">
            <BsChatSquareFill />
            <span>yummy@bistrobliss</span>
          </p>
        </div>
        <div className="flex gap-x-1 lg:gap-x-2">
          <BsFacebook className="cursor-pointer" />
          <BsTwitter className="cursor-pointer" />
          <BsInstagram className="cursor-pointer" />
          <BsGithub className="cursor-pointer" />
        </div>
      </Container>
    </div>
  );
};

export default ContactRibbon;
