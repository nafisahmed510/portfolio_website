import React from 'react';

// The face sits at the mouth of a recess: concentric rings stepping inward and
// darkening, with an inset shadow falling across the portrait's edge so the
// light reads as coming from outside the opening. All monochrome — the depth
// comes from value, not colour.
export function AvatarCave() {
  return (
    <div className="relative mx-auto aspect-square w-[clamp(240px,30vw,380px)]">
      {/* faint spill of light around the opening */}
      <div className="absolute inset-0 rounded-full bg-white/[0.06] blur-3xl" />

      {/* outermost wall */}
      <div
        className="absolute inset-0 rounded-full bg-[#0d0d0d]"
        style={{ boxShadow: 'inset 0 2px 30px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05)' }}
      />
      {/* stepping inward, each ring a little darker */}
      <div
        className="absolute inset-[5%] rounded-full bg-[#0a0a0a]"
        style={{ boxShadow: 'inset 0 4px 26px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.04)' }}
      />
      <div
        className="absolute inset-[10%] rounded-full bg-[#070707]"
        style={{ boxShadow: 'inset 0 6px 24px rgba(0,0,0,1), 0 0 0 1px rgba(255,255,255,0.03)' }}
      />

      {/* the opening itself */}
      <div className="absolute inset-[15%] rounded-full overflow-hidden bg-[#111]">
        <img
          src="/avatar.png"
          alt="Illustrated portrait of Nafis Ahmed waving"
          className="h-full w-full object-cover scale-[1.06]"
        />
        {/* shadow cast by the rim across the portrait */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{ boxShadow: 'inset 0 0 40px 14px rgba(0,0,0,0.75)' }}
        />
      </div>

      {/* thin highlight on the rim, top-left, so the opening reads as cut in */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0) 42%)',
          WebkitMaskImage:
            'radial-gradient(circle, transparent 62%, black 63%, black 100%)',
          maskImage:
            'radial-gradient(circle, transparent 62%, black 63%, black 100%)',
        }}
      />
    </div>
  );
}
