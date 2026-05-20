"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ targetValue, suffix = "", duration = 1200 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeProgress = percentage * (2 - percentage); // easeOutQuad
            setCount(Math.floor(easeProgress * targetValue));

            if (percentage < 1) {
              animationFrameRef.current = requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(0); // Reset when exiting viewport
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function MetricsSection() {
  const metrics = [
    {
      target: 30,
      suffix: "%",
      label: "Lower power consumption",
    },
    {
      target: 500,
      suffix: "+",
      label: "Mills powered with Choyal tech",
    },
    {
      target: 15,
      suffix: "+",
      label: "Years building milling solutions",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 relative z-10 section-bg-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center p-2 sm:p-4"
            >
              <div className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient-accent mb-2 sm:mb-3">
                <AnimatedCounter targetValue={metric.target} suffix={metric.suffix} />
              </div>
              <p className="text-slate-600 text-[9px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mt-1 leading-normal max-w-[120px] sm:max-w-none">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
