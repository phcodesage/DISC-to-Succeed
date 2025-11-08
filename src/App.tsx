import { useEffect } from 'react';
import { Calendar, Clock, Target, TrendingUp, Users, MessageCircle, Lightbulb } from 'lucide-react';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0e1f3e] text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Exceed Learning Center</h1>
          <button className="bg-[#ca3433] hover:bg-[#a82a29] px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-[#0e1f3e] via-[#1a2f52] to-[#0e1f3e] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ca3433] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f7e0e0] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#ca3433] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Interactive Workshop
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              DISC to Succeed
            </h2>
            <p className="text-2xl md:text-3xl text-[#f7e0e0] font-light mb-8">
              Unlock Your Personality Power for Profit
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how understanding your personality can directly impact your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Calendar className="w-12 h-12 text-[#ca3433] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <p className="text-gray-300">November 25, 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Clock className="w-12 h-12 text-[#ca3433] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Time</h3>
              <p className="text-gray-300">6:30 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-[#ca3433] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Format</h3>
              <p className="text-gray-300">Live Interactive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f7e0e0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#0e1f3e] mb-4">
              What You'll Learn
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Through engaging discussion and real-world application, you'll discover how to leverage your unique personality traits for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#ca3433] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0e1f3e] mb-3">
                Identify Your DISC Style
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Uncover your dominant personality type: Dominance, Influence, Steadiness, or Conscientiousness
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#ca3433] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0e1f3e] mb-3">
                Understand Decision-Making
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Recognize how each personality type approaches decision-making, money, and motivation
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#ca3433] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0e1f3e] mb-3">
                Communicate Effectively
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Master communication strategies to connect with others and close more opportunities
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#ca3433] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0e1f3e] mb-3">
                Leverage Your Strengths
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Use your natural strengths to lead, sell, and succeed in your business and career
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#ca3433] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0e1f3e] mb-3">
                Competitive Advantage
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Turn self-awareness into a powerful tool for personal and financial growth
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#ca3433] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#0e1f3e] mb-3">
                Build Better Relationships
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Understand others' personality types to create stronger professional and personal connections
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0e1f3e] to-[#1a2f52] rounded-2xl p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/1666122334517.jpg"
                  alt="Joseph A. Beauchamp, MBA, MS"
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-[#ca3433]/50 shadow-lg"
                />
              </div>
              <div className="text-white text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Joseph A. Beauchamp, MBA, MS</h3>
                <p className="text-[#f7e0e0] text-lg mb-4">Executive Coach & Leadership Expert</p>
                <p className="text-gray-300 leading-relaxed">
                  Joseph brings years of executive coaching experience and a proven track record of helping professionals unlock their potential through personality-based strategies for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f7e0e0]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-[#0e1f3e] mb-6">
            Who Should Attend?
          </h3>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            This workshop is ideal for entrepreneurs, professionals, and anyone seeking personal and financial growth through deeper self-understanding.
          </p>

          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h4 className="text-3xl font-bold text-[#0e1f3e] mb-6">
              Ready to Transform Your Success?
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              Join us on November 25, 2025 at 6:30 PM for this transformative workshop
            </p>
            <button className="bg-[#ca3433] hover:bg-[#a82a29] text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#0e1f3e] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Exceed Learning Center</h4>
          <p className="text-gray-400 mb-6">Empowering growth through knowledge and self-discovery</p>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-gray-400">
              © 2025 Exceed Learning Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
