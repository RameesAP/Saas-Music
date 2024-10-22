"use client"

import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { ChevronUp, ChevronDown, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Video = {
  id: string
  title: string
  votes: number
  thumbnail: string
}

export default function Dashboard() {
  const [videoLink, setVideoLink] = useState('')
  const [queue, setQueue] = useState<Video[]>([
    { id: 'dQw4w9WgXcQ', title: 'Rick Astley - Never Gonna Give You Up', votes: 5, thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg' },
    { id: 'kJQP7kiw5Fk', title: 'Luis Fonsi - Despacito ft. Daddy Yankee', votes: 3, thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/default.jpg' },
    { id: 'JGwWNGJdvx8', title: 'Ed Sheeran - Shape of You', votes: 2, thumbnail: 'https://img.youtube.com/vi/JGwWNGJdvx8/default.jpg' },
  ])
  const [currentVideo, setCurrentVideo] = useState('dQw4w9WgXcQ')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const videoId = extractVideoId(videoLink)
    if (videoId) {
      const videoInfo = await fetchVideoInfo(videoId)
      setQueue([...queue, { ...videoInfo, votes: 0 }])
      setVideoLink('')
    }
  }

  const handleVote = (id: string, increment: number) => {
    setQueue(queue.map(video => 
      video.id === id ? { ...video, votes: video.votes + increment } : video
    ).sort((a, b) => b.votes - a.votes))
  }

  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const fetchVideoInfo = async (videoId: string) => {
    // In a real application, you would fetch this data from the YouTube API
    // For this example, we'll just return a placeholder title and thumbnail
    return {
      id: videoId,
      title: `Video ${videoId}`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Currently Playing</h2>
            <div className="bg-gray-800 p-2 rounded">
              <YouTube videoId={currentVideo} opts={{ width: '100%', height: '360' }} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Add to Queue</h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="Paste YouTube video link"
                  className="flex-grow bg-gray-800 text-gray-100 border-gray-700"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Add</Button>
              </div>
            </form>
            {videoLink && extractVideoId(videoLink) && (
              <div className="mb-4 bg-gray-800 p-2 rounded">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Preview</h3>
                <YouTube videoId={extractVideoId(videoLink)!} opts={{ width: '100%', height: '200' }} />
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold my-4 text-purple-400">Upcoming Songs</h2>
          <ul className="space-y-2">
            {queue.map((video) => (
              <li key={video.id} className="flex items-center justify-between bg-gray-800 p-2 rounded">
                <div className="flex items-center gap-2 flex-grow">
                  <img src={video.thumbnail} alt={video.title} className="w-16 h-12 object-cover rounded" />
                  <span className="font-medium">{video.title}</span>
                </div>
                <span className="flex items-center gap-2">
                  <Button size="icon" variant="outline" onClick={() => handleVote(video.id, 1)} className="border-gray-700 text-purple-400 hover:bg-gray-700">
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <span className="font-bold min-w-[2ch] text-center text-purple-400">{video.votes}</span>
                  <Button size="icon" variant="outline" onClick={() => handleVote(video.id, -1)} className="border-gray-700 text-purple-400 hover:bg-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" onClick={() => setCurrentVideo(video.id)} className="border-gray-700 text-purple-400 hover:bg-gray-700">
                    <Play className="h-4 w-4" />
                  </Button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}