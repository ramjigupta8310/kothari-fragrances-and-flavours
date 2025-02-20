import React from 'react'

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="grid grid-cols-1 lg:grid-cols-2 gap-10
                pt-[6rem] px-6 md:px-8 lg:px-12 xl:px-20 bg-[rgba(235,235,129,0.2)] py-16">
            {/* Left Section */}
            <div className="text-gray-700 ">
                <p className="tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] font-semibold">
                    W E &nbsp; CAN &nbsp; D O
                </p>
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-black">Why Choose Us</h2>
                <p className="mt-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem.
                </p>
                <p className="mt-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium.
                </p>
            </div>


            {/* Right Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    { number: "01", text: "Flexible MOQ’s" },
                    { number: "02", text: "Futuristic approach" },
                    { number: "03", text: "Quick ideation for the product line" },
                    { number: "04", text: "High Repeat Ratio" },
                    { number: "05", text: "Focus on intangibles" },
                    { number: "06", text: "Gender neutral approach" },
                    { number: "07", text: "Focus on hue not on new" },
                    { number: "08", text: "Ethical Sourcing" },
                ].map((item, index) => (
                    <div key={index} className="flex shadow-md p-2 items-center text-gray-700">
                        {/*  Left Side: Number (Full Height) */}
                        <p className="text-4xl font-semibold">
                            {item.number}
                        </p>

                        {/* ✅ Right Side: Text */}
                        <p className="ml-4">{item.text}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default WhyChooseUs
