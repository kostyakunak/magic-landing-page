import { useState, useEffect } from 'react';
import { Eye, Sparkles, Moon, Star } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <Star className="w-2 h-2 text-purple-300 opacity-40" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-5xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Crystal Ball Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative animate-pulse-slow">
              <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-50 rounded-full"></div>
              <Eye className="w-24 h-24 text-purple-300 relative z-10 animate-spin-slow" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
            Unlock the Gates of the Future
          </h1>

          <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Ancient crystal ball knowledge is now available to you
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center gap-2 text-purple-200">
              <Eye className="w-5 h-5" />
              <span>Insight</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Moon className="w-5 h-5" />
              <span>Secret Knowledge</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Sparkles className="w-5 h-5" />
              <span>Transformation</span>
            </div>
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Sign Up for Training</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            What You Will Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-12 h-12" />,
                title: 'Crystal Ball Mastery',
                description: 'Learn to read signs and see the future through an ancient artifact'
              },
              {
                icon: <Moon className="w-12 h-12" />,
                title: 'Clairvoyance Development',
                description: 'Open your third eye and enhance your intuitive abilities'
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Energy Practices',
                description: 'Master energy work and protection techniques'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-purple-300 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-100">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Student Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Anastasia K.',
                text: 'After the training, my life changed dramatically. I learned to see signs and make the right decisions.'
              },
              {
                name: 'Dmitry V.',
                text: 'Incredible experience! The crystal ball techniques exceeded all my expectations.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
              >
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-purple-100 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-purple-300 font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-gradient-to-br from-purple-900/60 to-black/60 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/30">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-purple-200 mb-8">
                Limited spots available in the group. Don't miss the opportunity to change your destiny.
              </p>
              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Spot
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 text-center text-purple-300 border-t border-purple-500/20">
        <p>© 2025 Academy of Mystical Arts. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
