import { MessageCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-sm bg-[#e9e8e7] aspect-square">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4LpZZjzAZN8XWJ7QT89y_e5opoJ1wXZDVW-PGWDESvsyGL7MZ8LaRQ-CBt7fK4NjpFFwjgn_lS19ecX4HNnalRMyWfAI6bZ9YYeF8zET8YGcE8knf8fXpbfPN9cXwyG9PCHBzTc85T2oAHngS2O8mvhNa_7WTzcD2Px_cGQaThxPeLWvw4ldOsDTcRx7M6eb0ARXeNrjpa1r9ddCmO4VN9sbQjK9Upvmiarou_4ZBvDB9WTiOaSeJ0vFf8nKsGnGDIqNshY_9c0of"
              alt="About Shamiro Goa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          {/* Floating Card */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-yellow-400 px-4 py-4 md:px-8 md:py-6 shadow-2xl rounded-sm">
            <h3 className="text-xl md:text-3xl  font-semibold text-black">
              10+ Years
            </h3>

            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-black mt-1 font-medium">
              Of Local Expertise
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <span className="text-yellow-600 uppercase tracking-[0.3em] text-sm font-bold">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            The Shamiro Story
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            We started as a local Goan car rental service with a simple belief:
            everyone deserves to travel in comfort and style without breaking
            the bank. What began with a single car in a quiet village has grown
            into a fleet of modern vehicles serving thousands of explorers
            annually.
          </p>
          <p className="text-base leading-7 text-gray-500">
            Our foundation is built on reliability, local knowledge, and the
            infectious spirit of adventure that defines Goa. When you rent with
            Shamiro, you aren't just getting a car; you're gaining a local
            partner dedicated to making your Goan journey seamless and
            unforgettable.
          </p>
          {/* Button */}
          <div className="pt-4">
            <a
              href="https://wa.me/917972660029?text=Hi%20Shamiro,%20I%20want%20to%20book%20a%20car%20in%20Goa."
              target="_blank"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              WhatsApp to Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
