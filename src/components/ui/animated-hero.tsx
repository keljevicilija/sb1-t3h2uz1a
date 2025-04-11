import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["KVALITETNI", "PROFESIONALNI", "JEDNOSTAVNI"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col mt-20">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold mb-8">
              <span className="shimmer-gold">GRANTURISMO7</span>
            </h1>
            <div className="relative flex w-full justify-center overflow-hidden text-center h-24 mb-8">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute text-white text-4xl tracking-[0.15em] font-bold"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </div>
            <p className="text-sm md:text-base leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center">
              Dobrodošli u GRANTURISMO7, vašeg pouzdanog partnera za vrhunsku brigu o vozilima. 
              Naš tim iskusnih tehničara posvećen je pružanju izuzetnih usluga održavanja i popravke, 
              osiguravajući da vaše vozilo ostane u savršenom stanju.
            </p>
          </div>
          <div className="flex flex-row gap-2 mt-6">
            <a 
              href="tel:0628362882" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 sm:px-4 py-2 gap-1.5"
            >
              <span>Pozovite nas! 062-836-28-82</span> <PhoneCall className="w-3 h-3" />
            </a>
            <Button 
              size="sm" 
              className="gap-1.5 bg-gold text-black hover:bg-gold/90 h-8 px-3 sm:px-4 text-xs sm:text-sm"
            >
              Zakažite servis <MoveRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };