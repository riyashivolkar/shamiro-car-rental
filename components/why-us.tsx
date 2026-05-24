import { ShieldCheck, Headset, Wallet, Truck } from "lucide-react";

const WhyTravelWithShamiro = () => {
  return (
    <section
      id="services"
      className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5 leading-tight">
            Why Travel With Shamiro?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-7 md:leading-8">
            Premium service meets local warmth. We ensure your Goan road trip is
            nothing short of perfection.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 md:gap-6">
          {/* Large Card */}
          <div className="relative md:col-span-2 md:row-span-2 overflow-hidden bg-[#ece8e3] min-h-[380px] md:min-h-[500px] flex items-end p-6 sm:p-8 md:p-10 rounded-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4QNFQ9O8SormHL7jicVhlZKFQzVAnq2ErxfPebEFsORn-b00Z0OZVUAUdITRasmpfNqqxYjUuM5BQ8MTzFdXc1bVtgbFfggGEtTe2txQPOONFu6WGTy56rzw61C3VlQHAeQFka9Sh7pOfAi23E8TaddOKy4GeZkmbXDBVKTOSEi3081R_52nUqHQL4mgw2DQqj_8ZJQOjmRa4j6L5-GGM0CpBGdCxmgsJq6QWf0WshDpK-GDkE2yI3mH9FWzUSo4uUpsdGBg2XUiD"
              alt="Goa Drive"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10">
              <div className="mb-4 md:mb-5">
                <ShieldCheck
                  size={34}
                  className="text-yellow-500 md:w-[42px] md:h-[42px]"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Total Reliability
              </h3>

              <p className="text-sm sm:text-base text-gray-700 leading-7 max-w-lg">
                Every vehicle undergoes a 50-point safety check before every
                rental. Travel with peace of mind knowing you're in a
                well-maintained machine.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl border-b-4 border-yellow-400 p-6 sm:p-8 flex flex-col justify-center rounded-2xl">
            <Headset size={32} className="text-yellow-500 mb-4 md:mb-5" />

            <h4 className="text-xl sm:text-2xl font-bold text-black mb-3">
              24/7 Roadside
            </h4>

            <p className="text-sm sm:text-base text-gray-600 leading-7">
              Instant support wherever you are in Goa.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f3f3] p-6 sm:p-8 flex flex-col justify-center rounded-2xl">
            <Wallet size={32} className="text-yellow-500 mb-4 md:mb-5" />

            <h4 className="text-xl sm:text-2xl font-bold text-black mb-3">
              No Hidden Costs
            </h4>

            <p className="text-sm sm:text-base text-gray-600 leading-7">
              The price you see is the price you pay. Transparent billing.
            </p>
          </div>

          {/* Bottom Wide Card */}
          <div className="md:col-span-2 bg-black p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 rounded-2xl">
            <div className="flex-1">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Local Delivery
              </h4>

              <p className="text-sm sm:text-base text-gray-300 leading-7 max-w-xl">
                We deliver the car to your hotel or the airport at your
                convenience. Your journey starts where you are.
              </p>
            </div>

            <div className="bg-yellow-400 p-4 sm:p-5 rounded-xl">
              <Truck size={34} className="text-black md:w-[42px] md:h-[42px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTravelWithShamiro;
