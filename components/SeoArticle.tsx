import React, { useState } from 'react';

const ChevronDown: React.FC = () => (
    <svg className="w-5 h-5 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full max-w-4xl mx-auto z-10 my-12 p-6 md:p-10 bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/5 text-gray-300">
            <div className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[8000px]' : 'max-h-20'}`}>
                
                {/* Intro Section - Visible initially (partially) */}
                <h2 className="text-3xl font-extrabold text-cyan-300 mb-6">The Ultimate Guide to Audio to Base64 Conversion</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-200">
                        In the modern landscape of web development, handling media assets efficiently is crucial. 
                        <strong>Audio to Base64 conversion</strong> is a powerful technique that allows developers to embed sound files directly into code, eliminating the need for external file requests.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Table of Contents</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                        <li>What is Base64 Encoding?</li>
                        <li>Why Convert Audio to Base64?</li>
                        <li>How Our Converter Works</li>
                        <li>Supported Audio Formats</li>
                        <li>Developer Guide: Implementing Base64 Audio</li>
                        <li>Advantages and Disadvantages</li>
                        <li>Frequently Asked Questions (FAQ)</li>
                    </ul>

                    <hr className="my-8 border-white/10" />

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">1. What is Base64 Encoding?</h3>
                    <p>
                        Base64 is a binary-to-text encoding scheme that represents binary data in an American Standard Code for Information Interchange (ASCII) string format. It is designed to carry data stored in binary formats across channels that only reliably support text content.
                    </p>
                    <p>
                        When you look at a raw image or audio file, the computer sees a sequence of bytes. Base64 translates these bytes into a readable string of characters (A-Z, a-z, 0-9, +, /). This allows binary data, such as an MP3 file, to be transported over text-based protocols like HTTP, JSON, or XML without corruption.
                    </p>

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">2. Why Convert Audio to Base64?</h3>
                    <p>There are several compelling reasons for developers and engineers to use Base64 encoding for audio:</p>
                    <ul className="space-y-4 mt-4">
                        <li className="bg-white/5 p-4 rounded-lg border-l-4 border-purple-500">
                            <strong>Reduced HTTP Requests:</strong> By embedding small audio files (like notification sounds) directly into your HTML or CSS as Data URIs, you save the browser from making a separate network request to fetch the file. This can speed up the initial rendering of a page.
                        </li>
                        <li className="bg-white/5 p-4 rounded-lg border-l-4 border-purple-500">
                            <strong>API Compatibility:</strong> Many modern APIs, especially those built on REST or GraphQL, communicate via JSON. JSON is a text-based format and cannot natively handle binary data. To send an audio recording to a server via a JSON payload, it must first be encoded into a Base64 string.
                        </li>
                        <li className="bg-white/5 p-4 rounded-lg border-l-4 border-purple-500">
                            <strong>Database Storage:</strong> While not always recommended for large files, storing small audio clips directly in a database (like MongoDB or SQL) as text strings can simplify architecture by removing the need for a separate file storage service (like AWS S3).
                        </li>
                        <li className="bg-white/5 p-4 rounded-lg border-l-4 border-purple-500">
                            <strong>Single-File Portability:</strong> If you are building a self-contained HTML game or a newsletter, embedding assets ensures that the recipient doesn't need to be online or have access to a specific server to hear the audio.
                        </li>
                    </ul>

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">3. Supported Audio Formats</h3>
                    <p>Our tool supports the entire spectrum of web-compatible audio formats. Here is a breakdown of the most common types you can convert:</p>
                    <div className="overflow-x-auto my-6">
                        <table className="min-w-full divide-y divide-gray-700 bg-black/20 rounded-lg">
                            <thead>
                                <tr className="bg-white/10">
                                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-300 uppercase">Format</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-300 uppercase">MIME Type</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-300 uppercase">Best Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr>
                                    <td className="px-6 py-4 font-medium">MP3</td>
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">audio/mpeg</td>
                                    <td className="px-6 py-4 text-sm">General music, podcasts, compatibility.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">WAV</td>
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">audio/wav</td>
                                    <td className="px-6 py-4 text-sm">High-fidelity uncompressed audio.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">OGG</td>
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">audio/ogg</td>
                                    <td className="px-6 py-4 text-sm">Web applications, open-source projects.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">AAC</td>
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">audio/aac</td>
                                    <td className="px-6 py-4 text-sm">High-quality streaming, Apple devices.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">FLAC</td>
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">audio/flac</td>
                                    <td className="px-6 py-4 text-sm">Lossless archiving.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">4. Developer Guide: Using Base64 Audio</h3>
                    <p>Once you have converted your file using our tool, here is how you can use the output string in your projects.</p>
                    
                    <h4 className="text-xl font-semibold text-white mt-6 mb-2">HTML Audio Element</h4>
                    <pre className="bg-slate-900 p-4 rounded-md border border-gray-700 overflow-x-auto text-sm text-green-400 font-mono">
{`<audio controls>
  <source src="data:audio/mp3;base64,//uQxAAAA..." type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
                    </pre>

                    <h4 className="text-xl font-semibold text-white mt-6 mb-2">JavaScript Playback</h4>
                    <pre className="bg-slate-900 p-4 rounded-md border border-gray-700 overflow-x-auto text-sm text-green-400 font-mono">
{`const audio = new Audio("data:audio/mp3;base64,//uQxAAAA...");
audio.play();`}
                    </pre>

                    <h4 className="text-xl font-semibold text-white mt-6 mb-2">JSON Payload</h4>
                    <pre className="bg-slate-900 p-4 rounded-md border border-gray-700 overflow-x-auto text-sm text-green-400 font-mono">
{`{
  "userId": 123,
  "voiceNote": "data:audio/ogg;base64,//uQxAAAA..."
}`}
                    </pre>

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">5. Pros and Cons of Base64</h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-green-900/20 p-5 rounded-lg border border-green-500/30">
                            <h4 className="font-bold text-green-400 mb-2">Advantages</h4>
                            <ul className="list-disc pl-4 space-y-2 text-sm">
                                <li>Immediate loading; no handshake latency.</li>
                                <li>Encapsulation of all assets in one file.</li>
                                <li>Bypasses cross-origin resource sharing (CORS) issues.</li>
                                <li>Simple implementation for small assets.</li>
                            </ul>
                        </div>
                        <div className="bg-red-900/20 p-5 rounded-lg border border-red-500/30">
                            <h4 className="font-bold text-red-400 mb-2">Disadvantages</h4>
                            <ul className="list-disc pl-4 space-y-2 text-sm">
                                <li><strong>Size Inflation:</strong> Base64 strings are approx. 33% larger than the original binary file.</li>
                                <li><strong>Caching:</strong> Browsers cannot cache Base64 data separately from the document (HTML/CSS) it is embedded in.</li>
                                <li><strong>Performance:</strong> Parsing huge strings can block the main thread.</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">6. Frequently Asked Questions (FAQ)</h3>
                    
                    <div className="space-y-4">
                        <details className="group bg-white/5 rounded-lg">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white group-hover:text-cyan-300">
                                <span>Is this tool free to use?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="group-open:animate-fadeIn mt-0 px-4 pb-4 text-gray-300">
                                Yes, the Audio to Base64 Converter is 100% free and open-source. There are no hidden fees or subscriptions.
                            </div>
                        </details>

                        <details className="group bg-white/5 rounded-lg">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white group-hover:text-cyan-300">
                                <span>Is there a file size limit?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="group-open:animate-fadeIn mt-0 px-4 pb-4 text-gray-300">
                                Technically, the limit is defined by your browser's memory (RAM). However, for performance reasons, we recommend sticking to files under 50MB. Base64 is not designed for massive audio tracks.
                            </div>
                        </details>

                        <details className="group bg-white/5 rounded-lg">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white group-hover:text-cyan-300">
                                <span>Is my data secure?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="group-open:animate-fadeIn mt-0 px-4 pb-4 text-gray-300">
                                Absolutely. We use client-side execution. Your audio files are processed by JavaScript directly in your browser and are never sent to any external server.
                            </div>
                        </details>
                    </div>

                    <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">Conclusion</h3>
                    <p>
                        Converting audio to Base64 is a fundamental skill for web developers working with modern data constraints. Whether you are optimizing a website for speed by reducing requests or building a complex application that transmits media via JSON, our tool provides the reliable, secure, and fast solution you need. Bookmark this page for all your future audio encoding needs!
                    </p>
                </div>
                
                {/* Gradient fade overlay when collapsed */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent"></div>
                )}
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center gap-2 mt-4 py-3 px-6 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl font-semibold transition-all duration-300 text-cyan-300 group"
            >
                <span>{isExpanded ? 'Collapse Article' : 'Read Full Guide'}</span>
                <div className={`${isExpanded ? 'rotate-180' : ''} transition-transform duration-300 group-hover:translate-y-0.5`}>
                    <ChevronDown />
                </div>
            </button>
        </div>
    );
};

export default SeoArticle;