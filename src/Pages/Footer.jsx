import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="py-8">
                <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* First Column - Logo */}
                    <Link to="/"><img src='/Logo-Kothari.png' alt="Logo" /></Link>

                    {/* Second Column - Fragrances */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Fragrances</h3>
                        <ul>
                            {["Personal Care", "Home Care", "Fine Perfumery", "Air Care", "Fabric Care", "Industrial Fragrances"].map((item, i) => (
                                <li key={i} className='py-1'>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Column - Flavours */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Flavours</h3>
                        <ul>
                            {["Pharma", "Nutraceuticals", "Beverages", "Oral Care"].map((item, i) => (
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
