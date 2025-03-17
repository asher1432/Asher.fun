import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Science Fun!
        </h1>
        <p className="text-xl text-blue-200">Explore the wonders of science through interactive experiments</p>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Gravity Card */}
          <Link href="/gravity" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-[#1f2937] rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/20">
              <h2 className="text-2xl font-bold text-blue-400 mb-3">Gravity Explorer</h2>
              <p className="text-gray-300 mb-4">
                Discover how gravity works by playing with objects in different planetary environments!
              </p>
              <div className="bg-blue-500/10 rounded-lg p-4 text-sm">
                Fun Fact: Gravity on Mars is about 38% of Earth&apos;s gravity!
              </div>
            </div>
          </Link>

          {/* Chemical Reactions Card */}
          <Link href="/reactions" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-[#1f2937] rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/20">
              <h2 className="text-2xl font-bold text-green-400 mb-3">Chemical Reactions</h2>
              <p className="text-gray-300 mb-4">
                Mix virtual chemicals and watch amazing reactions happen in real-time!
              </p>
              <div className="bg-green-500/10 rounded-lg p-4 text-sm">
                Fun Fact: There are over 50 million known chemical compounds!
              </div>
            </div>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-300 mb-4">More Experiments Coming Soon!</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <span className="px-4 py-2 rounded-full bg-[#1f2937] text-sm">Light & Optics</span>
            <span className="px-4 py-2 rounded-full bg-[#1f2937] text-sm">Sound Waves</span>
            <span className="px-4 py-2 rounded-full bg-[#1f2937] text-sm">Electricity</span>
            <span className="px-4 py-2 rounded-full bg-[#1f2937] text-sm">Space Physics</span>
          </div>
        </div>
      </div>
    </main>
  );
}
