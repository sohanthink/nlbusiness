"use client"

import React, { useState } from 'react'
import videobanner from "@/public/images/service/innerpages/videobanner.png";
import Image from 'next/image';
const Video = ({
    title = "Learn About Our History",
    videoId = "eoqe1xcvgx0",
}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    const handlePlayClick = () => {
        setIsPlaying(true)
        setShowVideo(true)
    }


    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    return (
        <div className="w-full relative h-[400px] md:h-[1000px]">
            {/* Purple Background Section - BELOW the video (as per screenshot) */}
            <div className={`w-full h-[250px] md:h-[500px] bg-primary absolute top-0 left-0 overflow-hidden`}>

                <Image src={videobanner} alt="videobanner" className="w-full h-full object-contain absolute inset-0" />

                <div className="pt-14 z-[999]">
                    <h2 className="!text-white text-center leading-tight animate-fade-in-up  drop-shadow-lg">
                        {title}
                    </h2>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-8 right-16 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-20 w-8 h-8 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
            {/* Video Section - Centered in Container (ON TOP) */}
            <div className="relative z-20 top-32 md:top-52">
                <div className="container">
                    <div>
                        {/* Video Player */}
                        <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                            {/* Video Frame */}
                            <div className="aspect-video bg-gray-900 relative">
                                {!showVideo ? (
                                    <>
                                        {/* YouTube Thumbnail */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={thumbnailUrl}
                                                alt="Video Thumbnail"
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                                }}
                                            />

                                            {/* Enhanced overlay for better play button visibility */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40"></div>
                                        </div>

                                        {/* Enhanced Purple Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button
                                                onClick={handlePlayClick}
                                                className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all duration-500 cursor-pointer group hover:scale-110 animate-pulse"
                                            >
                                                <div className="w-20 h-20 bg-white/20 rounded-full absolute inset-2 animate-ping"></div>
                                                <svg className="w-10 h-10 text-white ml-1 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </button>

                                            {/* Play button text */}
                                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                                                <span className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                                    Click to Play
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* YouTube Video Embed */}
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                                            title={title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>

                                        {/* Enhanced Close Button */}
                                        <button
                                            onClick={() => {
                                                setShowVideo(false)
                                                setIsPlaying(false)
                                            }}
                                            className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 backdrop-blur-sm hover:scale-110 shadow-lg"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Video