import { Link } from 'react-router-dom'
import '../pages/Home.css'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Stats */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl mb-6">
            Rights Navigator
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-600 sm:text-2xl mb-12">
            An app to explore and understand civil, constitutional, and other personal rights and liberties.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">200+</div>
              <div className="text-gray-600">Rights Guides</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">50+</div>
              <div className="text-gray-600">Legal Resources</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">24/7</div>
              <div className="text-gray-600">AI Assistant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Everything You Need to Know Your Rights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A comprehensive platform designed to educate, inform, and empower you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">AI Rights Assistant</h3>
              <p className="text-gray-600 text-sm">Get instant answers to your civil rights questions from our intelligent chatbot trained on legal resources.</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Rights Library</h3>
              <p className="text-gray-600 text-sm">Comprehensive guides covering employment, housing, police interactions, voting, and more.</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Action Center</h3>
              <p className="text-gray-600 text-sm">File complaints and access resources from trusted civil rights organizations.</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Community Forum</h3>
              <p className="text-gray-600 text-sm">Connect with others, share experiences, and get advice from verified legal helpers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quick Reference: Know Your Rights</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">Essential rights to remember in common situations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className="bg-blue-600 p-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <h3 className="text-lg font-bold text-white">If Stopped by Police</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    You have the right to remain silent
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Ask "Am I free to go?" If yes, calmly leave
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    You can refuse consent to a search
                  </li>
                </ul>
                <button className="mt-3 text-blue-600 text-sm font-medium">+2 more</button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className="bg-red-600 p-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <h3 className="text-lg font-bold text-white">If Arrested</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Say "I wish to remain silent"
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Ask for a lawyer immediately
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Do not sign anything without a lawyer
                  </li>
                </ul>
                <button className="mt-3 text-blue-600 text-sm font-medium">+2 more</button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className="bg-green-600 p-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                <h3 className="text-lg font-bold text-white">At Work</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Protection from discrimination (race, gender, religion, etc.)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Right to reasonable accommodations for disabilities
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Protection from retaliation for reporting violations
                  </li>
                </ul>
                <button className="mt-3 text-blue-600 text-sm font-medium">+2 more</button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className="bg-purple-600 p-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
                <h3 className="text-lg font-bold text-white">In Your Home</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    Police need a warrant to enter (with exceptions)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    You can refuse to let police in without a warrant
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold">•</span>
                    You can record interactions at your door
                  </li>
                </ul>
                <button className="mt-3 text-blue-600 text-sm font-medium">+2 more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filing Center - Rights Library */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quick Action Center</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              File complaints and access resources from trusted civil rights organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ACLU */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://www.aclu.org/contact-us" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ACLU</h3>
              <p className="text-blue-200 text-sm mb-4">American Civil Liberties Union</p>
              <div className="flex gap-2">
                <a href="https://www.aclu.org/contact-us" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* EEOC */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://www.eeoc.gov/filing-charge-discrimination" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">EEOC</h3>
              <p className="text-blue-200 text-sm mb-4">Equal Employment Opportunity Commission</p>
              <div className="flex gap-2">
                <a href="https://www.eeoc.gov/filing-charge-discrimination" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* DOJ Civil Rights */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://civilrights.justice.gov/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">DOJ Civil Rights</h3>
              <p className="text-blue-200 text-sm mb-4">Department of Justice</p>
              <div className="flex gap-2">
                <a href="https://civilrights.justice.gov/" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* MI Civil Rights */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://www.michigan.gov/mdcr" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">MI Civil Rights</h3>
              <p className="text-blue-200 text-sm mb-4">Michigan Dept of Civil Rights</p>
              <div className="flex gap-2">
                <a href="https://www.michigan.gov/mdcr" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* NAACP Grand Rapids */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://naacpgrandrapids.org/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NAACP Grand Rapids</h3>
              <p className="text-blue-200 text-sm mb-4">Greater Grand Rapids NAACP</p>
              <div className="flex gap-2">
                <a href="https://naacpgrandrapids.org/" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* MI Attorney General */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://www.michigan.gov/ag" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">MI Attorney General</h3>
              <p className="text-blue-200 text-sm mb-4">Michigan AG Office</p>
              <div className="flex gap-2">
                <a href="https://www.michigan.gov/ag" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* US Attorney General */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://www.justice.gov/ag" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">US Attorney General</h3>
              <p className="text-blue-200 text-sm mb-4">US Attorney General</p>
              <div className="flex gap-2">
                <a href="https://www.justice.gov/ag" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* HUD Fair Housing */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-amber-400">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <a href="https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">HUD Fair Housing</h3>
              <p className="text-blue-200 text-sm mb-4">Housing Discrimination</p>
              <div className="flex gap-2">
                <a href="https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint" target="_blank" rel="noopener noreferrer" className="flex-1 text-amber-400 font-medium flex items-center justify-center gap-1 text-sm hover:gap-2 transition-all">
                  File <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Alerts Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-amber-500 mx-auto mb-4">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Customizable Alerts</h2>
            <p className="text-xl text-gray-600">Stay informed about legal updates that matter to you</p>
            <p className="text-sm text-amber-600 mt-2">Sign in to save your preferences</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Select Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button className="p-4 rounded-xl border-2 text-left transition-all border-amber-400 bg-amber-50">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-900">Employment Law Updates</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mt-1">Workplace rights, discrimination, wages</p>
              </button>
              
              <button className="p-4 rounded-xl border-2 text-left transition-all border-amber-400 bg-amber-50">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-900">Voting Rights</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-500">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mt-1">Election laws, voter protections</p>
              </button>
              
              <button className="p-4 rounded-xl border-2 text-left transition-all border-gray-200 hover:border-gray-300">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-900">Police Reform</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Law enforcement accountability</p>
              </button>
              
              <button className="p-4 rounded-xl border-2 text-left transition-all border-gray-200 hover:border-gray-300">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-900">Housing Rights</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Fair housing, tenant protections</p>
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-blue-900 mb-4">Notification Method</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-lg bg-blue-900 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </button>
                <input type="email" placeholder="your@email.com" className="flex-1 border rounded-lg px-4 py-2 disabled:bg-gray-100" />
              </div>
            </div>
            
            <button className="w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white">
              Save Preferences
            </button>
          </div>
        </div>
      </section>

      {/* Community Forum Section */}
      <section id="community" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Community Forum</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Connect with others, share experiences, and get advice from verified legal helpers</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4 border-transparent hover:border-amber-400">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Workplace discrimination - need advice</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">Sarah M.</span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        2 hours ago
                      </span>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-6 mt-4 pt-4 border-t">
                  <span className="flex items-center gap-1 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    12 replies
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    24 likes
                  </span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Popular Topics</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Employment Rights</span>
                    <span className="text-xs text-gray-500">45 posts</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Police Interactions</span>
                    <span className="text-xs text-gray-500">32 posts</span>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Housing Discrimination</span>
                    <span className="text-xs text-gray-500">28 posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Live Stream & Storage Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Emergency Live Stream & Storage</h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">Document incidents in real-time with automatic cloud backup to protect your evidence</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-video bg-gray-900 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-gray-600">
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
              </div>
              <div className="flex justify-center gap-4 mb-6">
                <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all bg-red-600 text-white hover:bg-red-500 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Start Recording
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Voice-Activated Recording</h4>
                    <p className="text-red-200 text-sm">Start recording hands-free with voice commands</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Automatic Cloud Backup</h4>
                    <p className="text-red-200 text-sm">Your recordings are automatically saved to secure cloud storage</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Legal-Grade Evidence</h4>
                    <p className="text-red-200 text-sm">Timestamped, tamper-proof recordings admissible in court</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Informed Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-white mx-auto mb-4">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed About Your Rights</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">Get weekly updates on civil rights news, legal changes, and resources delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" required className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white" />
            <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
              Subscribe <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
