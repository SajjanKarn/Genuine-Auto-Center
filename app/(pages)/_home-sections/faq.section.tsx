import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of auto services, including engine repair, brake service, oil changes, and more.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling us at (555) 555-5555 or by using our online form.",
  },
  {
    question: "Do you offer towing services?",
    answer:
      "Yes, we offer towing services. Please call us for more information.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center mt-4 text-lg">
        Here are some common questions we receive from our customers.
      </p>
      <div className="p-7 max-w-screen-lg mx-auto mt-8">
        {/* Add more FAQ items */}
        {faqs.map((faq) => (
          <Accordion key={faq.question} type="single" collapsible>
            <AccordionItem value={faq.question}>
              <AccordionTrigger className="text-xl md:text-2xl font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
export default FAQSection;
