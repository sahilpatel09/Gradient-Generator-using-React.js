import './App.css';
import './assets/tailwind.css';
import arrow from './assets/img/arrow.svg';
import radial from './assets/img/radial.svg';
import { useState, useEffect } from "react";
import chroma from 'chroma-js';

function App() {
  return (
      <div className="flex items-center bg-gray-900 justify-center fixed inset-0">
        <div className="px-4 py-6">
          <h1 className="text-5xl text-white font-extrabold">Generate a CSS Color Gradient</h1>

          <h2 className="text-xl text-w hite text-center py-3 mt-2">Choose orientation</h2>

          <div className="flex items-center justify-center p-2 gap-5">

              <button title="to top">
              <img src={arrow} alt="arrow to top" />
              </button>

              <button title="to right top">
              <img src={arrow} alt="arrow to right top" className="transform rotate-45" />
              </button>

              <button title="to right">
              <img src={arrow} alt="arrow to right" className="transform rotate-90" />
              </button>

              <button title="to right bottom">
              <img src={arrow} alt="arrow to right bottom" className="rotate-135" />
              </button>

              <button title="to bottom">
              <img src={arrow} alt="arrow to bottom" className="transform rotate-180" />
              </button>

              <button title="to bottom left">
              <img src={arrow} alt="arrow to bottom left" className="rotate-225" />
              </button>

              <button title="to left">
              <img src={arrow} alt="arrow to left" className="transform -rotate-90" />
              </button>

              <button title="to left top">
              <img src={arrow} alt="arrow to left top" className="transform rotate-180" />
              </button>

              <button>
              <img src={arrow} alt="radial" className="px-1.5" />
              </button>

          </div>
        </div>
      </div>
  );
}

export default App;
