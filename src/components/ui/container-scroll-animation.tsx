"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className={`relative p-2 md:p-10 ${isMobile ? "h-auto py-12" : "h-[68rem] flex items-center justify-center"}`}
      ref={containerRef}
    >
      <div
        className="w-full relative py-8 md:py-32"
        style={{
          perspective: isMobile ? "none" : "1000px",
        }}
      >
        <Header translate={isMobile ? 0 : translate} titleComponent={titleComponent} />
        <Card 
          rotate={isMobile ? 0 : rotate} 
          translate={isMobile ? 0 : translate} 
          scale={isMobile ? 1 : scale}
          isMobile={isMobile}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number> | number;
  scale: MotionValue<number> | number;
  translate: MotionValue<number> | number;
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: isMobile
          ? "none"
          : "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`max-w-5xl mx-auto w-full border-4 border-[#6C6C6C]/20 p-2 md:p-6 bg-[#030712]/50 backdrop-blur-xl rounded-[30px] shadow-2xl overflow-hidden ${isMobile ? "h-auto" : "-mt-12 h-[30rem] md:h-[40rem]"}`}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
