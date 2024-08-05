import { list } from "@/constants/data";
import { useData } from "@/context/toogle";

export default function NavList() {
  const { open, toggleMenu } = useData();
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      {open && (
        <ul className=" md:hidden fixed top-16 left-0 bottom-0 bg-foreground/90 w-full flex flex-col h-full px-4 text-lg text-background uppercase py-4 backdrop-blur-sm z-30  ">
          {list.map((item, index) => (
            <li key={item} onClick={toggleMenu}>
              <div
                className={`border-b cursor-pointer py-5 border-foreground-muted/50 ${
                  index === 0 && "border-t "
                }`}
              >
                {item}
              </div>
            </li>
          ))}
          <li onClick={toggleMenu}>
            <button className=" flex items-center border-2 w-full border-background text-center justify-center py-2 rounded-lg mt-8 ">
              login
            </button>
          </li>
          <li className=" flex items-center gap-5 py-20 justify-center mt-auto ">
            <a href="/">
              <span className="sr-only">facebook</span>
              <img src="/images/icon-facebook.svg" alt="" />
            </a>
            <a href="/">
              <span className="sr-only">twitter</span>
              <img src="/images/icon-twitter.svg" alt="" />
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
