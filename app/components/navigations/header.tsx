import Image from "next/image";
import style from "./styles.module.scss";
import { ArrowRight, BondHiveLogo, TGLogo, TwitterLogo } from "../assets";
import { GridLight, GridLightMobile, LightRay } from "../assets/bg";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full pt-7 relative">
      <div className="-z-10]">
        <Image
          src={GridLight}
          width={1152}
          height={380}
          alt="bondhive"
          className="absolute -top-20 max-md:-top-7 left-1/2 transform -translate-x-1/2 max-md:hidden"
        />
        <Image
          src={GridLightMobile}
          width={1152}
          height={380}
          alt="bondhive"
          className="absolute max-md:block  top-0 left-1/2 transform -translate-x-1/2 hidden mobile_grid -z-10"
        />
        <Image
          src={LightRay}
          width={1152}
          height={800}
          alt="bondhive"
          className="absolute top-0 right-[220px] max-md:right-[0px] flex justify-center left-1/2 transform -translate-x-1/2 -z-10"
        />
      </div>
      <div className={`${style.header} md:max-lg:w-11/12 md:w-9/12 w-11/12 h-[64px] flex justify-between items-center px-6 max-md:px-4 z-99 `}>
      <Link href={"/"}>
      <div className="logo flex items-center">
          <Image src={BondHiveLogo} width={29} height={29} alt="bondhive" />
          <p className="text-md font-semibold text-white">Bondhive</p>
        </div>
      </Link>
        <div className="max-md:hidden">
          <ul className="flex justify-between gap-7">
            <Link href={"/#howitworks"}> <li>How it works</li></Link>
            <Link href={"/#historicalyields"}> <li>Historical Yields</li></Link>
            <Link href={"/#ourproducts"}> <li>Our products</li></Link>
            <Link href={"/#features"}>  <li>Features</li></Link>
            <Link href={"/faq"}>  <li>FAQs</li></Link>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-5 max-md:gap-2">
          <Link href={""} target="_blank"> <p className="max-md:hidden">WhitePaper</p></Link> 
          <Link href={"/app"} target="_blank">
            <button
              className={` ${style.button} inline-flex items-center px-[16px] py-[5px] gap-3`}
            >
              <div className="">Launch dApp</div>
              <Image src={ArrowRight} width={13} height={13} alt="bondhive" />
            </button>
          </Link>
          <Link href={"/app"}>
          <div className="each-socials w-[40px] h-[40px] max-md:w-[33px] max-md:h-[33px] hidden max-md:flex">
            <Image src={TGLogo} width={18} height={18} alt="bondhive" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
