import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              AIFlix
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-[#FF4500] text-white text-sm font-medium rounded-lg hover:bg-[#E03E00] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight leading-tight">
            Create Stunning AI Videos
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl mx-auto font-normal leading-relaxed">
            Transform your ideas into captivating videos with the power of AI.
            Browse, create, and share amazing AI-generated content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/auth/signup"
              className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all"
            >
              Start Creating Free
            </Link>
            <Link
              href="/browse"
              className="px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-all border border-gray-700"
            >
              Browse Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight">
            Why Choose AIFlix?
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-base font-bold mb-2 tracking-tight">Easy Creation</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Simply describe your vision and let AI bring it to life. No video editing skills required.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-base font-bold mb-2 tracking-tight">Browse & Discover</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Explore thousands of AI-generated videos from creators around the world.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-base font-bold mb-2 tracking-tight">Lightning Fast</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Generate high-quality videos in minutes. Create as many as you want with credits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight">
            How It Works
          </h2>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center font-semibold text-sm border border-gray-700">
                1
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 tracking-tight">Sign Up & Get Credits</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Create your free account and receive starter credits to begin creating.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center font-semibold text-sm border border-gray-700">
                2
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 tracking-tight">Describe Your Vision</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Enter a prompt describing the video you want to create. Be as creative as you like!
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center font-semibold text-sm border border-gray-700">
                3
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 tracking-tight">AI Generates Your Video</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our advanced AI processes your request and creates a unique video in minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center font-semibold text-sm border border-gray-700">
                4
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 tracking-tight">Share & Discover</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Share your creations with the community and explore videos from other creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Ready to Create Magic?
          </h2>
          <p className="text-sm text-gray-400 mb-6 font-normal">
            Join thousands of creators making amazing AI videos
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-6 py-2.5 bg-[#FF4500] text-white text-sm font-semibold rounded-lg hover:bg-[#E03E00] transition-all"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
