'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GravityExplorer() {
  const [selectedPlanet, setSelectedPlanet] = useState('earth');
  const [isDropping, setIsDropping] = useState(false);
  
  const planets = {
    earth: { gravity: 9.81, name: 'Earth', color: 'blue' },
    mars: { gravity: 3.72, name: 'Mars', color: 'red' },
    moon: { gravity: 1.62, name: 'Moon', color: 'gray' },
    jupiter: { gravity: 24.79, name: 'Jupiter', color: 'orange' },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white p-8">
      {/* Navigation */}
      <Link href="/" className="inline-block mb-8 text-blue-400 hover:text-blue-300">
        ← Back to Experiments
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Gravity Explorer</h1>
        
        {/* Planet Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.entries(planets).map(([key, planet]) => (
            <button
              key={key}
              onClick={() => setSelectedPlanet(key)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedPlanet === key
                  ? `bg-${planet.color}-500 text-white`
                  : 'bg-[#1f2937] hover:bg-[#2d3748]'
              }`}
            >
              {planet.name}
            </button>
          ))}
        </div>

        {/* Simulation Area */}
        <div className="relative bg-[#1f2937] rounded-xl p-6 h-[400px] mb-8">
          <div className="absolute top-4 left-4 bg-[#2d3748] rounded-lg p-3">
            <p className="text-sm">Current Gravity:</p>
            <p className="text-2xl font-bold text-blue-400">
              {planets[selectedPlanet].gravity} m/s²
            </p>
          </div>

          <div 
            className={`w-16 h-16 bg-white rounded-full mx-auto transition-all duration-1000 ${
              isDropping ? 'transform translate-y-[300px]' : ''
            }`}
            style={{
              transitionTimingFunction: `cubic-bezier(0.5, 0, 1, 1)`,
              transitionDuration: `${Math.sqrt((2 * 300) / planets[selectedPlanet].gravity) * 300}ms`
            }}
          />

          <button
            onClick={() => setIsDropping(false)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
            onTransitionEnd={() => setIsDropping(true)}
          >
            Drop Ball
          </button>
        </div>

        {/* Fun Facts */}
        <div className="bg-[#1f2937] rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Did You Know?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Objects fall at the same speed regardless of their mass (in a vacuum)!
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              An astronaut on the Moon can jump about 6 times higher than on Earth.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Jupiter&apos;s gravity is so strong that it affects the orbits of other planets!
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
} 