import { motion } from "framer-motion";
import {Link} from "@heroui/link";


document.title = "Griff Coyote";
const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#79322a] min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-20 items-center justify-center">
          <div>
            <img
              src="/fursuit/griffhednew1.png"
              alt="Griff Coyote"
              className="md:scale-75"
            />
          </div>
          <div className="text-center items-center">
            <h1 className="text-5xl font-bold">Griff Coyote</h1> 
            <br />
            <Link
                isExternal
                href="https://www.instagram.com/griffyote/"
                >
                <img 
                    src="/instagram.svg"
                    alt="Instagram"
                    className="filter invert inline w-8 h-8 mr-2"
                />
            </Link>

            <Link
                isExternal
                href="https://t.me/Griffyote"
                >
                <img 
                    src="/telegram.svg"
                    alt="Telegram"
                    className="filter invert inline w-8 h-8 mr-2"
                />
            </Link>
            <Link
                isExternal
                href="https://x.com/griffyote"
                >
                <img
                    src="/x.svg"
                    alt="X"
                    className="filter invert inline w-8 h-8 mr-2"
                />
            </Link>
          </div>    
        </div>
      </motion.div>
    </div>
  );
};
export default About;
