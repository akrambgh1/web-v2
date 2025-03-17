export default function Footer() {
  return (
    <section className="fixed w-full bottom-0 h-[70dvh] max-md:h-[100vh] flex flex-col gap-[8rem] p-[1rem] items-center justify-center bg-[#fafafa] max-md:p-0">
      <div className="w-[50%] h-full flex flex-col gap-8 items-center justify-center max-2xl:w-[70%] max-lg:w-[90%]">
        <div className="w-full h-auto py-8 flex items-center justify-between rounded-[15px] max-md:p-0 max-md:flex-col max-md:gap-4">
          <h1 className="font-[500] text-[2rem] tracking-tighter text-black max-lg:text-[1.25rem] max-md:text-[1.25rem] max-md:uppercase">
            EXCITED? US TOO. Let’s get moving.
          </h1>
          <button className="bg-[#c0dbff] text-black font-[500] py-2 px-8 rounded-[5px] max-md:p-2 max-md:w-[80%] max-md:hidden">
            Contact us
          </button>
        </div>
        <div className="flex gap-4 w-[100%] max-md:grid max-md:grid-cols-2 max-md:gap-4">
          <div className="flex-1 h-[15vh] bg-[#c0dbff] rounded-[10px] flex items-center justify-center">
            <img src="/instagram.png" />
          </div>
          <div className="flex-1 h-[15vh] bg-[#c0dbff] rounded-[10px] flex items-center justify-center">
            <img src="/twitter.png" />
          </div>
          <div className="flex-1 h-[15vh] bg-[#c0dbff] rounded-[10px] flex items-center justify-center">
            <img src="/linkedin.png" />
          </div>
          <div className="flex-1 h-[15vh] bg-[#c0dbff] rounded-[10px] flex items-center justify-center">
            <img src="/dribble.png" />
          </div>
        </div>

        <div className="w-full flex gap-4 rounded-[15px] max-md:flex-col">
          <div className="w-[40%] max-md:w-full max-md:h-[40vh] h-[20vh] bg-[#2163f1] rounded-[10px] flex items-center justify-center p-8">
            <img src="/Weblocators2.png" />
          </div>
          <div className="w-[60%] h-[20vh] rounded-[15px] px-5 relative flex flex-col justify-evenly max-md:w-full max-md:h-auto max-md:p-0">
            <div className="grid grid-cols-2 gap-4 list-none w-[40%] pt-2 max-md:flex max-md:w-full max-md:justify-between max-md:p-0">
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </div>

            {/* <h1 className="">© 2025 Weblocators</h1> */}
          </div>
        </div>
      </div>
    </section>
  );
}
