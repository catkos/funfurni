"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesArticle = () => {
  return (
    <div className="flex h-screen w-[60cqw] items-center justify-center gap-8 p-10">
      <div className="w-1/2 flex justify-center">
        <Image
          src="/plastic-chair.png"
          alt="Picture of a rainbow plastic chair."
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 flex flex-col gap-10">
        <h2 className="text-3xl font-bold">second</h2>
        <p>
          Morbi suscipit ultricies ipsum quis cursus. Morbi id rhoncus velit,
          vestibulum condimentum ante. Fusce consequat lorem in turpis dictum
          tempor. Donec rutrum sem quis dolor ullamcorper pellentesque. Nulla
          egestas venenatis placerat!
        </p>
      </div>
    </div>
  );
};

export default FeaturesArticle;
