import Link from 'next/link';
import Image from 'next/image';
import { mockVideos } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = mockVideos.find((v) => v.id === id);

  if (!video) {
    notFound();
  }

  const relatedVideos = mockVideos.filter((v) => v.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-5">
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="w-16 h-16 bg-[#FF4500] rounded-full flex items-center justify-center hover:bg-[#E03E00] transition-all hover:scale-110 shadow-lg">
                  <span className="text-2xl ml-1 text-white">▶</span>
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-medium">
                {video.duration}s
              </div>
            </div>

            {/* Video Info */}
            <div className="mb-5">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{video.title}</h1>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-semibold text-sm border border-gray-700">
                    {video.creatorName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{video.creatorName}</p>
                    <p className="text-xs text-gray-400">Creator</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-800 rounded-lg text-xs font-semibold hover:bg-gray-700 transition-all flex items-center gap-2 border border-gray-700">
                    <span>👍</span>
                    {video.likes}
                  </button>
                  <button className="px-4 py-2 bg-gray-800 rounded-lg text-xs font-semibold hover:bg-gray-700 transition-all border border-gray-700">
                    Share
                  </button>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <span className="font-medium text-white">
                    {video.views.toLocaleString()} views
                  </span>
                  <span className="text-gray-400">
                    {video.createdAt.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-sm mb-2 tracking-tight">Description</h3>
                  <p className="text-xs text-gray-400">{video.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-2 tracking-tight">AI Prompt Used</h3>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                    <code className="text-xs text-gray-300">{video.prompt}</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section Placeholder */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-lg font-bold mb-4 tracking-tight">Comments</h3>
              <div className="text-center py-8 text-xs text-gray-500">
                Comments coming soon...
              </div>
            </div>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <h2 className="text-xl md:text-2xl font-bold mb-5 tracking-tight">Related Videos</h2>
            <div className="space-y-3">
              {relatedVideos.map((relatedVideo) => (
                <Link
                  key={relatedVideo.id}
                  href={`/video/${relatedVideo.id}`}
                  className="flex gap-2 group"
                >
                  <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={relatedVideo.thumbnailUrl}
                      alt={relatedVideo.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 px-2 py-0.5 rounded text-xs font-medium">
                      {relatedVideo.duration}s
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1 tracking-tight leading-snug group-hover:text-white transition-colors">
                      {relatedVideo.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mb-1">
                      {relatedVideo.creatorName}
                    </p>
                    <p className="text-xs text-gray-500 font-normal">
                      {relatedVideo.views.toLocaleString()} views
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center">
              <h3 className="text-base font-bold mb-2 tracking-tight">Create Your Own</h3>
              <p className="text-xs text-gray-400 mb-4">
                Start making AI videos like this one
              </p>
              <Link
                href="/create"
                className="block w-full px-4 py-2.5 bg-[#FF4500] text-white text-xs font-semibold rounded-lg hover:bg-[#E03E00] transition-all"
              >
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
