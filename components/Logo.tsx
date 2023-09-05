import Image from "next/image";
import logoImage from "../assets/webpImages/LOGO.webp";

const Logo = () => {
  return (
    <div className="logo-container">
      <Image src={logoImage} alt="Green Roots logo" priority={true} />
    </div>
  );
};

export default Logo;
