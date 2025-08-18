import { motion } from "framer-motion";
import {Link} from "@heroui/link";
import { Card, CardHeader, CardBody } from "@heroui/card";


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
  
          <div className="text-lg text-white">
            <Card className="bg-[#580411] text-white p-6">
            <CardHeader className="text-5xl text-white font-bold">About Me</CardHeader>
            <br />
            
            <CardBody className="text-xl text-white">
              Hi! I’m Griff, a coyote fursuiter and software engineer based in
              Worcester, MA. I love coding, rock climbing and meeting new people!
              This website is a collection of my projects, commissioned art, and other
              interests. Feel free to explore and learn more about me!
            </CardBody>  
            </Card>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center items-center mt-10'>
              
                <img 
                  src="/fursuit/img_6016.jpg"
                  alt="Griff Coyote"
                  className="md:scale-75 mt-10"
                ></img>
                <img 
                  src="/fursuit/img_5849.jpg"
                  alt="Griff Coyote"
                  className="md:scale-75 mt-10"
                  ></img>
                  <img 
                  src="/fursuit/img_5860.jpg"
                  alt="Griff Coyote" 
                  className="md:scale-75 mt-10"
                  ></img>
                  </div>
        </div>
      </motion.div>
    </div>
  );
};
export default About;
