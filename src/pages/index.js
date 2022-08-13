import Navbar from "../components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <video
          src={"/videos/Lounge.mp4"}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          className="w-full hidden md:block absolute z-10"
          loop
        >
          <source
            alt="clouds"
            type="video/mp4"
          />
        </video>
        <img src={"/images/lounge.gif"} alt="lounge" className="md:hidden absolute z-0" />
        <div className="absolute md:top-24 top-[250px] left-0 right-0 z-10 mx-auto">
          <div className="font-yellowtail text-lounge-gold text-center xl:text-[140px] lg:text-[100px] xs:text-[65px] text-[40px]">
            JetGetter Club
          </div>
        </div>
        <div className="absolute z-20 top-[340px] left-0 right-0 md:hidden">
          <div className="flex items-center justify-center">
            {/* twitter */}
            <div className="rounded-lg mx-2">
              <a href="https://twitter.com/jetgetterclub">
                <Image src={"/images/twitter.png"} width={50} height={50} alt="" />
              </a>
            </div>
            {/* discord */}
            <div className="rounded-lg mx-2">
              <a href="https://discord.gg/jetgetterclub">
                <Image src={"/images/discord.png"} width={50} height={50} alt="" />
              </a>
            </div>
            {/* magic eden */}
            <div className="rounded-lg mx-2 p-3">
              <a href="https://magiceden.io/marketplace/jetgetter">
                <Image src={"/images/magiceden.png"} width={45} height={45} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
