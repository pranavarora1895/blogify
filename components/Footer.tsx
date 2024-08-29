'use client';
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
                {/* About Me Section */}
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold">About Me</h3>
                    <p className="text-sm md:w-1/2">
                        I&apos;m <a className='text-yellow-300 underline' rel="noopener noreferrer" href="https://github.com/pranavarora1895" target='_blank'>Pranav Arora</a>, a passionate developer committed to creating impactful solutions. I love building projects that help others learn, share, and grow in their fields.
                    </p>
                </div>

                {/* Feedback Link */}
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold">Feedback</h3>
                    <p className="text-sm">
                        Found an issue or have suggestions? Feel free to provide feedback on our
                        <a href="https://github.com/pranavarora1895/blogify.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> GitHub repository</a>.
                    </p>
                </div>

                {/* Copyright Notice */}
            </div>
            <div className="container text-center border-t border-gray-700 pt-4 text-sm">
                <p>
                    &copy; Blogify 2024. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer