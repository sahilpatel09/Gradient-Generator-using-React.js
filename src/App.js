import './App.css';
import './assets/tailwind.css';
import arrow from './assets/img/arrow.svg';
import radial from './assets/img/radial.svg';
import { useState, useEffect } from "react";
import chroma from 'chroma-js';

function App() {
    const [color1, setColor1] = useState("#071936");
    const [color2, setColor2] = useState("#075059");
    const [direction, setDirection] = useState("linear-gradient");
    const [generated1, setGenerated1] = useState("");
    const [generated2, setGenerated2] = useState("");
    const [generated3, setGenerated3] = useState("");
    const [orientation, setOrientation] = useState("to right bottom");



    const generateColors = function () {
        let word = chroma.scale([color1,color2])
            .mode('lch').colors(5);
        setGenerated1(word[1]);
        setGenerated2(word[2]);
        setGenerated3(word[3]);
        console.log(generated1, generated2, generated3);
    }

    const ulStyle = { backgroundImage: direction + "("+orientation+","+color1 +","+generated1 +","+generated2 +","+generated3 +","+color2            +")" }
    const cssCode = direction+ "("+orientation+","+color1 +","+generated1 +","+generated2 +","+generated3 +","+color2+");";
    useEffect(() => {
        generateColors();
        console.log(ulStyle)
    });

    return (
      <div className="flex items-center bg-gray-900 justify-center fixed inset-0" style={ulStyle}>
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


            <h2 className="text-xl text-white text-center py-3 mt-5">Enter Colors</h2>
            <div className="flex gap-5 justify-center">
                <input type="text" className="text-white rounded px-2 py-3 text-center shadow-2xl bg-red-900" name="hex" value="Red" />
                <input type="text" className="text-white rounded px-2 py-3 text-center shadow-2xl font-bold bg-red-700" name="hex2" value="Blue"/>
            </div>

            <div className="w-full box p-3 mt-5">
                <p className="text-left text-gray-100 max-w-xl mx-auto text-xl font-mono">
                    background-image: { cssCode }
                </p>
            </div>






        </div>
      </div>
  );
}

export default App;
