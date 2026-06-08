import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 Page Not Found | Shaheen Lock Master"
        description="The page you are looking for does not exist or has been locked. Return to Shaheen Lock Master home for auto locksmith services in Islamabad and Rawalpindi."
      />

      <div className="min-h-[90vh] w-full flex flex-col items-center justify-center relative z-10 px-4">
        <div className="flex flex-col items-center justify-center text-center select-none max-w-lg w-full">
          
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.05)] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            404 Error &bull; Access Locked
          </motion.div>

          {/* CENTERPIECE "4 [LOCK] 4" */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-full">
            {/* Left "4" */}
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              4
            </motion.span>

            {/* Center SVG Lock */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
              {/* Background Soft Glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
              
              <svg
                className="w-full h-full drop-shadow-[0_12px_24px_rgba(249,115,22,0.15)]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gold/Orange Gradient */}
                  <linearGradient id="goldGrad" x1="0" y1="120" x2="200" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                  
                  {/* Shackle Metal Gradient */}
                  <linearGradient id="shackleGrad" x1="70" y1="20" x2="130" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="50%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>

                  {/* Lock Body Gradient */}
                  <linearGradient id="bodyGrad" x1="45" y1="75" x2="155" y2="165" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>

                  {/* Orbit Rings Gradient */}
                  <linearGradient id="orbitGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#eab308" stopOpacity="0.1" />
                  </linearGradient>

                  {/* Keyhole Backlight Glow */}
                  <radialGradient id="keyholeGlow" cx="100" cy="116" r="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fec007" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>

                  {/* Flash Wave Glow */}
                  <radialGradient id="flashGlow" cx="100" cy="116" r="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="20%" stopColor="#fec007" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#f97316" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. Orbit Ring 1 (Dashed) - Counter Clockwise */}
                <motion.circle
                  cx="100"
                  cy="120"
                  r="82"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="12 8"
                  fill="none"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "100px 120px" }}
                />

                {/* 2. Orbit Ring 2 (Dashed) - Clockwise */}
                <motion.circle
                  cx="100"
                  cy="120"
                  r="66"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "100px 120px" }}
                />

                {/* 3. Lock Shackle (Behind body) */}
                <motion.path
                  d="M 72 80 V 48 C 72 32.5 84.5 20 100 20 C 115.5 20 128 32.5 128 48 V 80"
                  stroke="url(#shackleGrad)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                  animate={{
                    y: [0, 0, 0, 0, -18, -18, 0, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.5, 0.52, 0.65, 0.70, 1]
                  }}
                />

                {/* 4. Lock Body */}
                <rect
                  x="45"
                  y="76"
                  width="110"
                  height="88"
                  rx="22"
                  fill="#0B0B0D"
                  fillOpacity="0.95"
                  stroke="url(#bodyGrad)"
                  strokeWidth="3.5"
                />

                {/* 5. Laser Scanning Line */}
                <motion.line
                  x1="47"
                  y1="120"
                  x2="153"
                  y2="120"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                  animate={{
                    y: [-38, 38, -38],
                    opacity: [0.8, 0.3, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* 6. Keyhole backlight glow */}
                <circle cx="100" cy="116" r="16" fill="url(#keyholeGlow)" />

                {/* 7. Keyhole Shape */}
                <g fill="#050506" stroke="url(#goldGrad)" strokeWidth="1.5">
                  <circle cx="100" cy="110" r="7" />
                  <path d="M 96.5 113 L 94 125 H 106 L 103.5 113 Z" />
                </g>

                {/* 8. Floating & Animating Key */}
                <motion.g
                  animate={{
                    x: [-120, -120, 0, 0, 0, 0, -120, -120],
                    rotate: [0, 0, 0, 90, 90, 0, 0, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.5, 0.65, 0.75, 0.9, 1]
                  }}
                  style={{ transformOrigin: "100px 116px" }}
                >
                  {/* Key Head / Ring */}
                  <circle cx="44" cy="116" r="11" stroke="url(#goldGrad)" strokeWidth="3.5" fill="none" />
                  <circle cx="44" cy="116" r="3.5" fill="url(#goldGrad)" />
                  
                  {/* Key Shaft */}
                  <path d="M 55 116 H 100" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" />
                  
                  {/* Key Teeth */}
                  <path d="M 80 116 V 123 H 84 V 116" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M 88 116 V 123 H 92 V 116" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </motion.g>

                {/* 9. Light Flash Effect */}
                <motion.circle
                  cx="100"
                  cy="116"
                  r="50"
                  fill="url(#flashGlow)"
                  animate={{
                    opacity: [0, 0, 0, 0, 0.9, 0, 0, 0],
                    scale: [0.8, 0.8, 0.8, 0.8, 1.4, 0.8, 0.8, 0.8]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.2, 0.4, 0.5, 0.53, 0.60, 0.70, 1]
                  }}
                  pointerEvents="none"
                />
              </svg>
            </div>

            {/* Right "4" */}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              4
            </motion.span>
          </div>

          {/* ACTION BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12"
          >
            <Link href="/">
              <button className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_35px_rgba(249,115,22,0.4)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5">
                <Home className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Return Home</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </>
  );
}
