
import Accordion from "./accordion";


export default function FAQ() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-[3rem] max-md:p-4 mt-[3rem]">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-[4rem] tracking-tighter max-md:text-[2rem] max-md:text-center font-[600] max-md:leading-10 ">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 max-md:text-center">
            Here are some answers for some questions that are frequently asked
            by you
          </p>
        </div>

        <div className="flex flex-col gap-[1rem] w-[60%] max-md:w-full">
          <Accordion
            title="What services does your agency offer?"
            text="We offer a full range of web development services, including custom website design, front-end and back-end development, e-commerce solutions, SEO optimization, website maintenance, and hosting support. We also specialize in integrating third-party tools, APIs, and security solutions."
          />
          <Accordion
            title="Do you specialize in any type of website"
            text="While we have experience working with all types of websites, Our team understands the specific needs of websites and ensures that your websites align with best practices and user expectations."
          />
          <Accordion
            title="Can you show examples of websites you've built?"
            text="Absolutely! You can check out our portfolio to see some of the projects we've worked on. We can also provide case studies that highlight how we've helped businesses achieve their online goals.
    
    "
          />
          <Accordion
            title="What makes your agency different from others?"
            text="We prioritize custom solutions tailored to each client’s needs rather than a one-size-fits-all approach. Our team ensures scalability, performance, and SEO best practices while maintaining open communication throughout the project. Plus, we provide post-launch support to keep your website running smoothly."
          />
        </div>
      </section>
    </>
  );
}
