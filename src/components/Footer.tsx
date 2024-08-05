import { list } from "@/constants/data";

import Logo from "./logo";

import EmailForm from "./Form";
import { Facebook, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact">
      <div className=" bg-primary text-background ">
        <div className="container flex flex-col gap-6 py-16 items-center">
          <p className=" tracking-[5px] uppercase font-light ">
            35,000+ already joined
          </p>
          <h3 className=" text-background text-2xl max-w-[20ch] text-center font-medium ">
            Stay up-to-date with what we're doing
          </h3>
          <EmailForm />
        </div>
      </div>
      <div className=" bg-foreground text-background ">
        <div className="container flex flex-col gap-7 items-center py-7 md:flex-row justify-between">
          <Logo footer />
          <ul className=" flex items-center flex-col gap-7 uppercase  md:flex-row">
            {list.map((item) => (
              <li
                className=" cursor-pointer hover:text-destructive duration-300 ease-in-out text-foreground-muted text-xs "
                key={item}
              >
                <a href={`#${item}`} className="block w-full h-full">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ul className=" flex gap-3 items-center justify-center md:justify-end md:ml-auto ">
            <li className=" cursor-pointer hover:text-destructive duration-300 ease-in-out">
              <Facebook
                className=" fill-white hover:fill-destructive duration-300 ease-in-out "
                size={18}
              />
            </li>
            <li className=" cursor-pointer hover:text-destructive duration-300 ease-in-out ">
              <TwitterIcon
                className=" fill-white hover:fill-destructive duration-300 ease-in-out "
                size={18}
              />
            </li>
          </ul>
        </div>
        <div className="container">
          <p className="text-xs tracking-wide py-4 border-t border-foreground-muted/50">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="referrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://ywalum.com"
              className=" text-primary hover:underline "
            >
              Yasin Walum
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
