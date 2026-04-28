import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Grid } from 'lucide-react';

const images = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/${i + 1}.jpeg`
}));

const stallImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/stall/${i + 1}.jpeg`
}));

const plantVideos = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/video/${i + 1}.mp4`
}));

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [currentStallIndex, setCurrentStallIndex] = useState(0);
  const [isStallHovered, setIsStallHovered] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showStallPhotos, setShowStallPhotos] = useState(false);
  const [previewImage, setPreviewImage] = useState<{id: number, src: string} | null>(null);

  // Auto-slider logic for installations
  useEffect(() => {
    if (isHovered || showGrid || isVideoHovered || showVideo || showStallPhotos || previewImage) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, showGrid, isVideoHovered, showVideo, showStallPhotos, previewImage]);

  // Auto-slider logic for videos
  useEffect(() => {
    if (isHovered || showGrid || isVideoHovered || showVideo || showStallPhotos || previewImage) return;

    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % plantVideos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, showGrid, isVideoHovered, showVideo, showStallPhotos, previewImage]);

  // Auto-slider logic for stall photos
  useEffect(() => {
    if (isHovered || showGrid || isStallHovered || showVideo || showStallPhotos || previewImage) return;

    const timer = setInterval(() => {
      setCurrentStallIndex((prev) => (prev + 1) % stallImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, showGrid, isStallHovered, showVideo, showStallPhotos, previewImage]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentVideoIndex((prev) => (prev + 1) % plantVideos.length);
  };
  const handlePrevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentVideoIndex((prev) => (prev - 1 + plantVideos.length) % plantVideos.length);
  };

  const handleNextStall = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStallIndex((prev) => (prev + 1) % stallImages.length);
  };
  const handlePrevStall = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStallIndex((prev) => (prev - 1 + stallImages.length) % stallImages.length);
  };

  // Keyboard controls for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewImage) setPreviewImage(null);
        else if (showGrid) setShowGrid(false);
        else if (showStallPhotos) setShowStallPhotos(false);
        else if (showVideo) setShowVideo(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, showGrid, showStallPhotos, showVideo]);

  return (
    <>
      <section id="gallery" className="relative ambient-bg py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-3">Media & Gallery</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050B1F] mb-4 tracking-tight">
            Installations, Plant Tour & Exhibition Stalls
          </h2>
        </div>

        {/* 3 Cards Uniform Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

          {/* Installations Card */}
          <div
            className="relative flex flex-col rounded-3xl overflow-hidden border border-[#4A6CF7]/20 shadow-2xl shadow-blue-900/10 fade-up hover:border-[#4A6CF7]/40 transition-colors duration-300"
            style={{ background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black group cursor-pointer" onClick={() => setShowGrid(true)}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={`Installation ${images[currentIndex].id}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80"
                />
              </AnimatePresence>

              {/* Top Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
                <motion.div
                  key={currentIndex + (isHovered ? "-paused" : "")}
                  className="h-full bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]"
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "100%" }}
                  transition={{ duration: isHovered ? 0 : 3, ease: "linear" }}
                  style={{ width: isHovered ? "100%" : "auto" }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-transparent pointer-events-none z-10" />
              {/* Slider Controls (Arrows) */}
              <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <button
                onClick={(e) => { e.stopPropagation(); setPreviewImage(images[currentIndex]); }}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Maximize2 size={18} />
              </button>
            </div>

            <div className="p-6 flex flex-col flex-1 border-t border-white/10 relative z-20">
              <h3 className="text-xl font-bold text-white mb-2">Installations</h3>
              <p className="text-sm text-gray-400 mb-6 flex-1">Explore our products deployed in real-world industrial environments.</p>
              <button
                onClick={() => setShowGrid(true)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition-all border border-white/10 hover:border-white/30"
              >
                <Grid size={16} /> View Gallery
              </button>
            </div>
          </div>

          {/* Plant Video Card */}
          <div
            className="relative flex flex-col rounded-3xl overflow-hidden border border-[#06B6D4]/20 shadow-2xl shadow-cyan-900/10 fade-up hover:border-[#06B6D4]/40 transition-colors duration-300"
            style={{ background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)', transitionDelay: '0.1s' }}
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black group cursor-pointer" onClick={() => setShowVideo(true)}>
              <AnimatePresence mode="wait">
                <motion.video
                  key={currentVideoIndex}
                  src={plantVideos[currentVideoIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80"
                />
              </AnimatePresence>

              {/* Top Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
                <motion.div
                  key={currentVideoIndex + (isVideoHovered ? "-paused" : "")}
                  className="h-full bg-gradient-to-r from-[#06B6D4] to-[#4A6CF7]"
                  initial={{ width: "0%" }}
                  animate={{ width: isVideoHovered ? "100%" : "100%" }}
                  transition={{ duration: isVideoHovered ? 0 : 5, ease: "linear" }}
                  style={{ width: isVideoHovered ? "100%" : "auto" }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-transparent pointer-events-none z-10" />
              {/* Slider Controls (Arrows) */}
              <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePrevVideo}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#06B6D4] transition-all transform hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextVideo}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#06B6D4] transition-all transform hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1 border-t border-white/10 relative z-20">
              <h3 className="text-xl font-bold text-white mb-2">Plant Tour</h3>
              <p className="text-sm text-gray-400 mb-6 flex-1">Take a look inside our state-of-the-art manufacturing facility.</p>
              <button
                onClick={() => setShowVideo(true)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition-all border border-white/10 hover:border-white/30"
              >
                Watch Videos
              </button>
            </div>
          </div>

          {/* Stall Photos Card */}
          <div
            className="relative flex flex-col rounded-3xl overflow-hidden border border-[#4A6CF7]/20 shadow-2xl shadow-blue-900/10 fade-up hover:border-[#4A6CF7]/40 transition-colors duration-300"
            style={{ background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)', transitionDelay: '0.2s' }}
            onMouseEnter={() => setIsStallHovered(true)}
            onMouseLeave={() => setIsStallHovered(false)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black group cursor-pointer" onClick={() => setShowStallPhotos(true)}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStallIndex}
                  src={stallImages[currentStallIndex].src}
                  alt={`Stall Photo ${stallImages[currentStallIndex].id}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80"
                  onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/236750/pexels-photo-236750.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                />
              </AnimatePresence>

              {/* Top Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
                <motion.div
                  key={currentStallIndex + (isStallHovered ? "-paused" : "")}
                  className="h-full bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]"
                  initial={{ width: "0%" }}
                  animate={{ width: isStallHovered ? "100%" : "100%" }}
                  transition={{ duration: isStallHovered ? 0 : 4, ease: "linear" }}
                  style={{ width: isStallHovered ? "100%" : "auto" }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-transparent pointer-events-none z-10" />
              {/* Slider Controls (Arrows) */}
              <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePrevStall}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextStall}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1 border-t border-white/10 relative z-20">
              <h3 className="text-xl font-bold text-white mb-2">Exhibition/ Events</h3>
              <p className="text-sm text-gray-400 mb-6 flex-1">Check out our booths and product showcases from global expos.</p>
              <button
                onClick={() => setShowStallPhotos(true)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition-all border border-white/10 hover:border-white/30"
              >
                View Photos
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Installations Grid Modal */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050B1F]/90 backdrop-blur-xl flex flex-col p-6 lg:p-12 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">All Installations</h3>
                <button
                  onClick={() => setShowGrid(false)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10"
                    onClick={() => setPreviewImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={`Installation ${img.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050B1F]/90 backdrop-blur-xl flex flex-col p-6 lg:p-12 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">Plant Tour Videos</h3>
                <button
                  onClick={() => setShowVideo(false)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plantVideos.map((vid) => (
                  <motion.div
                    key={vid.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-black shadow-lg"
                  >
                    <video
                      src={vid.src}
                      controls
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stall Photos Grid Modal */}
      <AnimatePresence>
        {showStallPhotos && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050B1F]/90 backdrop-blur-xl flex flex-col p-6 lg:p-12 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">Exhibition Stall Photos</h3>
                <button
                  onClick={() => setShowStallPhotos(false)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stallImages.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10 bg-white/5"
                    onClick={() => setPreviewImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={`Stall Photo ${img.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/236750/pexels-photo-236750.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 lg:p-12"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full rounded-2xl overflow-hidden flex flex-col items-center"
            >
              <img
                src={previewImage.src}
                alt={`Preview ${previewImage.id}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
