'use client';

import { useState } from 'react';
import Link from 'next/link';
import './animations.css';

// Add keyframes using CSS-in-JS without DOM manipulation
const keyframeStyles = {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' }
  },
  wiggle: {
    '0%, 100%': { transform: 'rotate(0deg)' },
    '25%': { transform: 'rotate(10deg)' },
    '75%': { transform: 'rotate(-10deg)' }
  }
};

const MoleculeAnimation = ({ type }) => {
  const animations = {
    water: (
      <div className="relative w-32 h-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative floatAnimation">
            {/* Oxygen */}
            <div className="w-12 h-12 bg-red-400 rounded-full shadow-lg shadow-red-400/50">
              {/* Electron cloud animation */}
              <div className="absolute inset-0 rounded-full animate-pulse bg-red-400/30"></div>
            </div>
            {/* Hydrogens with electron sharing visualization */}
            <div className="absolute -top-6 -left-6 w-8 h-8">
              <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-[bounce_2s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-red-400/40 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-8 h-8">
              <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-[bounce_2s_ease-in-out_infinite_0.5s]" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-400/40 to-red-400/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    salt: (
      <div className="relative w-32 h-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Ionic bond animation */}
          <div className="animate-[spin_4s_linear_infinite] relative w-24 h-24">
            {/* Sodium cation */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="w-full h-full bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50">
                <div className="absolute inset-0 rounded-full animate-pulse bg-yellow-400/30"></div>
                <span className="absolute -top-1 -right-1 text-xs font-bold">+</span>
              </div>
            </div>
            {/* Chloride anion */}
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="w-full h-full bg-green-400 rounded-full shadow-lg shadow-green-400/50">
                <div className="absolute inset-0 rounded-full animate-pulse bg-green-400/30"></div>
                <span className="absolute -top-1 -right-1 text-xs font-bold">-</span>
              </div>
            </div>
            {/* Ionic bond visualization */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
    acid: (
      <div className="relative w-32 h-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-[wiggle_2s_ease-in-out_infinite]">
            {/* Central atom */}
            <div className="relative w-16 h-16 bg-purple-400 rounded-lg shadow-lg shadow-purple-400/50 transform rotate-45">
              <div className="absolute inset-0 rounded-lg animate-pulse bg-purple-400/30"></div>
            </div>
            {/* Proton release animation */}
            <div className="absolute -top-4 -left-4 w-6 h-6">
              <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-ping"></div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold">H⁺</span>
            </div>
            {/* Dissociation effect */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-400/20 to-transparent animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    ),
    methanol: (
      <div className="relative w-32 h-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Carbon center with tetrahedral geometry */}
          <div className="relative">
            <div className="w-12 h-12 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-[pulse_2s_ease-in-out_infinite]">
              {/* Electron cloud */}
              <div className="absolute inset-0 rounded-full animate-pulse bg-purple-400/30"></div>
              {/* Tetrahedral bonds */}
              <div className="absolute w-full h-full animate-[spin_4s_linear_infinite]">
                {/* Hydrogens */}
                <div className="absolute -top-6 w-6 h-6">
                  <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/40 to-purple-400/40 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -right-6 w-6 h-6">
                  <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-400/40 to-purple-400/40 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -bottom-6 w-6 h-6">
                  <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/40 to-purple-400/40 rounded-full animate-pulse"></div>
                </div>
                {/* Oxygen */}
                <div className="absolute -left-8 w-8 h-8">
                  <div className="w-full h-full bg-red-400 rounded-full shadow-lg shadow-red-400/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/40 to-purple-400/40 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    diatomic: (
      <div className="relative w-32 h-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative animate-[bounce_3s_ease-in-out_infinite]">
            {/* First atom */}
            <div className="absolute -left-6 w-10 h-10">
              <div className="w-full h-full bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
              <div className="absolute inset-0 rounded-full animate-pulse bg-indigo-400/30"></div>
            </div>
            {/* Second atom */}
            <div className="absolute -right-6 w-10 h-10">
              <div className="w-full h-full bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
              <div className="absolute inset-0 rounded-full animate-pulse bg-indigo-400/30"></div>
            </div>
            {/* Covalent bond visualization */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-gradient-to-r from-indigo-400/50 via-indigo-400 to-indigo-400/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
    default: (
      <div className="relative w-32 h-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-400 rounded-full animate-[spin_3s_linear_infinite]">
              <div className="absolute inset-0 rounded-full animate-pulse bg-gray-400/20"></div>
            </div>
            {/* Electron cloud visualization */}
            <div className="absolute inset-0 bg-gradient-radial from-gray-400/20 to-transparent animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  };

  return animations[type] || animations.default;
};

export default function ChemicalReactions() {
  const [selectedElements, setSelectedElements] = useState([]);
  const [reactionResult, setReactionResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [elementCounts, setElementCounts] = useState({});

  const elements = [
    { id: 'H', symbol: 'H', name: 'Hydrogen', color: 'text-blue-400' },
    { id: 'O', symbol: 'O', name: 'Oxygen', color: 'text-red-400' },
    { id: 'Na', symbol: 'Na', name: 'Sodium', color: 'text-yellow-400' },
    { id: 'Cl', symbol: 'Cl', name: 'Chlorine', color: 'text-green-400' },
    { id: 'Fe', symbol: 'Fe', name: 'Iron', color: 'text-gray-400' },
    { id: 'C', symbol: 'C', name: 'Carbon', color: 'text-purple-400' },
    { id: 'N', symbol: 'N', name: 'Nitrogen', color: 'text-indigo-400' },
    { id: 'Ca', symbol: 'Ca', name: 'Calcium', color: 'text-orange-400' },
    { id: 'S', symbol: 'S', name: 'Sulfur', color: 'text-yellow-600' },
    { id: 'P', symbol: 'P', name: 'Phosphorus', color: 'text-orange-600' },
  ];

  const reactions = {
    // Diatomic molecules
    'H2': {
      result: 'H₂ (Hydrogen Gas)',
      description: 'The lightest element, exists as H₂ in nature.',
      animation: '🎈',
      animationType: 'default',
      realWorld: 'Used in fuel cells, balloon filling, and rocket fuel.',
    },
    'O2': {
      result: 'O₂ (Oxygen Gas)',
      description: 'Essential for breathing and combustion.',
      animation: '💨',
      animationType: 'default',
      realWorld: 'Used in medical treatments, welding, and life support systems.',
    },
    'N2': {
      result: 'N₂ (Nitrogen Gas)',
      description: 'The most abundant gas in Earth&apos;s atmosphere.',
      animation: '🌬️',
      animationType: 'default',
      realWorld: 'Used in food packaging, cryogenics, and tire filling.',
    },
    'Cl2': {
      result: 'Cl₂ (Chlorine Gas)',
      description: 'A yellow-green gas with a sharp odor.',
      animation: '☣️',
      animationType: 'default',
      realWorld: 'Used in water treatment and manufacturing.',
    },

    // Binary compounds - Oxides
    'H2-O': {
      result: 'H₂O (Water)',
      description: 'The most essential compound for life!',
      animation: '💧',
      animationType: 'water',
      realWorld: 'Used in drinking, cleaning, and as a universal solvent.',
    },
    'Na2-O': {
      result: 'Na₂O (Sodium Oxide)',
      description: 'A basic oxide that reacts vigorously with water.',
      animation: '🔥',
      animationType: 'default',
      realWorld: 'Used in ceramics, glass making, and chemical synthesis.',
    },
    'Fe2-O3': {
      result: 'Fe₂O₃ (Iron(III) Oxide)',
      description: 'Common rust, a reddish-brown compound.',
      animation: '🦀',
      animationType: 'default',
      realWorld: 'Found in rust, used in pigments and magnetic materials.',
    },
    'Ca-O': {
      result: 'CaO (Quicklime)',
      description: 'A white, caustic, alkaline solid.',
      animation: '⚪',
      animationType: 'default',
      realWorld: 'Used in construction and steel manufacturing.',
    },
    'S-O2': {
      result: 'SO₂ (Sulfur Dioxide)',
      description: 'A colorless gas with a sharp, pungent odor.',
      animation: '🌫️',
      animationType: 'acid',
      realWorld: 'Used in preserving dried fruits, wine making, and produced by volcanic activity.',
    },
    'C-O2': {
      result: 'CO₂ (Carbon Dioxide)',
      description: 'A greenhouse gas essential for plant life.',
      animation: '🌱',
      animationType: 'default',
      realWorld: 'Used by plants in photosynthesis, found in carbonated drinks.',
    },
    'N-O2': {
      result: 'NO₂ (Nitrogen Dioxide)',
      description: 'A reddish-brown toxic gas.',
      animation: '🏭',
      animationType: 'default',
      realWorld: 'Air pollutant, used in rocket fuels and fertilizer production.',
    },
    'P2-O5': {
      result: 'P₂O₅ (Phosphorus Pentoxide)',
      description: 'A powerful dehydrating agent.',
      animation: '🔮',
      animationType: 'default',
      realWorld: 'Used in the production of phosphoric acid and as a drying agent.',
    },

    // Binary compounds - Chlorides
    'H-Cl': {
      result: 'HCl (Hydrochloric Acid)',
      description: 'A strong acid found in your stomach.',
      animation: '🧪',
      animationType: 'acid',
      realWorld: 'Used in food processing, cleaning, and industrial processes.',
    },
    'Na-Cl': {
      result: 'NaCl (Table Salt)',
      description: 'The most common seasoning in the world!',
      animation: '🧂',
      animationType: 'salt',
      realWorld: 'Used in food preservation, seasoning, and de-icing roads.',
    },
    'Fe-Cl3': {
      result: 'FeCl₃ (Iron(III) Chloride)',
      description: 'A dark brown solid that readily absorbs water.',
      animation: '💧',
      animationType: 'default',
      realWorld: 'Used in water treatment and as an etching agent.',
    },

    // Binary compounds - Sulfides
    'H2-S': {
      result: 'H₂S (Hydrogen Sulfide)',
      description: 'A gas that smells like rotten eggs.',
      animation: '🥚',
      animationType: 'default',
      realWorld: 'Found in natural gas, volcanic gases, and hot springs.',
    },
    'Fe-S': {
      result: 'FeS (Iron Sulfide)',
      description: 'A black mineral compound.',
      animation: '⚫',
      animationType: 'default',
      realWorld: 'Found in nature as the mineral troilite.',
    },

    // Acids and bases
    'H2-S-O4': {
      result: 'H₂SO₄ (Sulfuric Acid)',
      description: 'One of the most important industrial chemicals.',
      animation: '⚗️',
      animationType: 'acid',
      realWorld: 'Used in batteries, fertilizers, and metal processing.',
    },
    'H-N-O3': {
      result: 'HNO₃ (Nitric Acid)',
      description: 'A strong acid used in industry.',
      animation: '🧪',
      animationType: 'acid',
      realWorld: 'Used in fertilizer production and metal processing.',
    },
    'Na-O-H': {
      result: 'NaOH (Sodium Hydroxide)',
      description: 'A strong base also known as lye.',
      animation: '🧼',
      animationType: 'default',
      realWorld: 'Used in soap making and cleaning products.',
    },
    'H3-P-O4': {
      result: 'H₃PO₄ (Phosphoric Acid)',
      description: 'A weak acid with many uses.',
      animation: '🥤',
      animationType: 'acid',
      realWorld: 'Used in soft drinks and fertilizers.',
    },

    // Organic compounds
    'C-H4': {
      result: 'CH₄ (Methane)',
      description: 'The simplest hydrocarbon.',
      animation: '🔥',
      animationType: 'default',
      realWorld: 'Natural gas, used for cooking and heating.',
    },
    'C-H3-O-H': {
      result: 'CH₃OH (Methanol)',
      description: 'The simplest alcohol.',
      animation: '🧪',
      animationType: 'methanol',
      realWorld: 'Used as a solvent and fuel.',
    },

    // Nitrogen compounds
    'N-H3': {
      result: 'NH₃ (Ammonia)',
      description: 'A pungent gas used in cleaning.',
      animation: '🧹',
      animationType: 'default',
      realWorld: 'Used in cleaning products and fertilizers.',
    },

    // Complex inorganic compounds
    'Ca-C-O3': {
      result: 'CaCO₃ (Calcium Carbonate)',
      description: 'The main component of limestone.',
      animation: '🗿',
      animationType: 'default',
      realWorld: 'Found in shells, limestone, and used in construction.',
    },
    'Ca3-P2-O8': {
      result: 'Ca₃(PO₄)₂ (Calcium Phosphate)',
      description: 'A mineral essential for life.',
      animation: '🦴',
      animationType: 'default',
      realWorld: 'Found in bones and teeth, used in fertilizers.',
    },
    'Ca3-O8-P2': {
      result: 'Ca₃(PO₄)₂ (Calcium Phosphate)',
      description: 'A mineral essential for life.',
      animation: '🦴',
      animationType: 'default',
      realWorld: 'Found in bones and teeth, used in fertilizers.',
    }
  };

  // Update recommendations data
  const elementRecommendations = {
    'H': [
      {
        result: 'H₂ (Hydrogen Gas)',
        elements: 'Two Hydrogen atoms (H₂)',
        description: 'A diatomic molecule, the lightest gas.'
      },
      {
        result: 'H₂O (Water)',
        elements: 'Two Hydrogen (H₂) + One Oxygen (O)',
        description: 'The most essential compound for life.'
      },
      {
        result: 'HCl (Hydrochloric Acid)',
        elements: 'One Hydrogen (H) + One Chlorine (Cl)',
        description: 'A strong acid found in your stomach.'
      },
      {
        result: 'NH₃ (Ammonia)',
        elements: 'Three Hydrogen (H₃) + One Nitrogen (N)',
        description: 'A pungent gas used in cleaning products.'
      }
    ],
    'O': [
      {
        result: 'O₂ (Oxygen Gas)',
        elements: 'Two Oxygen atoms (O₂)',
        description: 'Essential for breathing and combustion.'
      },
      {
        result: 'H₂O (Water)',
        elements: 'One Oxygen (O) + Two Hydrogen (H₂)',
        description: 'The most essential compound for life.'
      },
      {
        result: 'CO₂ (Carbon Dioxide)',
        elements: 'One Carbon (C) + Two Oxygen (O₂)',
        description: 'A greenhouse gas essential for plant life.'
      },
      {
        result: 'SO₂ (Sulfur Dioxide)',
        elements: 'One Sulfur (S) + Two Oxygen (O₂)',
        description: 'Used in preserving dried fruits.'
      }
    ],
    'Na': [
      {
        result: 'NaCl (Table Salt)',
        elements: 'One Sodium (Na) + One Chlorine (Cl)',
        description: 'The most common seasoning in the world.'
      },
      {
        result: 'Na₂O (Sodium Oxide)',
        elements: 'Two Sodium (Na₂) + One Oxygen (O)',
        description: 'A basic oxide that reacts with water.'
      },
      {
        result: 'NaOH (Sodium Hydroxide)',
        elements: 'One Sodium (Na) + One Oxygen (O) + One Hydrogen (H)',
        description: 'A strong base also known as lye.'
      }
    ],
    'Cl': [
      {
        result: 'Cl₂ (Chlorine Gas)',
        elements: 'Two Chlorine atoms (Cl₂)',
        description: 'A yellow-green gas with a sharp odor.'
      },
      {
        result: 'HCl (Hydrochloric Acid)',
        elements: 'One Chlorine (Cl) + One Hydrogen (H)',
        description: 'A strong acid found in your stomach.'
      },
      {
        result: 'NaCl (Table Salt)',
        elements: 'One Chlorine (Cl) + One Sodium (Na)',
        description: 'The most common seasoning in the world.'
      },
      {
        result: 'FeCl₃ (Iron(III) Chloride)',
        elements: 'Three Chlorine (Cl₃) + One Iron (Fe)',
        description: 'Used in water treatment.'
      }
    ],
    'Fe': [
      {
        result: 'Fe₂O₃ (Iron(III) Oxide)',
        elements: 'Two Iron (Fe₂) + Three Oxygen (O₃)',
        description: 'Common rust, a reddish-brown compound.'
      },
      {
        result: 'FeS (Iron Sulfide)',
        elements: 'One Iron (Fe) + One Sulfur (S)',
        description: 'A black mineral compound.'
      },
      {
        result: 'FeCl₃ (Iron(III) Chloride)',
        elements: 'One Iron (Fe) + Three Chlorine (Cl₃)',
        description: 'Used in water treatment.'
      }
    ],
    'C': [
      {
        result: 'CO₂ (Carbon Dioxide)',
        elements: 'One Carbon (C) + Two Oxygen (O₂)',
        description: 'A greenhouse gas essential for plant life.'
      },
      {
        result: 'CH₄ (Methane)',
        elements: 'One Carbon (C) + Four Hydrogen (H₄)',
        description: 'The simplest hydrocarbon.'
      },
      {
        result: 'CH₃OH (Methanol)',
        elements: 'One Carbon (C) + Four Hydrogen (H₄) + One Oxygen (O)',
        description: 'The simplest alcohol.'
      },
      {
        result: 'CaCO₃ (Calcium Carbonate)',
        elements: 'One Calcium (Ca) + One Carbon (C) + Three Oxygen (O₃)',
        description: 'The main component of limestone.'
      }
    ],
    'N': [
      {
        result: 'N₂ (Nitrogen Gas)',
        elements: 'Two Nitrogen atoms (N₂)',
        description: 'The most abundant gas in Earth&apos;s atmosphere.'
      },
      {
        result: 'NH₃ (Ammonia)',
        elements: 'One Nitrogen (N) + Three Hydrogen (H₃)',
        description: 'A pungent gas used in cleaning.'
      },
      {
        result: 'NO₂ (Nitrogen Dioxide)',
        elements: 'One Nitrogen (N) + Two Oxygen (O₂)',
        description: 'A reddish-brown toxic gas.'
      },
      {
        result: 'HNO₃ (Nitric Acid)',
        elements: 'One Hydrogen (H) + One Nitrogen (N) + Three Oxygen (O₃)',
        description: 'A strong acid used in industry.'
      }
    ],
    'Ca': [
      {
        result: 'CaO (Quicklime)',
        elements: 'One Calcium (Ca) + One Oxygen (O)',
        description: 'A white, caustic, alkaline solid.'
      },
      {
        result: 'CaCO₃ (Calcium Carbonate)',
        elements: 'One Calcium (Ca) + One Carbon (C) + Three Oxygen (O₃)',
        description: 'The main component of limestone.'
      },
      {
        result: 'Ca₃(PO₄)₂ (Calcium Phosphate)',
        elements: 'Three Calcium (Ca₃) + Two Phosphorus (P₂) + Eight Oxygen (O₈)',
        description: 'A mineral essential for life.'
      }
    ],
    'S': [
      {
        result: 'SO₂ (Sulfur Dioxide)',
        elements: 'One Sulfur (S) + Two Oxygen (O₂)',
        description: 'Used in preserving dried fruits.'
      },
      {
        result: 'H₂S (Hydrogen Sulfide)',
        elements: 'One Sulfur (S) + Two Hydrogen (H₂)',
        description: 'A gas that smells like rotten eggs.'
      },
      {
        result: 'H₂SO₄ (Sulfuric Acid)',
        elements: 'Two Hydrogen (H₂) + One Sulfur (S) + Four Oxygen (O₄)',
        description: 'One of the most important industrial chemicals.'
      },
      {
        result: 'FeS (Iron Sulfide)',
        elements: 'One Sulfur (S) + One Iron (Fe)',
        description: 'A black mineral compound.'
      }
    ],
    'P': [
      {
        result: 'P₂O₅ (Phosphorus Pentoxide)',
        elements: 'Two Phosphorus (P₂) + Five Oxygen (O₅)',
        description: 'A powerful dehydrating agent.'
      },
      {
        result: 'H₃PO₄ (Phosphoric Acid)',
        elements: 'Three Hydrogen (H₃) + One Phosphorus (P) + Four Oxygen (O₄)',
        description: 'A weak acid with many uses.'
      },
      {
        result: 'Ca₃(PO₄)₂ (Calcium Phosphate)',
        elements: 'Three Calcium (Ca₃) + Two Phosphorus (P₂) + Eight Oxygen (O₈)',
        description: 'A mineral essential for life.'
      }
    ]
  };

  const selectElement = (element) => {
    if (selectedElements.length < 4 && !selectedElements.includes(element)) {
      setSelectedElements([...selectedElements, element]);
      setElementCounts(prev => ({
        ...prev,
        [element.id]: 1
      }));
    }
  };

  const incrementCount = (elementId) => {
    setElementCounts(prev => ({
      ...prev,
      [elementId]: (prev[elementId] || 1) + 1
    }));
  };

  const decrementCount = (elementId) => {
    setElementCounts(prev => ({
      ...prev,
      [elementId]: Math.max(1, (prev[elementId] || 1) - 1)
    }));
  };

  const checkReaction = () => {
    if (selectedElements.length >= 1) {
      setIsAnimating(true);
      
      // Create a sorted array of elements with their counts
      const elementArray = selectedElements.map(el => ({
        id: el.id,
        count: elementCounts[el.id] || 1
      })).sort((a, b) => a.id.localeCompare(b.id));

      // Special case for diatomic molecules (single element with count of 2)
      if (selectedElements.length === 1) {
        const element = selectedElements[0];
        const count = elementCounts[element.id] || 1;
        if (count === 2) {
          const diatomicKey = `${element.id}2`;
          if (reactions[diatomicKey]) {
            setTimeout(() => {
              setReactionResult(reactions[diatomicKey]);
              setIsAnimating(false);
            }, 1000);
            return;
          }
        }
      }

      // Create reaction key by joining sorted elements with their counts
      const reactionKey = elementArray
        .map(el => `${el.id}${el.count > 1 ? el.count : ''}`)
        .join('-');
      
      console.log('Checking reaction for:', reactionKey); // For debugging
      
      // Try exact match first
      let result = reactions[reactionKey];
      
      // If no exact match found, try alternative arrangements
      if (!result) {
        // Try reversing the elements for binary compounds
        if (elementArray.length === 2) {
          const reverseKey = elementArray.reverse()
            .map(el => `${el.id}${el.count > 1 ? el.count : ''}`)
            .join('-');
          result = reactions[reverseKey];
        }
      }

      setTimeout(() => {
        setReactionResult(result || {
          result: 'No Reaction',
          description: 'These elements do not form a stable compound in these proportions.',
          animation: '⚠️',
          animationType: 'default',
          realWorld: 'Try adjusting the number of atoms or use different elements.',
        });
        setIsAnimating(false);
      }, 1000);
    }
  };

  const resetExperiment = () => {
    setSelectedElements([]);
    setReactionResult(null);
    setElementCounts({});
  };

  const removeElement = (indexToRemove) => {
    const elementToRemove = selectedElements[indexToRemove];
    setSelectedElements(selectedElements.filter((_, index) => index !== indexToRemove));
    setReactionResult(null);
    setElementCounts(prev => {
      const newCounts = { ...prev };
      delete newCounts[elementToRemove.id];
      return newCounts;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white p-8">
      <Link href="/" className="inline-block mb-8 text-blue-400 hover:text-blue-300">
        ← Back to Experiments
      </Link>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Chemical Reactions</h1>
        <p className="text-center text-gray-300 mb-8">Mix elements to create compounds and discover their real-world applications!</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Element Selection */}
          <div className="lg:col-span-2">
            <div className="bg-[#1f2937] rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Select Elements</h2>
                <span className="text-sm text-gray-400">
                  {selectedElements.length}/4 elements selected
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {elements.map((element) => (
                  <button
                    key={element.id}
                    onClick={() => selectElement(element)}
                    disabled={selectedElements.length === 4 || selectedElements.includes(element)}
                    className={`p-4 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 ${
                      selectedElements.includes(element) ? 'bg-blue-500/20 border-blue-500' : ''
                    } ${selectedElements.length === 4 && !selectedElements.includes(element) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className={`text-4xl font-bold ${element.color}`}>
                      {element.symbol}
                    </div>
                    <div className="mt-2 text-sm">{element.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reaction Area */}
            <div className="bg-[#1f2937] rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Reaction Area</h2>
              <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center items-center gap-4 text-3xl mb-6 min-h-[80px]">
                  {selectedElements.length === 0 ? (
                    <p className="text-gray-400 text-base">Select elements to begin mixing!</p>
                  ) : (
                    selectedElements.map((element, index) => (
                      <div key={index} className="flex items-center group relative">
                        <div className="flex items-center bg-[#2d3748] rounded-lg p-3 shadow-lg">
                          <span className={`${element.color} font-bold`}>{element.symbol}</span>
                          {elementCounts[element.id] > 1 && (
                            <span className="text-sm align-super ml-1">{elementCounts[element.id]}</span>
                          )}
                          <div className="ml-3 flex flex-col gap-1">
                            <button
                              onClick={() => incrementCount(element.id)}
                              className="text-sm bg-blue-500 hover:bg-blue-600 rounded px-2 py-1 transition-colors"
                              title="Add more atoms"
                            >
                              +
                            </button>
                            <button
                              onClick={() => decrementCount(element.id)}
                              className="text-sm bg-red-500 hover:bg-red-600 rounded px-2 py-1 transition-colors"
                              disabled={elementCounts[element.id] <= 1}
                              title="Remove atoms"
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeElement(index)}
                          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                          title="Remove element"
                        >
                          ×
                        </button>
                        {index < selectedElements.length - 1 && (
                          <span className="mx-2 text-blue-300">+</span>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {selectedElements.length >= 1 && !reactionResult && (
                  <button
                    onClick={checkReaction}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all"
                  >
                    {selectedElements.length === 1 ? 'Check Element' : 'Mix Elements'}
                  </button>
                )}

                {isAnimating && (
                  <div className="my-8">
                    <div className="animate-spin relative w-20 h-20 mx-auto">
                      <div className="absolute w-full h-full border-4 border-blue-500 rounded-full border-t-transparent"></div>
                      <div className="absolute w-full h-full border-4 border-green-500 rounded-full border-b-transparent" style={{ animationDelay: '-0.2s' }}></div>
                    </div>
                  </div>
                )}

                {reactionResult && !isAnimating && (
                  <div className="space-y-6 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <MoleculeAnimation type={reactionResult.animationType} />
                      <div className="text-6xl">
                        {reactionResult.animation}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400 mb-2">
                        {reactionResult.result}
                      </h3>
                      <p className="text-gray-300 mb-4">{reactionResult.description}</p>
                      <div className="bg-[#2d3748] rounded-lg p-4">
                        <h4 className="font-semibold text-blue-300 mb-2">Real World Applications</h4>
                        <p className="text-gray-300">{reactionResult.realWorld}</p>
                      </div>
                    </div>
                    <button
                      onClick={resetExperiment}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all"
                    >
                      Try Another Reaction
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Suggestions & Help */}
          <div className="space-y-6">
            {/* Suggestions Panel */}
            <div className="bg-[#1f2937] rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-blue-300">What to Do?</h2>
              <div className="space-y-4">
                {selectedElements.length === 0 && (
                  <div className="bg-[#2d3748] rounded-lg p-4">
                    <h3 className="font-semibold text-green-400 mb-2">Start Here:</h3>
                    <p className="text-sm text-gray-300">Select any element from the periodic table to begin. Try starting with common elements like:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-300">
                      <li>• Hydrogen (H) - The lightest element</li>
                      <li>• Oxygen (O) - Essential for life</li>
                      <li>• Carbon (C) - Base of organic chemistry</li>
                    </ul>
                  </div>
                )}

                {selectedElements.length === 1 && (
                  <div className="space-y-4">
                    <div className="bg-[#2d3748] rounded-lg p-4">
                      <h3 className="font-semibold text-green-400 mb-2">Try These Combinations:</h3>
                      <div className="space-y-2">
                        {elementRecommendations[selectedElements[0].id]?.map((rec, index) => (
                          <div key={index} className="bg-[#374151] rounded-lg p-3">
                            <div className="font-medium text-blue-300">{rec.result}</div>
                            <div className="text-sm text-gray-300">{rec.elements}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#2d3748] rounded-lg p-4">
                      <h3 className="font-semibold text-yellow-400 mb-2">Tip:</h3>
                      <p className="text-sm text-gray-300">
                        Use the + and - buttons to adjust the number of atoms. Some elements naturally occur in pairs!
                      </p>
                    </div>
                  </div>
                )}

                {selectedElements.length >= 2 && !reactionResult && (
                  <div className="bg-[#2d3748] rounded-lg p-4">
                    <h3 className="font-semibold text-green-400 mb-2">Ready to React!</h3>
                    <p className="text-sm text-gray-300">
                      Click "Mix Elements" to see what these elements form together. Try adjusting the number of atoms for different compounds!
                    </p>
                  </div>
                )}

                {reactionResult && (
                  <div className="bg-[#2d3748] rounded-lg p-4">
                    <h3 className="font-semibold text-green-400 mb-2">Success!</h3>
                    <p className="text-sm text-gray-300">
                      You've created a compound! Click "Try Another Reaction" to experiment with different combinations.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-[#1f2937] rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-purple-300">Quick Tips</h2>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Common elements like H, O, and C form many important compounds
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Some elements naturally exist as pairs (H₂, O₂, N₂)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Metals (Na, Fe, Ca) often react with non-metals
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  You can create acids, bases, salts, and more!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 