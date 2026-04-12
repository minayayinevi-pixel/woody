import React from 'react';
import { Play, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const blogEntries = [
  {
    year: "2006",
    title: "Cars",
    text: "Cars is released in theaters on June 9, accompanied by the short film \"One Man Band.\" The late story artist Joe Ranft is named a Disney Legend. The Walt Disney Company announces that it has agreed to purchase Pixar Animation Studios. Pixar celebrates its 20th anniversary.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/63b0140b-da87-40e8-a8cb-018b728272e2/mater.jpg"
  },
  {
    year: "2007",
    title: "Ratatouille",
    text: "Ratatouille is released in theaters on June 29, accompanied by the short film \"Lifted.\" \"Finding Nemo Submarine Voyage\" opens in Tomorrowland at Disneyland Park in California.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/335fb9f1-3e33-4696-adf0-71889e7687db/rat1.jpeg"
  },
  {
    year: "2008",
    title: "WALL·E",
    text: "WALL·E is released in theaters on June 27, accompanied by the short film \"Presto.\" \"Toy Story Midway Mania!\" opens at Disney parks in California and Florida.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/01895ff3-2c15-43a6-9ff9-fb57399e4ada/WAL_Stars_Pub_v2.1n.pub8.jpg"
  },
  {
    year: "2009",
    title: "Up",
    text: "Up becomes the first animated feature film to open the Cannes Film Festival. It opens in wide release on May 29 with the short film \"Partly Cloudy.\" \"Monsters, Inc. Ride & Go Seek\" opens at Tokyo Disneyland.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/57e86c98-0003-484b-ac11-5a6ff2e413de/u315b_1cpubAComp.pub8n.119.jpg"
  },
  {
    year: "2010",
    title: "Toy Story 3",
    text: "Toy Story 3 is released in theaters on June 18, accompanied by the short film \"Day and Night.\" \"Toy Story Playland,\" a themed land based on the Toy Story films, opens at Walt Disney Studios Park at Disneyland Paris.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/c62384f9-fecc-433b-9dd9-8a873f085797/tt300_50qpub.pub_vert16.296.jpg"
  },
  {
    year: "2011",
    title: "Cars 2",
    text: "Cars 2 is released in theaters on June 24, accompanied by the first Toy Story Toon, \"Hawaiian Vacation.\" Pixar celebrates its 25th anniversary. \"Toy Story Land\" opens at Hong Kong Disneyland.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/605ac322-8dab-4b39-afbd-1147eb0f2371/cs008_194eTpub.pub16.122.jpg"
  },
  {
    year: "2012",
    title: "Brave",
    text: "Brave is released in theaters on June 22, accompanied by the short film \"La Luna.\" \"Cars Land\" opens at Disney California Adventure Park. Pixar, in partnership with the San Francisco Symphony, launches \"Pixar in Concert\".",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/fb360642-2aec-42a0-be35-3f0752139446/merida.jpg"
  },
  {
    year: "2013-14",
    title: "Monsters University",
    text: "Monsters University is released in theaters on June 21, accompanied by the short film \"The Blue Umbrella.\" The TV special \"Toy Story Of TERROR!\" airs on ABC. \"Ratatouille: The Adventure\" opens in Walt Disney Studios Park at Disneyland Paris.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9dc4765e-7c4d-43b0-8d0e-fa3ba8f17f6b/s045a_9bpub.pub16.169.jpg"
  },
  {
    year: "2015",
    title: "Inside Out",
    text: "After premiering at the 68th Cannes Film Festival in May, Inside Out is released on June 19, accompanied by the short film \"LAVA.\" The Good Dinosaur, accompanied by the short film \"Sanjay's Super Team,\" is released in theatres on November 25.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/050f2afa-e590-4bf7-b671-913db712dd26/bing.jpg"
  },
  {
    year: "2016",
    title: "Finding Dory",
    text: "Finding Dory, accompanied by the short film \"Piper,\" is released in theatres on June 17. \"The Toy Story Hotel\" and \"Buzz Lightyear Planet Rescue\" attraction debut with the opening of Shanghai Disney Resort.",
    image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/2569fb8f-8e4e-4928-ba88-f57bda3ed269/k225_1aj_pub.pub16.245.jpg"
  }
];

const BlogPage = () => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />

      {/* Hero Video Section */}
      <section className="relative w-full h-[45vh] min-h-[350px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0">
          <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg" alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[40px] md:text-[60px] lg:text-[76px] font-bold tracking-[0.35em] text-center mb-6" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 3px 20px rgba(0,0,0,0.4)' }}>
            BLOG
          </h1>
          <button onClick={() => setShowVideo(true)} className="group w-[65px] h-[65px] rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer">
            <Play size={24} className="text-white/80 group-hover:text-white ml-1" fill="white" fillOpacity={0.8} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          {/* Timeline line */}
          <div className="relative">
            {/* Vertical center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

            {blogEntries.map((entry, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative mb-16 md:mb-20">
                  {/* Year dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                      <span className="text-[11px] font-bold text-white">{entry.year}</span>
                    </div>
                  </div>

                  {/* Mobile year badge */}
                  <div className="md:hidden mb-4">
                    <span className="inline-block bg-yellow-400 text-white text-[14px] font-bold px-4 py-1.5 rounded-full">{entry.year}</span>
                  </div>

                  {/* Content card */}
                  <div className={`md:flex md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Spacer for timeline alignment */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className="md:w-1/2">
                      <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isLeft ? 'md:ml-10' : 'md:mr-10'}`}>
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={entry.image}
                            alt={entry.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="hidden md:inline-block bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">{entry.year}</span>
                          </div>
                        </div>
                        {/* Text */}
                        <div className="p-5 md:p-6">
                          <h3 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
                            {entry.title}
                          </h3>
                          <p className="text-[14px] text-gray-600 leading-[1.75]">
                            {entry.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => setShowVideo(false)} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[110] bg-transparent border-none cursor-pointer"><X size={36} /></button>
          <div className="w-full max-w-[1000px] aspect-video">
            <iframe src="https://player.vimeo.com/video/911713522?autoplay=1" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Blog Video" className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
