import Link from 'next/link';
import Image from 'next/image';
import { mockVideos, mockUser } from '@/lib/mock-data';

export default function MyVideosPage() {
  // Filter videos by current user
  const myVideos = mockVideos.filter((video) => video.creatorId === mockUser.id);
  const processingVideos = [
    {
      id: 'temp-1',
      prompt: 'A magical forest with glowing mushrooms and fireflies',
      status: 'processing' as const,
      createdAt: new Date(),
      estimatedTime: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="px-4 md:px-12 pt-10 pb-8 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">My Videos</h1>
        <p className="text-sm text-gray-400">
          Manage and track all your AI-generated videos
        </p>
      </div>

      {/* Stats */}
      <div className="px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs mb-2">Total Videos</p>
            <p className="text-2xl font-bold text-white">{myVideos.length}</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs mb-2">Total Views</p>
            <p className="text-2xl font-bold text-white">
              {myVideos.reduce((sum, v) => sum + v.views, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs mb-2">Total Likes</p>
            <p className="text-2xl font-bold text-white">
              {myVideos.reduce((sum, v) => sum + v.likes, 0)}
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs mb-2">Credits</p>
            <p className="text-2xl font-bold text-white">⚡ {mockUser.credits}</p>
          </div>
        </div>
      </div>

      {/* Processing Videos */}
      {processingVideos.length > 0 && (
        <section className="px-4 md:px-12 max-w-7xl mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-5 tracking-tight flex items-center gap-2">
            <span className="animate-pulse">⚡</span>
            Processing Videos
          </h2>
          <div className="space-y-4">
            {processingVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <p className="font-semibold text-sm mb-2 tracking-tight">{video.prompt}</p>
                    <p className="text-xs text-gray-400">
                      Started {video.createdAt.toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white font-semibold mb-1">
                      Processing...
                    </p>
                    <p className="text-xs text-gray-500">
                      Est. {video.estimatedTime}s remaining
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-2/3 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* My Published Videos */}
      <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Published Videos</h2>
            <Link
              href="/create"
              className="px-5 py-2.5 bg-[#FF4500] text-white text-sm font-semibold rounded-lg hover:bg-[#E03E00] transition-all"
            >
              + Create New Video
          </Link>
        </div>

        {myVideos.length === 0 ? (
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2 tracking-tight">No videos yet</h3>
            <p className="text-sm text-gray-400 mb-6">
              Create your first AI video to get started
            </p>
            <Link
              href="/create"
              className="inline-block px-6 py-3 bg-[#FF4500] text-white text-sm font-semibold rounded-lg hover:bg-[#E03E00] transition-all"
            >
              Create Your First Video
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-white transition-all group"
              >
                <Link href={`/video/${video.id}`}>
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-medium">
                      {video.duration}s
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/video/${video.id}`}>
                    <h3 className="font-semibold text-sm mb-2 hover:text-white transition-colors line-clamp-1 tracking-tight">
                      {video.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span>{video.views.toLocaleString()} views</span>
                    <span>•</span>
                    <span>{video.likes} likes</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/video/${video.id}`}
                      className="flex-1 px-4 py-2 bg-[#FF4500] text-white text-xs font-semibold rounded-lg hover:bg-[#E03E00] transition-all text-center"
                    >
                      View
                    </Link>
                    <button className="px-3 py-2 bg-gray-800 text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-700 hover:text-white transition-all border border-gray-700">
                      Edit
                    </button>
                    <button className="px-3 py-2 bg-red-900/20 text-red-400 text-xs font-medium rounded-lg hover:bg-red-900/30 transition-all border border-red-900/30">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
