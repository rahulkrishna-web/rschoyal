"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageCarousel() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    "/images/plants/03.webp",
    "/images/plants/1.webp",
    "/images/plants/12.webp",
    "/images/plants/13.webp",
    "/images/plants/150_ton_per_day_atta_plant.webp",
    "/images/plants/2_1.webp",
    "/images/plants/2.webp",
    "/images/plants/20_40_60_tpd_plabnt_png.webp",
    "/images/plants/20_40_60_tpd_plants.webp",
    "/images/plants/2021_06_29_10_02_img_8244.webp",
    "/images/plants/20221110_124220.webp",
    "/images/plants/20221110_131216.webp",
    "/images/plants/20221110_131332.webp",
    "/images/plants/20230601_125933.webp",
    "/images/plants/20230601_125938.webp",
    "/images/plants/20230601_130111.webp",
    "/images/plants/20230601_130134.webp",
    "/images/plants/20230601_130138.webp",
    "/images/plants/20230601_130152.webp",
    "/images/plants/20230601_130715.webp",
    "/images/plants/20230601_130721.webp",
    "/images/plants/20230601_130740.webp",
    "/images/plants/20230601_130750.webp",
    "/images/plants/4.webp",
    "/images/plants/40_tpd_milling_1.webp",
    "/images/plants/40_tpd_milling.webp",
    "/images/plants/9.webp",
    "/images/plants/banka_and_banka_foods_16.webp",
    "/images/plants/banka_and_banka_foods_18.webp",
    "/images/plants/banka_and_banka_foods_20.webp",
    "/images/plants/dsc_4263.webp",
    "/images/plants/dsc_4268.webp",
    "/images/plants/dsc_4282.webp",
    "/images/plants/gopr0653.webp",
    "/images/plants/img_20250124_wa0014.webp",
    "/images/plants/img20250123074554.webp",
    "/images/plants/img20250124093755.webp",
    "/images/plants/img20250307113249.webp",
    "/images/plants/img20250307114137.webp",
    "/images/plants/img20250307114308.webp",
    "/images/plants/img20250307114323.webp",
    "/images/plants/img20250307163649.webp",
    "/images/plants/img_20230103_080937.webp",
    "/images/plants/img_20230103_080959.webp",
    "/images/plants/img_20230103_081113.webp",
    "/images/plants/img_20230111_110331.webp",
    "/images/plants/img_20230113_141847.webp",
    "/images/plants/img_20231227_171111.webp",
    "/images/plants/img_20250820_123621648.webp",
    "/images/plants/img_9478.webp",
    "/images/plants/tablet_controlled_plant_1.webp",
    "/images/plants/tablet_controlled_plant.webp",
    "/images/plants/turnkey_solutions.webp",
    "/images/plants/vd_rice_mill_9.webp",
    "/images/plants/whatsapp_image_2023_01_03_at_2_02_49_pm.webp",
    "/images/plants/whatsapp_image_2023_01_03_at_2_02_52_pm.webp",
    "/images/plants/dubai_plant.webp",
    "/images/plants/edit_1.webp",
    "/images/plants/edit.webp",
    "/images/plants/pmark_plant.webp",
    "/images/plants/samayshri_agro_1.webp",
    "/images/plants/samayshri_agro_2.webp",
    "/images/plants/samayshri_agro_3.webp",
    "/images/plants/samayshri_agro_4.webp",
    "/images/plants/samayshri_agro_5.webp",
    "/images/plants/samayshri_agro_6.webp",
    "/images/plants/samayshri_agro_7.webp",
    "/images/plants/samayshri_agro_8.webp",
    "/images/plants/sg_foods_1.webp",
    "/images/plants/sg_foods_2.webp",
    "/images/plants/sg_foods_3.webp",
    "/images/plants/sg_foods_4.webp",
    "/images/plants/srivari_1.webp",
    "/images/plants/srivari_2.webp",
    "/images/plants/srivari_3.webp",
    "/images/plants/srivari_4.webp",
    "/images/plants/srivari_5.webp",
    "/images/plants/srivari_6.webp"
  ];

  // We triple the list to implement seamless infinite scroll
  const tripledImages = [...images, ...images, ...images];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);
  const dragDistance = useRef(0);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  }, [selectedIdx, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  }, [selectedIdx, images.length]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation for popup modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext, handleClose]);

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  // Start scroll in the middle (first duplicate set) on mount
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const handleInitialScroll = () => {
        const singleSetWidth = container.scrollWidth / 3;
        container.scrollLeft = singleSetWidth;
      };
      handleInitialScroll();
      const timer = setTimeout(handleInitialScroll, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Autoplay effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isDown.current && !isHovered && !isDragging && selectedIdx === null) {
        container.scrollLeft += 0.8; // Slow scroll speed

        // Seamless wrap check
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, selectedIdx]);

  // Scroll wrapping check for manual/automatic actions
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;
    
    // Wrap around points
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft <= singleSetWidth) {
      container.scrollLeft += singleSetWidth;
    }
  };

  // Dragging event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDown.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftVal.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const container = scrollRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX.current;
    dragDistance.current = Math.abs(walk);
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    container.scrollLeft = scrollLeftVal.current - walk * 1.5;
  };

  const handleMouseUp = (idx: number) => {
    isDown.current = false;
    if (!isDragging && dragDistance.current < 8) {
      setSelectedIdx(idx % images.length); // Open popup
    }
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  // Touch/swipe event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDown.current = true;
    dragDistance.current = 0;
    startX.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeftVal.current = container.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown.current) return;
    const container = scrollRef.current;
    if (!container) return;

    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = x - startX.current;
    dragDistance.current = Math.abs(walk);

    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }

    container.scrollLeft = scrollLeftVal.current - walk * 1.5;
  };

  const handleTouchEnd = (idx: number) => {
    isDown.current = false;
    if (!isDragging && dragDistance.current < 8) {
      setSelectedIdx(idx % images.length); // Open popup
    }
    setIsDragging(false);
  };

  // Arrow navigation for slider
  const slidePrev = () => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.querySelector(".carousel-item")?.clientWidth || 300;
    container.scrollTo({
      left: container.scrollLeft - itemWidth - 16, // item width + gap
      behavior: "smooth",
    });
  };

  const slideNext = () => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.querySelector(".carousel-item")?.clientWidth || 300;
    container.scrollTo({
      left: container.scrollLeft + itemWidth + 16, // item width + gap
      behavior: "smooth",
    });
  };

  return (
    <section 
      className={`w-full py-6 relative overflow-hidden border-y border-[#1c2722]/5 section-bg-secondary group/carousel ${selectedIdx !== null ? "z-[9999]" : "z-10"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
    >
      {/* Inline styles to completely hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[20%] w-[35%] aspect-square bg-brand-primary/3 rounded-full blur-[100px] pointer-events-none select-none"></div>

      <div className="w-full relative z-10">
        
        {/* Left Slider Arrow Button */}
        <button
          onClick={slidePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/75 hover:bg-white text-slate-800 shadow-md border border-[#1c2722]/10 transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 md:opacity-0 md:group-hover/carousel:opacity-100"
          aria-label="Slide left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Slider Arrow Button */}
        <button
          onClick={slideNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/75 hover:bg-white text-slate-800 shadow-md border border-[#1c2722]/10 transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 md:opacity-0 md:group-hover/carousel:opacity-100"
          aria-label="Slide right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Scroll Container (Slider Track) */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp(0)} // Fallback
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)} // Fallback
          className="w-full overflow-x-auto flex gap-4 relative mask-gradient py-2 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {tripledImages.map((src, idx) => (
            <div
              key={`tripled-${idx}`}
              onMouseUp={(e) => {
                e.stopPropagation();
                handleMouseUp(idx);
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                handleTouchEnd(idx);
              }}
              className="carousel-item w-[calc(100vw-32px)] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] aspect-[4/3] relative flex-shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#1c2722]/8 bg-slate-900/5 transition-all duration-300 pointer-events-auto"
            >
              <Image
                src={src}
                alt="Wonder Mill Installation"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105 pointer-events-none"
                priority={idx >= images.length && idx < images.length + 4} // prioritize first 4 visible images on initial load
              />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Popup Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#1c2722]/90 backdrop-blur-md animate-fade-in"
          onClick={handleClose}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 animate-scale-in flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media Container */}
            <div className="relative w-full h-full bg-black/40 flex items-center justify-center">
              <Image
                src={images[selectedIdx]}
                alt="Wonder Mill Installation High Resolution"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain p-2"
                priority
              />

              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
