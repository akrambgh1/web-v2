import Navbar from "@/components/Navbar"
export default function Contact() {
  return (
    <>
    <section className="h-screen w-full flex ">
    <Navbar></Navbar>
    <div className="w-[50%] h-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/rounded-corner-amde-with-light-on-black-background-5.png)] bg-center bg-cover bg-no-repeat">

    </div>

    <div className="w-[50%] h-full flex flex-col justify-center gap-8 px-16">
        <h1 className="text-[2rem] tracking-tighter text-center">Have more questions or want to work with us , leave us a message!</h1>
        <input type="text" className="border-b-[1px] border-[#d6d6d6] text-[1.35rem] px-1 py-4 tracking-tighter outline-none" placeholder="Name"/>
        <input type="text" className="border-b-[1px] border-[#d6d6d6] text-[1.35rem] px-1 py-4 tracking-tighter outline-none" placeholder="Email@gmail.com"/>
        <textarea className="border-b-[1px] border-[#d6d6d6] text-[1.35rem] px-1 py-4 tracking-tighter outline-none" placeholder="Your Message" rows={5}></textarea>
    </div>
    </section>
    </>
  )
}
