import { useEffect, useState } from "react";

const titles = [
  "Mohamed",
  "a Full-Stack Developer",
  "a Chess Player",
  "an AI Learner",
  "a Dreamer",
];

const DynamicTitle = () => {
  const [text, setText] = useState(titles[0]);

  useEffect(() => {
    let titleIndex = 0;
    let timeout;

    const cycle = () => {
      titleIndex = (titleIndex + 1) % titles.length;
      setText(titles[titleIndex]);

      timeout = setTimeout(cycle, 2500);
    };

    timeout = setTimeout(cycle, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return <span>{text}</span>;
};

export default DynamicTitle;
