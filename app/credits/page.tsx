'use client';

import { useState } from 'react';
import { mockUser } from '@/lib/mock-data';

const creditPackages = [
  {
    id: 'starter',
    name: 'Starter',
    credits: 100,
    price: 9.99,
    pricePerCredit: 0.099,
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    credits: 500,
    price: 39.99,
    pricePerCredit: 0.08,
    popular: true,
    savings: '20%',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    credits: 1000,
    price: 69.99,
    pricePerCredit: 0.07,
    popular: false,
    savings: '30%',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    credits: 5000,
    price: 299.99,
    pricePerCredit: 0.06,
    popular: false,
    savings: '40%',
  },
];

export default function CreditsPage() {
  const [selectedPackage, setSelectedPackage] = useState('pro');
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchase = (packageId: string) => {
    setSelectedPackage(packageId);
    setIsPurchasing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsPurchasing(false);
      alert('Purchase successful! Credits have been added to your account.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white tracking-tight">
            Buy Credits
          </h1>
          <p className="text-sm text-gray-400 mb-5">
            Choose the perfect package for your creative needs
          </p>
          <div className="inline-block bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-3">
            <p className="text-xs text-gray-400 mb-1">Your current balance</p>
            <p className="text-2xl font-bold text-white">
              ⚡ {mockUser.credits} credits
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {creditPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-gray-900/50 border rounded-xl p-5 transition-all ${
                pkg.popular
                  ? 'border-white shadow-lg shadow-white/20 scale-105'
                  : 'border-gray-800 hover:border-white/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-0.5 rounded-full text-[10px] font-bold">
                  MOST POPULAR
                </div>
              )}
              {pkg.savings && !pkg.popular && (
                <div className="absolute -top-2 right-3 bg-green-600 px-2 py-0.5 rounded-full text-[10px] font-bold">
                  Save {pkg.savings}
                </div>
              )}

              <div className="text-center mb-5">
                <h3 className="text-xl font-bold mb-2 tracking-tight">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-1">
                  ${pkg.price}
                </div>
                <p className="text-xs text-gray-400">
                  ${pkg.pricePerCredit.toFixed(3)} per credit
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mb-5 text-center">
                <p className="text-2xl font-bold text-white mb-1">
                  ⚡ {pkg.credits}
                </p>
                <p className="text-xs text-gray-400">credits</p>
              </div>

              <ul className="space-y-2 mb-5 text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Create {Math.floor(pkg.credits / 5)} videos (30s)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Never expires</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Commercial license</span>
                </li>
              </ul>

              <button
                onClick={() => handlePurchase(pkg.id)}
                disabled={isPurchasing && selectedPackage === pkg.id}
                className={`w-full py-2.5 font-semibold text-xs rounded-lg transition-all ${
                  pkg.popular
                    ? 'bg-[#FF4500] hover:bg-[#E03E00] text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                } disabled:opacity-50`}
              >
                {isPurchasing && selectedPackage === pkg.id
                  ? 'Processing...'
                  : 'Purchase Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Credit Usage Info */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-5 text-center tracking-tight">
            How Credits Work
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">30-Second Video</h3>
              <p className="text-xl font-bold text-white mb-2">5 credits</p>
              <p className="text-xs text-gray-400">
                Perfect for quick social media content
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡⚡</div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">60-Second Video</h3>
              <p className="text-xl font-bold text-white mb-2">10 credits</p>
              <p className="text-xs text-gray-400">
                Great for detailed storytelling
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡⚡⚡</div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">90-Second Video</h3>
              <p className="text-xl font-bold text-white mb-2">20 credits</p>
              <p className="text-xs text-gray-400">
                Ideal for comprehensive content
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-5 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">Do credits expire?</h3>
              <p className="text-xs text-gray-400">
                No! Your credits never expire. Use them whenever you want to create videos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">Can I get a refund?</h3>
              <p className="text-xs text-gray-400">
                Yes, we offer a 7-day money-back guarantee if you&apos;re not satisfied with your purchase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">What payment methods do you accept?</h3>
              <p className="text-xs text-gray-400">
                We accept all major credit cards, PayPal, and various other payment methods through Stripe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-tight">Can I use videos commercially?</h3>
              <p className="text-xs text-gray-400">
                Yes! All videos you create come with a commercial license. Use them for your business, clients, or personal projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
