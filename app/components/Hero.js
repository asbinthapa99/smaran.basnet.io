export default function Hero() {
    return (
        <section id="home" className="relative z-10 min-h-screen flex items-center pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div className="animate-fade-in-left order-2 md:order-1">
                    <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-indigo-500 bg-indigo-50 px-4 py-1.5 rounded-full mb-5">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Smaran Basnet</span>
                    </h1>
                    <p className="text-lg sm:text-xl font-medium text-gray-500 mb-3">
                        Digital Marketing Specialist &amp; Business Growth Strategist
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed max-w-md mb-8">
                        I help automobile and eCommerce businesses grow through performance marketing, SEO, and data-driven strategies.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300"
                        >z
                            Hire Me
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-indigo-200 text-indigo-600 font-semibold text-sm rounded-full hover:bg-indigo-50 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300"
                        >
                            See Services
                        </a>
                    </div>
                </div>

                {/* Round Photo */}
                <div className="flex justify-center order-1 md:order-2 animate-fade-in-right">
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl opacity-20 animate-pulse scale-110" />
                        {/* Pulse ring */}
                        <div className="absolute inset-[-8px] rounded-full border-2 border-indigo-200 opacity-40" style={{ animation: 'pulse-ring 3s ease-in-out infinite' }} />
                        {/* Photo */}
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-indigo-100 animate-float">
                            <img
                                src="/images/image.png"
                                alt="Smaran Basnet"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Smaran+Basnet&size=400&background=6366f1&color=fff&bold=true&font-size=0.4';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
