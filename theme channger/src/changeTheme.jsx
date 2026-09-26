import { useState } from "react";

const themes = [
    { label: "Red",     bg: "bg-red-400",    btn: "bg-red-500 hover:bg-red-600" },
    { label: "Green",   bg: "bg-green-400",  btn: "bg-green-500 hover:bg-green-600" },
    { label: "Gray",    bg: "bg-gray-400",   btn: "bg-gray-500 hover:bg-gray-600" },
    { label: "Purple",  bg: "bg-purple-400", btn: "bg-purple-500 hover:bg-purple-600" },
    { label: "Orange",  bg: "bg-orange-400", btn: "bg-orange-500 hover:bg-orange-600" },
    { label: "Pink",    bg: "bg-pink-400",   btn: "bg-pink-500 hover:bg-pink-600" },
    { label: "Black",   bg: "bg-gray-900",   btn: "bg-gray-800 hover:bg-gray-950" },
    { label: "Yellow",  bg: "bg-yellow-400", btn: "bg-yellow-500 hover:bg-yellow-600" },
];

function ChangeTheme() {
    const [color, setColor] = useState("bg-white");

    return (
        <div className={`${color} min-h-screen transition-colors duration-500`}>
            <div className="flex flex-wrap justify-center gap-3 p-6 shadow-md backdrop-blur-sm bg-white/20">
                {themes.map(({ label, bg, btn }) => (
                    <button
                        key={label}
                        onClick={() => setColor(bg)}
                        className={`${btn} text-white font-semibold px-5 py-2 rounded-full shadow-lg 
                                    transition-all duration-200 active:scale-95 cursor-pointer
                                    ring-2 ring-white/40 hover:ring-white/80`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ChangeTheme;
