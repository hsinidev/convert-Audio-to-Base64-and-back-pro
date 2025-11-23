
import React, { useState, useCallback } from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const UploadIcon: React.FC = () => (
    <svg className="w-12 h-12 text-gray-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z" />
    </svg>
);

const AudioEncoder: React.FC = () => {
    const [base64String, setBase64String] = useState<string>('');
    const [fileName, setFileName] = useState<string>('');
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [isCopied, copy] = useCopyToClipboard();

    const processFile = useCallback((file: File | null) => {
        if (!file) return;

        if (!file.type.startsWith('audio/')) {
            setError('Invalid file type. Please upload an audio file.');
            setBase64String('');
            setFileName('');
            return;
        }

        setError('');
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string;
            setBase64String(result);
        };
        reader.onerror = () => {
            setError('Failed to read the file.');
            setBase64String('');
            setFileName('');
        };
        reader.readAsDataURL(file);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        processFile(e.target.files?.[0] || null);
    };

    const handleDragEvents = (e: React.DragEvent<HTMLLabelElement>, dragging: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(dragging);
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        handleDragEvents(e, false);
        const file = e.dataTransfer.files?.[0] || null;
        processFile(file);
    };
    
    return (
        <div className="flex flex-col gap-6">
            <div>
                <label
                    htmlFor="audio-upload"
                    onDragEnter={(e) => handleDragEvents(e, true)}
                    onDragLeave={(e) => handleDragEvents(e, false)}
                    onDragOver={(e) => handleDragEvents(e, true)}
                    onDrop={handleDrop}
                    className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300 ${isDragging ? 'border-cyan-400 bg-white/10' : 'border-gray-600 hover:border-gray-500 hover:bg-white/5'}`}
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadIcon />
                        <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">Any audio format (MP3, WAV, OGG, etc.)</p>
                    </div>
                    <input id="audio-upload" type="file" className="hidden" accept="audio/*" onChange={handleFileChange} />
                </label>
                {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
            </div>

            {fileName && <p className="text-center text-gray-300">File: <span className="font-semibold text-cyan-300">{fileName}</span></p>}

            {base64String && (
                <div className="flex flex-col gap-4">
                    <textarea
                        readOnly
                        value={base64String}
                        className="w-full h-40 p-3 bg-gray-900/50 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all resize-none"
                        placeholder="Generated Base64 Data URI..."
                        aria-label="Generated Base64 Output"
                    />
                    <button
                        onClick={() => copy(base64String)}
                        className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isCopied ? 'Copied!' : 'Copy Base64'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AudioEncoder;
