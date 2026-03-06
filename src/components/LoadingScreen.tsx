
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-primary overflow-hidden">
      {/* Animated Rings */}
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-brand-secondary/20 border-t-brand-secondary rounded-full animate-spin"></div>
        <div className="absolute w-24 h-24 border-4 border-white/10 border-b-white rounded-full animate-spin-slow"></div>

        {/* Brand Icon or Logo Placeholder */}
        <div className="absolute flex items-center justify-center">
          <span className="text-white font-bold text-2xl tracking-tighter">SB</span>
        </div>
      </div>

      {/* Brand Name with Fade/Slide Animation */}
      <div className="mt-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[0.2em] uppercase animate-pulse">
          Sai Builders
        </h1>
        <div className="mt-2 h-1 w-0 bg-brand-secondary mx-auto animate-loading-bar"></div>
        <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase font-light">
          Building Your Dreams Into Reality
        </p>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes loading-bar {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
