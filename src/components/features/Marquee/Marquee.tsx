"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && marqueeRef.current) {
      // Simple marquee implementation
      const marquee = marqueeRef.current;
      const text = marquee.textContent || "";

      // Create duplicate content for seamless loop
      marquee.innerHTML = `<div class="js-marquee-wrapper" style="display: inline-block; white-space: nowrap; animation: marquee 30s linear infinite;">${text}</div>`;
    }
  }, []);

  return (
    <section className="marquee w-full bg-black py-2 overflow-hidden">
      <p
        ref={marqueeRef}
        className="marquee-text text-white whitespace-nowrap font-bold"
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        有問題隨時找我們～加LINE私訊客服，即時為您解答！
      </p>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee-text {
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
