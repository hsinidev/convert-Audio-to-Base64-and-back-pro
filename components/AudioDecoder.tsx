
import React, { useState, useRef, useEffect } from 'react';

const DownloadIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const AudioDecoder: React.FC = () => {
    const [base64Input, setBase64Input] = useState<string>('');
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [fileExtension, setFileExtension] = useState<string>('mp3');
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Cleanup object URL to prevent memory leaks
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, [audioUrl]);
    
    const handleDecode = () => {
        if (!base64Input.trim()) {
            setError('Please paste a Base64 string.');
            setAudioUrl('');
            return;
        }

        try {
            const [header, data] = base64Input.split(',');
            if (!header || !data) throw new Error("Invalid Data URI format.");

            const mimeMatch = header.match(/:(.*?);/);
            if (!mimeMatch || !mimeMatch[1]) throw new Error("Could not determine MIME type from Data URI.");
            
            const mimeType = mimeMatch[1];
            if (!mimeType.startsWith('audio/')) throw new Error("The provided data is not an audio file.");
            
            setFileExtension(mimeType.split('/')[1] || 'mp3');

            const byteCharacters = atob(data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: mimeType });

            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }

            const newAudioUrl = URL.createObjectURL(blob);
            setAudioUrl(newAudioUrl);
            setError('');
        } catch (e: any) {
            setError(`Decoding failed: ${e.message}. Make sure it's a valid audio Data URI.`);
            setAudioUrl('');
        }
    };

    const handleDownload = () => {
        if (!audioUrl) return;
        const link = document.createElement('a');
        link.href = audioUrl;
        link.download = `decoded_audio.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col gap-6">
            <textarea
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                className="w-full h-40 p-3 bg-gray-900/50 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all resize-none"
                placeholder="Paste your Base64 audio Data URI here..."
                aria-label="Paste Base64 Input"
            />
            
            <button
                onClick={handleDecode}
                className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors"
            >
                Decode & Preview
            </button>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            {audioUrl && (
                <div className="flex flex-col items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-semibold text-lg text-cyan-300">Decoded Audio Preview</h3>
                    <audio ref={audioRef} controls src={audioUrl} className="w-full">
                        Your browser does not support the audio element.
                    </audio>
                    <button 
                        onClick={handleDownload}
                        className="w-full flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                    >
                        <DownloadIcon />
                        Download Audio
                    </button>
                </div>
            )}
        </div>
    );
};

export default AudioDecoder;
