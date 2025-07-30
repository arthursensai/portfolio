import { memo } from "react";
import Typewriter from "typewriter-effect";

const DynamicTitle = memo(() => {
  return (
    <Typewriter
      options={{
        loop: true,
        delay: 60,
        deleteSpeed: 40,
        cursor: "|",
        autoStart: true,
        wrapperClassName: "text-blue-300",
        cursorClassName: "text-blue-500",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Mohamed")
          .pauseFor(1500)
          .deleteAll()
          .typeString("a Full-Stack Developer")
          .pauseFor(2000)
          .deleteAll()
          .typeString("a Chess Player ♟️")
          .pauseFor(1800)
          .deleteAll()
          .typeString("an AI Learner 🤖")
          .pauseFor(1800)
          .deleteAll()
          .typeString("a Dreamer 🚀")
          .pauseFor(2000)
          .start();
      }}
    />
  );
});

export default DynamicTitle;