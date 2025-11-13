'use client';

import { useState } from 'react';
import { mockUser } from '@/lib/mock-data';

export default function CreatePage() {
  const [prompt, setPrompt] = useState('');
  const [audioPrompt, setAudioPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [imageSource, setImageSource] = useState<'upload' | 'generate'>('generate');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Image generation params
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16' | '1:1'>('16:9');
  const [imageModel, setImageModel] = useState<'standard' | 'pro'>('standard');

  // Video generation params
  const [motionStrength, setMotionStrength] = useState(127);
  const [steps, setSteps] = useState(30);
  const [seed, setSeed] = useState(-1);

  const creditCost = selectedDuration * 2;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Video generation started! Check "My Videos" to see progress.');
      setPrompt('');
      setAudioPrompt('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 md:px-12 py-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              Create
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{mockUser.credits} credits</span>
            <button
              type="submit"
              form="create-form"
              disabled={!prompt.trim() || isGenerating || mockUser.credits < creditCost}
              className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>

        {/* Prompt Input */}
        <form id="create-form" onSubmit={handleGenerate}>
          <div className="mb-8">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your video..."
              className="w-full bg-transparent border-b border-gray-800 px-0 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 transition-colors resize-none"
              rows={2}
              disabled={isGenerating}
            />
          </div>

          {/* Settings */}
          <div className="space-y-10">
            {/* Image Source */}
            <div>
              <h3 className="text-xs font-medium text-gray-400 mb-4">Image</h3>
              <div className="flex gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setImageSource('generate')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    imageSource === 'generate'
                      ? 'text-white bg-white/10'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  Generate
                </button>
                <button
                  type="button"
                  onClick={() => setImageSource('upload')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    imageSource === 'upload'
                      ? 'text-white bg-white/10'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  Upload
                </button>
              </div>

              {imageSource === 'upload' && (
                <div className="border border-dashed border-gray-800 rounded-lg p-12 text-center hover:border-gray-700 transition-colors cursor-pointer">
                  <p className="text-xs text-gray-500">Drop file or click to upload</p>
                </div>
              )}

              {imageSource === 'generate' && (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 mb-2">Aspect Ratio</label>
                    <div className="flex gap-1.5">
                      {(['16:9', '1:1', '9:16'] as const).map((ratio) => (
                        <button
                          key={ratio}
                          type="button"
                          onClick={() => setAspectRatio(ratio)}
                          className={`flex-1 px-2 py-1.5 text-xs font-medium rounded transition-colors ${
                            aspectRatio === ratio
                              ? 'text-white bg-white/10'
                              : 'text-gray-500 hover:text-gray-300'
                          }`}
                        >
                          {ratio}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-2">Model</label>
                    <div className="flex gap-1.5">
                      {(['standard', 'pro'] as const).map((model) => (
                        <button
                          key={model}
                          type="button"
                          onClick={() => setImageModel(model)}
                          className={`flex-1 px-2 py-1.5 text-xs font-medium rounded transition-colors capitalize ${
                            imageModel === model
                              ? 'text-white bg-white/10'
                              : 'text-gray-500 hover:text-gray-300'
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Parameters */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-500">Duration</label>
                  <span className="text-xs text-gray-400">{selectedDuration}s</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="10"
                  step="5"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(Number(e.target.value))}
                  className="w-full h-[2px] bg-gray-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:bg-gray-300 [&::-webkit-slider-thumb]:transition"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-500">Motion</label>
                  <span className="text-xs text-gray-400">{motionStrength}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={motionStrength}
                  onChange={(e) => setMotionStrength(Number(e.target.value))}
                  className="w-full h-[2px] bg-gray-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:bg-gray-300 [&::-webkit-slider-thumb]:transition"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-500">Steps</label>
                  <span className="text-xs text-gray-400">{steps}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  value={steps}
                  onChange={(e) => setSteps(Number(e.target.value))}
                  className="w-full h-[2px] bg-gray-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:bg-gray-300 [&::-webkit-slider-thumb]:transition"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2">Seed</label>
                <input
                  type="number"
                  value={seed}
                  onChange={(e) => setSeed(Number(e.target.value))}
                  placeholder="-1"
                  className="w-full bg-transparent border-b border-gray-900 px-0 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gray-800 transition-colors"
                />
              </div>
            </div>

            {/* Audio */}
            <div>
              <h3 className="text-xs font-medium text-gray-400 mb-3">Audio (optional)</h3>
              <textarea
                value={audioPrompt}
                onChange={(e) => setAudioPrompt(e.target.value)}
                placeholder="Describe audio, music, or narration..."
                className="w-full bg-transparent border-b border-gray-900 px-0 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-800 transition-colors resize-none"
                rows={2}
                disabled={isGenerating}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
