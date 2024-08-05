import { list } from "@/constants/data";

export default function DesktopList() {
  return (
    <ul className=" hidden md:flex items-center gap-7 text-foreground uppercase ">
      {list.map((item) => (
        <li
          className=" cursor-pointer hover:text-destructive duration-300 ease-in-out "
          key={item}
        >
          <a href={`#${item}`} className=" block w-full h-full ">
            {item}
          </a>
        </li>
      ))}
      <li className=" bg-destructive text-background px-4 cursor-pointer rounded-md py-1 hover:bg-background hover:text-destructive border border-destructive duration-300 ease-in-out ">
        login
      </li>
    </ul>
  );
}
