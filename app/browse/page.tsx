import Link from 'next/link';
import Image from 'next/image';
import { mockVideos } from '@/lib/mock-data';

export default function BrowsePage() {
  const featuredVideo = mockVideos[0];
  const trendingVideos = mockVideos.slice(0, 4);
  const recentVideos = mockVideos.slice(2, 6);

  return (
    <div className="min-h-screen bg-black">
      {/* Featured Video Hero */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <Image
          src={featuredVideo.thumbnailUrl}
          alt={featuredVideo.title}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center px-4 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight leading-tight">
              {featuredVideo.title}
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-5 line-clamp-3 leading-relaxed font-normal">
              {featuredVideo.description}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-gray-400 font-medium">
                {featuredVideo.views.toLocaleString()} views
              </span>
              <span className="text-xs text-gray-600">•</span>
              <span className="text-xs text-gray-400 font-medium">
                {featuredVideo.likes} likes
              </span>
              <span className="text-xs text-gray-600">•</span>
              <span className="text-xs text-gray-400 font-medium">
                By {featuredVideo.creatorName}
              </span>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/video/${featuredVideo.id}`}
                className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                ▶ Play
              </Link>
              <button className="px-6 py-2.5 bg-gray-800/80 text-white text-sm font-medium rounded-lg hover:bg-gray-700/80 transition-all border border-gray-700">
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Videos */}
      <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5 tracking-tight">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingVideos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-2.5">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-medium">
                  {video.duration}s
                </div>
              </div>
              <h3 className="font-semibold text-sm line-clamp-2 mb-1 tracking-tight leading-snug">
                {video.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium">{video.creatorName}</p>
              <p className="text-xs text-gray-500 font-normal">
                {video.views.toLocaleString()} views
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Uploads */}
      <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5 tracking-tight">Recent Uploads</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentVideos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-2.5">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-medium">
                  {video.duration}s
                </div>
              </div>
              <h3 className="font-semibold text-sm line-clamp-2 mb-1 tracking-tight leading-snug">
                {video.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium">{video.creatorName}</p>
              <p className="text-xs text-gray-500 font-normal">
                {video.views.toLocaleString()} views
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* All Videos */}
      <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5 tracking-tight">All Videos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {mockVideos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-2.5">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-medium">
                  {video.duration}s
                </div>
              </div>
              <h3 className="font-semibold text-sm line-clamp-2 mb-1 tracking-tight leading-snug">
                {video.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium">{video.creatorName}</p>
              <p className="text-xs text-gray-500 font-normal">
                {video.views.toLocaleString()} views
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
