import { motion } from "framer-motion";

document.title = "Griff Coyote";
const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#79322a] min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-col-1 sm:grid-cols-2 gap-12 mx-20 items-center justify-center">
          <div>
            <img
              src="/fursuit/griffhednew1.png"
              alt="Griff Coyote"
              className="sm:scale-50 scale-100"
              loading="lazy"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Hey its Griff :3</h1> 
            <br />
            <p className="text-lg">This is the about page.</p>
          </div>
          <img
            src="/fursuit/griffhednew1.png"
            alt="Griff Coyote"
            className="scale-50"
          />
          <img
            src="/fursuit/griffhednew1.png"
            alt="Griff Coyote"
            className="scale-50"
          />
          <img
            src="/fursuit/griffhednew1.png"
            alt="Griff Coyote"
            className="scale-50"
          />
          <img
            src="/fursuit/griffhednew1.png"
            alt="Griff Coyote"
            className="scale-50"
          />
          <img
            src="/fursuit/griffhednew1.png"
            alt="Griff Coyote"
            className="scale-50"
          />
        </div>
      </motion.div>
    </div>
  );
};
export default About;
