import React, { useEffect, useState } from "react";

export default function PineTrees({
  // --- General forest layout ---
  treeCount = 16,
  treeHeight = 250,     // base height (px) at the CENTER
  treeBaseWidth = 250,  // base width (px) at the CENTER
  sizeJitter = 0.12,    // 0..0.3 gentle, stable size variation
  spacingFactor = 0.98,  // >1 spreads trees horizontally
  offsetXPercent = -0., // shift whole forest left/right (% of viewport)
  baseYOffset = -100,      // raise/lower the forest baseline (px)

  treeHSpeed = 0.3,     // outward split speed (left trees go left, right go right)
  treeVSpeed = 0.3,     // vertical parallax (visual lift/bob with scroll)
  deadzonePx = 0,       // calm center band (px) where split slows down
  minSideFactor = 0.25, // min split speed inside deadzone (0..1)

  edgeBoost = 1.2,     // how much taller edges are vs center (0.0 = off, 0.2–0.6 typical)
  edgeCurve = 1.0,      // growth curve; >1 = flatter mid, faster growth near edges

  treeSpriteUrl = "/images/pinetree2.png",
}) {
  const [scrollY, setScrollY] = useState(0);
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const trees = Array.from({ length: treeCount }, () => treeSpriteUrl);

  return (
    <div style={{ height: treeHeight, width: "100%" }}>
      {trees.map((src, i) => {

        const rawCenterX =
          (vw / (trees.length + 1)) * (i + 1) * spacingFactor + vw * offsetXPercent;


        const margin = Math.min(60, vw * 0.05);
        const centerX = Math.max(margin, Math.min(vw - margin, rawCenterX));
        const left = `${centerX}px`;


        const distFromCenter = Math.abs(centerX - vw / 2);
        const normalized = Math.min(1, distFromCenter / (vw / 2));       // 0 (center) → 1 (edges)
        const edgeScale = 1 + edgeBoost * Math.pow(normalized, edgeCurve); // scale multiplier

      
        const seed = ((i * 9301 + 49297) % 233280) / 233280 - 0.5;        // -0.5..0.5
        const jitterScale = 1 + seed * 2 * sizeJitter;

     
        const tH = Math.round(treeHeight * jitterScale * edgeScale);
        const tW = Math.round(treeBaseWidth * jitterScale * edgeScale);

        // ----- Split direction & deadzone scaling -----
        const dir = Math.sign(centerX - vw / 2) || 0; // -1 left, +1 right
        const inside = distFromCenter < deadzonePx;
        const deadzoneScale = inside
          ? Math.max(minSideFactor, distFromCenter / deadzonePx)
          : 1;

        
        const xSplit = dir * scrollY * treeHSpeed * (1 + i * 0.05) * deadzoneScale;
        const yParallax = scrollY * treeVSpeed * (1 + i * 0.05);

       
        const transform = `translateX(calc(-50% + ${xSplit}px)) translateY(${yParallax}px)`;

        const isFront = i % 3 === 0;
        const zIndex = isFront ? 20 + i : 5 + i;
        const opacity = isFront ? 1.0 : 1.0;

        return (
          <img
            key={i}
            src={src}
            alt={`tree-${i}`}
            style={{
              height: `${tH}px`,
              width: `${tW}px`,
              objectFit: "contain",
              position: "fixed",
              bottom: baseYOffset, 
              left,                
              transform,          
              zIndex,
              opacity,
              pointerEvents: "none",
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}
