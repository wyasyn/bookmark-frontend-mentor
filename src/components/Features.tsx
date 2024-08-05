import TabSystem from "./TabSystem";

export default function Features() {
  return (
    <section
      id="features"
      className=" flex flex-col items-center gap-5 text-center container py-[3rem] "
    >
      <h2 className="text-2xl font-semibold">Features</h2>
      <p className=" max-w-[50ch] ">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <TabSystem />
    </section>
  );
}
