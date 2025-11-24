"use client";
import Image from "next/image";

const WelcomeArticle: React.FC = () => {
  return (
    <div className="flex h-full w-[60cqw] items-center justify-center gap-8 p-10">
      <div className="w-1/2 flex justify-center">
        <Image
          src="/interior.png"
          alt=""
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <h2 className="text-3xl font-bold">
          Aliquam ut eros eget purus interdum tincidunt.
        </h2>
        <p className="">
          Morbi suscipit ultricies ipsum quis cursus. Morbi id rhoncus velit,
          vestibulum condimentum ante. Fusce consequat lorem in turpis dictum
          tempor!
        </p>
      </div>
    </div>
  );
};

export default WelcomeArticle;
