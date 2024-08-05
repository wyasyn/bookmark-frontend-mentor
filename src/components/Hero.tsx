import Button from "./Button";

export default function Hero() {
  return (
    <section className=" container flex flex-col md:flex-row-reverse gap-7 py-[3rem] md:py-[7rem] text-center md:text-start ">
      <div className=" flex-1 relative ">
        <img
          className=" relative z-20 "
          src="/images/illustration-hero.svg"
          alt=""
        />
        <div className=" absolute left-1/4 bottom-0 h-3/4 bg-primary -right-[1400px] rounded-full " />
      </div>
      <div className=" flex-1 flex flex-col items-center md:items-start justify-center ">
        <h1 className=" text-3xl lg:text-5xl font-semibold capitalize max-w-[20ch] ">
          A simple bookmark manager
        </h1>
        <p className=" max-w-[50ch] my-6 text-pretty ">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className=" flex flex-col sm:flex-row items-center gap-5 ">
          <Button text="Get it on Chrome" />
          <Button text="Get it on firefox" secondary />
        </div>
      </div>
    </section>
  );
}
