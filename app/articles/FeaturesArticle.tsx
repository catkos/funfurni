"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const features: string[] = [
  "Vestibulum a ligula ultricies, posuere purus",
  "Fusce malesuada ipsum sed lectus sagittis imperdiet",
  "Proin vestibulum lorem eget nisi scelerisque ultricies",
  "Ut non nunc ut velit ultricies commodo non et mauris",
];

const FeaturesArticle: React.FC = () => {
  return (
    <div className="flex h-[40cqw] w-[60cqw] items-center justify-center gap-8 p-10">
      <div className="w-1/2 flex justify-center order-last">
        <Image
          src="/table.png"
          alt=""
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <ul className="list-none list-inside gap-3 grid grid-cols-2">
          {features.map((feature, index) => (
            <motion.li
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              key={index}
              className="bg-green text-black flex justify-center items-start p-5 rounded"
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesArticle;
