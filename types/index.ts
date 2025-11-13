export interface User {
  id: string;
  email: string;
  name: string;
  credits: number;
  createdAt: Date;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  prompt: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  views: number;
  likes: number;
  creatorId: string;
  creatorName: string;
  createdAt: Date;
  status: 'processing' | 'completed' | 'failed';
  aspectRatio: '16:9' | '9:16' | '1:1';
}

export interface VideoGeneration {
  id: string;
  prompt: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  videoId?: string;
  createdAt: Date;
  estimatedTime?: number;
}
