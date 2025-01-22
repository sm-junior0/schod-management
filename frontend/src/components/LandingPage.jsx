import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Moon, Star } from "lucide-react";
import { Features } from "./landingComponents/Features";
import { FAQ } from "./landingComponents/Faq";
import dashImage from "../assets/images/dash.png";
import TestimonialCarousel from "./landingComponents/TestimonialCarousel";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-quicksand">
      {/* Navbar */}
      <nav className="hero-gradient px-6 py-4 fixed w-full z-50 bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-white" size={32} />
            <span className="text-2xl font-bold text-white">Schol</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Home
            </a>
            <a
              href="#features"
              className="hover:text-gray-200 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-200 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-gray-200 transition-colors"
            >
              Testimonials
            </a>
          </div>

          <button
            onClick={() => navigate("/AuthPage")}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient px-6 pt-32 pb-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 moon-animation">
          <Moon className="text-yellow-400" size={48} />
        </div>
        <div className="absolute top-40 left-20 animate-float">
          <Star className="text-yellow-400 opacity-50" size={24} />
        </div>
        <div
          className="absolute bottom-40 right-40 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Star className="text-yellow-400 opacity-50" size={24} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-white text-sm mb-6 fade-in">
            Get Your Free Consultation Now
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Manage your school easily
            <br />
            with Schol
          </h1>
          <p
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            A school management solution that offers a personalized portal to
            each type of user
          </p>
          <button
            onClick={() => navigate("/AuthPage")}
            className="px-8 py-3 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Get Started
          </button>

          <div className="mt-16 fade-in" style={{ animationDelay: "0.8s" }}>
            <img
              src={dashImage}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold mb-12">
            30K+ Schools use our product
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 items-center">
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://shorturl.at/UZJlV"
                alt="Vant Garde"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://shorturl.at/xLwII"
                alt="Lily's Flowers"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://shorturl.at/1e1qH"
                alt="Cara Indoors"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://shorturl.at/yxb1u"
                alt="Business"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://shorturl.at/PgfgM"
                alt="Some Business"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://shorturl.at/1e1qH"
                alt="Cara Indoors"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://tinyurl.com/nm6jz26d"
                alt="Leaves & co."
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg"> {/* Increased padding for a larger box */}
              <img
                src="https://tinyurl.com/msvtypv3"
                alt="Sushi Express"
                className="h-12 object-contain transition-all hover:scale-105" // Removed grayscale for less dark effect
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Premium Price Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Basic", price: "50", duration: "3 month" },
              {
                name: "Standart",
                price: "160",
                duration: "6 month",
                featured: true,
              },
              { name: "Premium", price: "250", duration: "12 month" },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-xl shadow-lg transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">
                  {plan.name.toUpperCase()} PLAN
                </h3>
                <div className="text-4xl font-bold mb-2">${plan.price}</div>
                <div className="text-base font-medium mb-6">
                  per {plan.duration}
                </div>
                <ul className="space-y-4 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span
                        className={`${
                          plan.featured ? "text-white" : "text-gray-700"
                        } text-sm font-medium`}
                      >
                        ▶ Sit amet porttitor eget d
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.featured
                      ? "bg-white text-blue-500"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  Explore more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <section className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Please Subscribe for Updates
          </h2>
          <h3 className="text-2xl font-medium mb-3">and Exclusive Offers!</h3>
          <p className="text-muted-foreground mb-8">
            Stay Updated! Subscribe to Our Newsletter for the Latest School
            Updates and Exclusive Offers - Don't Miss Out, this kinda long
            please
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Terms & Condition</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Stay updated with our latest news and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button className="px-4 py-2 bg-primary rounded-lg hover:bg-primary-dark transition-all hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm">
            <p>©2024 School Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
