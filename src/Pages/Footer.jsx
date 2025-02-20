import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="shadow-xl py-8">
                <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* First Column - Logo */}
                    <div>
                        <img src="/Logo Kothari1.png" alt="Logo" />
                    </div>

                    {/* Second Column - Fragrances */}
                    <div>
                        <ul>
                            {["Fragrances", "Personal Care", "Home Care", "Fine Perfumery", "Air Care", "Fabric Care", "Industrial Fragrances"].map((item, i) => (
                                <li key={i} className='py-1'>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Column - Flavours */}
                    <div>
                        <ul>
                            {["Flavours", "Pharma", "Nutraceuticals", "Beverages", "Oral Care"].map((item, i) => (
                                <li key={i} className='py-1'>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
