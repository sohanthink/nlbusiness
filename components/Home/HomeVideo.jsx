"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import { FaPlay, FaTimes } from 'react-icons/fa'

import videoThumbnail from "@/public/images/home/videobanner.png"
import videoThumbnail2 from "@/public/images/home/videobanner2.png"

const HomeVideo = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openVideo = (url) => {
        setVideoUrl(url);
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
        setVideoUrl('');
    };

    // YouTube video ID - replace with your actual video ID
    const youtubeVideoId = 'dQw4w9WgXcQ'; // Example video ID
    const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

    return (
        <>
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Column - Collaboration Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={videoThumbnail}
                                    alt="Team collaboration meeting"
                                    width={600}
                                    height={500}
                                    className="w-full h-[400px] md:h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column - Purple Banner and Video Player */}
                        <div className="space-y-6 lg:space-y-8">

                            {/* Purple Banner */}
                            <div className="bg-primary rounded-2xl p-6 md:p-8 text-white shadow-lg">
                                <h2 className='!text-white pb-6'>
                                    Expand Your Client Base Delivering Exceptional Service
                                </h2>
                                <Button
                                    text="BECOME A PARTNER"
                                    link="/partner"
                                    cn="bg-white text-primary"
                                />
                            </div>

                            {/* Video Player */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                <div className="relative">
                                    <Image
                                        src={videoThumbnail2}
                                        alt="Video thumbnail"
                                        width={400}
                                        height={200}
                                        className="w-full h-[200px] md:h-[200px] object-cover"
                                    />

                                    {/* Play Button at Top */}
                                    <div className="absolute top-4 right-4">
                                        <button
                                            onClick={() => openVideo(youtubeUrl)}
                                            className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group-hover:bg-primary/90"
                                        >
                                            <FaPlay className="text-white text-sm md:text-base ml-0.5" />
                                        </button>
                                    </div>

                                    {/* Play Video Text */}
                                    <div className="absolute bottom-4 left-4 text-white font-medium bg-black bg-opacity-50 px-3 py-1 rounded-lg">
                                        Play Video
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Popup Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-10 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={closeVideo}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-300"
                        >
                            <FaTimes className="text-lg" />
                        </button>

                        {/* Video Container */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                src={videoUrl}
                                title="YouTube video"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomeVideo