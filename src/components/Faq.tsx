import { faqsData } from "@/constants/data";
import QuestionItem from "./QuestionItem";
import Button from "./Button";

export default function Faq() {
  return (
    <section
      id="pricing"
      className="container py-[3rem] md:py-[7rem] flex flex-col items-center gap-5 text-center"
    >
      <h2 className="text-2xl font-semibold ">{faqsData.title}</h2>
      <p className=" max-w-[50ch] ">{faqsData.description}</p>
      <div className=" flex flex-col  py-10 text-start max-w-[400px] mx-auto ">
        {faqsData.questions.map((item, index) => (
          <QuestionItem key={item.question} {...item} position={index + 1} />
        ))}
        <div className=" flex items-center justify-center mt-6 ">
          <Button text="More Info" />
        </div>
      </div>
    </section>
  );
}
