const data = [
  {
    title: "First slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://media.architecturaldigest.com/photos/61b0ce58df5163297d83ae6a/16:9/w_1920,c_limit/PurpleCherry_Williams18R.jpg",
  },
  {
    title: "Second slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://lprluxury.com/wp-content/uploads/2025/02/daniela-sotoo.jpg",
  },
  {
    title: "Third slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://plus.unsplash.com/premium_photo-1687697860831-edaf70e279dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* Slider */}
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {data.map((item, index) => (
              <div key={index} className="hs-carousel-slide relative">
                <img src={item.background_image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
                  <h2 className="text-4xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-lg text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-white hover:bg-white/10 focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-white hover:bg-white/10 focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
      </div>
      {/* End Slider */}
    </>
  );
}
