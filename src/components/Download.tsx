import { BrowserData } from "@/constants/data";
import Button from "./Button";

export default function Download() {
  return (
    <section
      id="pricing"
      className="container py-[3rem] md:py-[7rem] flex flex-col items-center gap-5 text-center"
    >
      <h2 className="text-2xl font-semibold ">{BrowserData.title}</h2>
      <p className=" max-w-[50ch] ">{BrowserData.description}</p>
      <div className=" flex flex-col gap-[3rem] items-center md:flex-row md:items-start py-10 ">
        {BrowserData.browser.map((item, idx) => (
          <div
            key={item.name}
            className={` flex flex-col items-center gap-4 shadow-md p-4 rounded-lg ${
              idx === 1
                ? "md:translate-y-10"
                : idx === 2
                ? "md:translate-y-20"
                : ""
            }`}
          >
            <div className=" flex flex-col items-center ">
              <img src={item.image} alt={item.name} />
              <h3 className=" mt-5 text-lg font-semibold tracking-wide ">
                {item.name}
              </h3>
              <p>{item.minimumVersion}</p>
            </div>
            <div className=" border-t-2 border-dotted pt-4 border-foreground-muted/60">
              <Button text={item.btnText} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
