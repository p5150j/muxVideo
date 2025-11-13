'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/browse');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              AIFlix
            </Link>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center px-4 pt-24 min-h-screen">
        <div className="max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Get Started</h1>
            <p className="text-sm text-gray-400">Create your account and start making AI videos</p>
          </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          {/* Bonus Banner */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mb-5 text-center">
            <p className="text-xs font-semibold text-white">
              🎉 Sign up now and get 50 FREE credits!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 bg-gray-800 border-gray-700 rounded mt-1"
                required
              />
              <label htmlFor="terms" className="text-xs text-gray-400">
                I agree to the{' '}
                <Link href="/terms" className="text-white hover:text-gray-300">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-white hover:text-gray-300">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#FF4500] text-white text-sm font-semibold rounded-lg hover:bg-[#E03E00] transition-all disabled:opacity-50"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-gray-900/50 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2 text-xs font-medium">
                <span>G</span>
                Google
              </button>
              <button className="px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2 text-xs font-medium">
                <span>⚫</span>
                GitHub
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          Already have an account?{' '}
          <Link
            href="/auth/login"
            className="text-white font-semibold hover:text-gray-300 transition-colors"
          >
            Log in
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
}
