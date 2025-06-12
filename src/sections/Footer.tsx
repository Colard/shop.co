import { Link } from "react-router-dom";
import FacebookIcon from "../assets/icons/FacebookIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import LetterIcon from "../assets/icons/LetterIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import Button from "../components/Button";
import Container from "../components/Container";
import Logo from "../components/Logo";

import Badge1 from "../assets/images/paymentMethods/Visa.svg";
import Badge2 from "../assets/images/paymentMethods/Mastercard.svg";
import Badge3 from "../assets/images/paymentMethods/Paypal.svg";
import Badge4 from "../assets/images/paymentMethods/A Pay.svg";
import Badge5 from "../assets/images/paymentMethods/G Pay.svg";
import React from "react";

let Footer: React.FC = () => {
  return (
    <footer className="bg-secondary w-full pb-20">
      <FooterForm />
      <Container className="mt-8 lg:mt-12">
        <div className="justify-between lg:flex">
          <div>
            <Logo />
            <p className="text-primary/60 mt-3 text-[0.875rem] lg:mt-6 lg:max-w-62">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <nav className="mt-5 flex gap-3 lg:mt-9">
              <a href="https://x.com/" target="_blank">
                <TwitterIcon></TwitterIcon>
              </a>
              <a href="https://facebook.com/" target="_blank">
                <FacebookIcon></FacebookIcon>
              </a>
              <a href="https://instagram.com/" target="_blank">
                <InstagramIcon></InstagramIcon>
              </a>
              <a href="https://github.com/" target="_blank">
                <GithubIcon></GithubIcon>
              </a>
            </nav>
          </div>

          <div className="mt-6 grid grid-cols-[repeat(auto-fill,_minmax(150px,20%))] justify-between gap-6 lg:contents">
            <nav>
              <h3 className="mb-4 font-medium tracking-[3px] lg:mb-6">
                COMPANY
              </h3>
              <div className="flex flex-col leading-[2.5]">
                <FooterLink to="#">About</FooterLink>
                <FooterLink to="#">Features</FooterLink>
                <FooterLink to="#">Works</FooterLink>
                <FooterLink to="#">Career</FooterLink>
              </div>
            </nav>
            <nav>
              <h3 className="mb-4 font-medium tracking-[3px] lg:mb-6">HELP</h3>
              <div className="flex flex-col leading-[2.5]">
                <FooterLink to="#">Customer Support</FooterLink>
                <FooterLink to="#">Delivery Details</FooterLink>
                <FooterLink to="#">Terms & Conditions</FooterLink>
                <FooterLink to="#">Privacy Policy</FooterLink>
              </div>
            </nav>
            <nav>
              <h3 className="mb-4 font-medium tracking-[3px] lg:mb-6">FAQ</h3>
              <div className="flex flex-col leading-[2.5]">
                <FooterLink to="#">Account</FooterLink>
                <FooterLink to="#">Manage Deliveries</FooterLink>
                <FooterLink to="#">Orders</FooterLink>
                <FooterLink to="#">Payment</FooterLink>
              </div>
            </nav>
            <nav>
              <h3 className="mb-4 font-medium tracking-[3px] lg:mb-6">
                RESOURCES
              </h3>
              <div className="flex flex-col leading-[2.5]">
                <FooterLink to="#">Free eBook</FooterLink>
                <FooterLink to="#">Development Tutorial</FooterLink>
                <FooterLink to="#">How to - Blog</FooterLink>
                <FooterLink to="#">Youtube Playlist</FooterLink>
              </div>
            </nav>
          </div>
        </div>

        <hr className="border-primary/10 mt-10 mb-4 lg:mt-12 lg:mb-6" />
        <div className="justify-between lg:flex">
          <p className="text-primary/60 mb-4 text-center lg:m-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="m-auto grid max-w-70 grid-flow-col place-items-center items-center gap-2.5 lg:m-0">
            <img
              src={Badge1}
              alt="Mastercard"
              className="bg-bg-color size-full rounded-sm px-1 py-1"
            />
            <img
              src={Badge2}
              alt="Visa"
              className="bg-bg-color size-full rounded-sm px-1 py-1"
            />
            <img
              src={Badge3}
              alt="PayPal"
              className="bg-bg-color size-full rounded-sm px-1 py-1"
            />
            <img
              src={Badge4}
              alt="Apple Pay"
              className="bg-bg-color size-full rounded-sm px-1 py-1"
            />
            <img
              src={Badge5}
              alt="Google Pay"
              className="bg-bg-color size-full rounded-sm px-1 py-1"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

interface FooterLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

let FooterLink: React.FC<FooterLinkProps> = ({
  to = "#",
  children,
  ...rest
}) => {
  return (
    <Link
      to={to}
      className="text-primary/60 hover:text-primary active:text-primary transition-all duration-300"
      {...rest}
    >
      {children}
    </Link>
  );
};

let FooterForm: React.FC = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,var(--color-bg-color)_50%,var(--color-secondary)_50%)]">
      <Container>
        <div className="bg-primary flex flex-col flex-wrap items-center justify-between gap-8 rounded-[1.25rem] px-6 py-8 md:px-16 md:py-9 lg:flex-row lg:gap-5">
          <h2 className="font-integralcf text-bg-color max-w-max flex-1 shrink-1 self-start text-2xl lg:max-w-140 lg:basis-80">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form className="flex w-full max-w-88 shrink-0 flex-col gap-3 md:gap-3.5">
            <div className="bg-bg-color text-primary/40 flex h-10 items-center overflow-clip rounded-full px-4 text-base md:h-12">
              <LetterIcon className="size-footer-letter-icon mr-3" />
              <input
                placeholder="Enter your email address"
                className="text-primary grow-1 outline-none"
                type="email"
              ></input>
            </div>
            <Button className="bg-bg-color inset-shadow-primary h-10 font-medium md:h-12">
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
