import Button from "./Button";

export default function TabItem({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="  flex flex-col pt-[5rem] md:flex-row gap-10 gap-y-[7rem] gap-x-[3rem] ">
      <div className=" flex-1 relative ">
        <img className=" relative z-20 " src={image} alt="tab" />
        <div className=" absolute right-1/4 -bottom-20 h-3/4 bg-primary -left-[1400px] rounded-full " />
      </div>
      <div className=" flex-1 flex flex-col gap-7 items-center md:items-start ">
        <h2 className=" text-xl font-semibold ">{title}</h2>
        <p className=" max-w-[50ch] md:text-start ">{description}</p>
        <Button text="More Info" />
      </div>
    </div>
  );
}
