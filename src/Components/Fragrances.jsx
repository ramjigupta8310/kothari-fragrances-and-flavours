import React, { useEffect, useState } from 'react'
import styles from "./FlavoursAndFragrances.module.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const LeftIcons = [
    { src: "/Assets/Fragrances/Men-Grooming.jpg", text: "Men Grooming" },
    { src: "/Assets/Fragrances/Intimate-Hygiene.jpg", text: "Intimate Hygiene" },
    { src: "/Assets/Fragrances/Hair-Care.jpg", text: "Hair Care" },
    { src: "/Assets/Fragrances/Bath-Soap.jpg", text: "Bath Soap" },
    { src: "/Assets/Fragrances/Baby-Care.jpg", text: "Baby Care" },
    { src: "/Assets/Fragrances/Skin-Care.jpg", text: "Skin Care" },
    { src: "/Assets/Fragrances/Wet-Wipes.jpg", text: "Wet Wipes" },
    { src: "/Assets/Fragrances/Shower-Gel.jpg", text: "Shower Gel" },
]

const Fragrances = () => {
    const images = [
        { src: "/img1.avif", name: "Vanilla Strawberry", description: "Des1" },
        { src: "/img2.avif", name: "Strawberry Delight", description: "Des2" },
        { src: "/img3.avif", name: "Mango Bliss Strawberry", description: "Des3" },
        { src: "/img4.avif", name: "Chocolate Strawberry", description: "Des4" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Next Image Function
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Previous Image Function
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto-loop Every 3 Seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section id="fragrances" className="grid grid-cols-1 lg:grid-cols-2 gap-10
            pt-[6rem]">
                {/* Left Side  */}
                <div className="flex flex-col justify-between items-center text-gray-700 px-6 md:px-8 lg:px-8 xl:px-14">
                    {/* Text Section */}
                    <div className="text-center">
                        <p className="tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] font-semibold">
                            W H A T &nbsp; W E &nbsp; H A V E
                        </p>
                        <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-black">Fragrances</h2>
                        <h4 className="mt-3 text-xl md:text-2xl font-semibold">{images[currentIndex].name}</h4>
                        <p className="mt-4">
                            {images[currentIndex].description}
                        </p>
                    </div>

                    {/* Icon Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-10">
                        {LeftIcons.map((item, index) => (
                            <div key={index} className="flex shadow-md border p-2 rounded-2xl items-center text-gray-700">
                                <img src={item.src} className="w-8" />
                                <p className="ml-4">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Slider Controls (Buttons + Indicators) */}
                    <div className="flex items-center gap-4 justify-center mt-8">
                        {/* Previous Button */}
                        <button onClick={prevImage} className="text-xl sm:text-3xl text-gray-400 hover:text-slate-700">
                            <GrLinkPrevious />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-2">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-slate-700 scale-110" : "bg-gray-300"
                                        }`}
                                ></span>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button onClick={nextImage} className="text-xl sm:text-3xl text-gray-400 hover:text-slate-700">
                            <GrLinkNext />
                        </button>
                    </div>
                </div>


                {/* Right Side Img Slider*/}
                <div className="flex items-center justify-center gap-1 sm:gap-3 xl:gap-4 2xl:gap-6 pr-2 sm:pr-10 lg:pr-0">
                    {/* Main Image */}
                    <div className="flex-shrink-0 text-center">
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].name}
                            className="h-[150px] w-[150px] sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:w-[210px] lg:h-[210px] xl:w-[250px] xl:h-[250px] 2xl:w-[280px] 2xl:h-[280px] rounded-full shadow-lg"
                        />
                        <p className="w-[150px] sm:w-[220px] md:w-[280px] lg:w-[210px] xl:w-[250px] 2xl:w-[280px] mt-2 text-lg font-semibold text-gray-700">{images[currentIndex].name}</p>
                    </div>

                    {/* Thumbnail Images */}
                    <div className={`flex items-center gap-1 sm:gap-3 xl:gap-4 2xl:gap-6 ${styles["hide-scrollbar"]} pr-2 sm:pr-6 lg:pr-0`}>
                        {images.map((img, index) => (
                            <div key={index} className="flex flex-col flex-shrink-0">
                                <img
                                    src={img.src}
                                    alt={img.name}
                                    className={`w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44    lg:w-[8rem] lg:h-[8rem] xl:w-[9rem] xl:h-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full cursor-pointer border-2 transition-all ${index === currentIndex ? "border-blue-500 scale-105" : "border-gray-300"
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                                <p className="w-24 sm:w-36 md:w-44 lg:w-[8rem] xl:w-[9rem] 2xl:w-[11.5rem] mt-2 text-sm text-gray-700 text-center ">{img.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fragrances
