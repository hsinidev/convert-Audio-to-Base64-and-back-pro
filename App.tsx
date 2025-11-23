import React, { useState } from 'react';
import { ConversionMode, ModalType } from './types';
import AudioEncoder from './components/AudioEncoder';
import AudioDecoder from './components/AudioDecoder';
import Modal from './components/Modal';
import GalaxyBackground from './components/GalaxyBackground';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  const [mode, setMode] = useState<ConversionMode>(ConversionMode.ENCODE);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const getModalContent = () => {
    switch (activeModal) {
      case 'about':
        return {
          title: 'About Audio to Base64 Converter',
          content: (
            <div className="space-y-4 text-gray-300">
              <p>Welcome to <strong>doodax.com</strong>'s premier audio conversion tool. This application is engineered to provide developers, content creators, and audio enthusiasts with a seamless way to transform binary audio files into Base64 strings and vice versa.</p>
              <p>Built with modern web technologies including React and TypeScript, our priority is <strong>security and performance</strong>. Unlike traditional converters that require server-side processing, this tool runs 100% on your client device.</p>
              <p>Whether you are embedding sound effects into a web application, preparing JSON payloads for an API, or simply debugging audio data, this tool offers a robust, private, and efficient solution.</p>
            </div>
          ),
        };
      case 'guide':
        return {
          title: 'User Guide & Documentation',
          content: (
             <div className="space-y-4 text-gray-300 text-sm">
                <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-bold text-cyan-300 mb-2">How to Encode (Audio to Text)</h3>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Navigate to the <strong>"Encode"</strong> tab.</li>
                        <li>Drag and drop your audio file (MP3, WAV, OGG, etc.) into the designated area, or click to browse.</li>
                        <li>Wait for the processing to complete (usually instant).</li>
                        <li>Click the <strong>"Copy Base64"</strong> button to copy the result to your clipboard.</li>
                    </ol>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-bold text-cyan-300 mb-2">How to Decode (Text to Audio)</h3>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Navigate to the <strong>"Decode"</strong> tab.</li>
                        <li>Paste your Base64 string into the text area.</li>
                        <li>Click <strong>"Decode & Preview"</strong>.</li>
                        <li>Use the audio player to listen, or click <strong>"Download Audio"</strong> to save the file.</li>
                    </ol>
                </div>
            </div>
          ),
        };
      case 'contact':
        return {
          title: 'Contact Information',
          content: (
            <div className="space-y-4 text-gray-300">
                <p>We value your feedback and are here to assist with any inquiries regarding the Audio to Base64 Converter.</p>
                <div className="bg-white/5 p-4 rounded-lg">
                    <p className="mb-2"><span className="font-bold text-cyan-300">Website:</span> doodax.com</p>
                    <p><span className="font-bold text-cyan-300">Email:</span> hsini.web@gmail.com</p>
                </div>
                <p>For technical support, bug reports, or feature requests, please reach out via email. We aim to respond to all valid inquiries within 24-48 hours.</p>
            </div>
          ),
        };
      case 'privacy':
        return {
            title: 'Privacy Policy',
            content: (
                <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong>Effective Date:</strong> May 2024</p>
                    <p>At <strong>doodax.com</strong>, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Audio to Base64 Converter and how we use it.</p>
                    <h4 className="font-bold text-white mt-2">Local Processing Only</h4>
                    <p>This application operates entirely on the client-side (in your web browser). When you select an audio file to convert, the processing happens within your device's memory. <strong>No files are ever uploaded to our servers.</strong> We do not store, view, or share your audio data.</p>
                    <h4 className="font-bold text-white mt-2">Log Files</h4>
                    <p>Like many other Web sites, doodax.com makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information.</p>
                    <h4 className="font-bold text-white mt-2">Cookies</h4>
                    <p>We do not use cookies to track personal information for this specific tool. However, third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</p>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </div>
            )
        };
      case 'terms':
          return {
              title: 'Terms of Service',
              content: (
                <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong>1. Acceptance of Terms</strong></p>
                    <p>By accessing and using this website (doodax.com), you accept and agree to be bound by the terms and provision of this agreement.</p>
                    <p><strong>2. Use License</strong></p>
                    <p>Permission is granted to temporarily use the materials (software) on doodax.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    <p><strong>3. Disclaimer</strong></p>
                    <p>The materials on doodax.com's website are provided "as is". doodax.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    <p><strong>4. Limitations</strong></p>
                    <p>In no event shall doodax.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on doodax.com's website.</p>
                </div>
              )
          };
      case 'dmca':
        return {
            title: 'DMCA Copyright Policy',
            content: (
                <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong>Digital Millennium Copyright Act Notice</strong></p>
                    <p>doodax.com respects the intellectual property rights of others. Since this tool operates entirely on the client-side, we do not host, store, or transmit user-generated content on our servers. The conversion process occurs locally on the user's device.</p>
                    <p>However, if you believe that any material accessible on or from this site infringes your copyright, you may request removal of those materials (or access thereto) from this website by contacting our copyright agent.</p>
                    <div className="bg-white/5 p-3 rounded">
                        <p><strong>Contact Email:</strong> hsini.web@gmail.com</p>
                        <p>Please provide sufficient information to identify the copyrighted work and the allegedly infringing material.</p>
                    </div>
                </div>
            )
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getModalContent();
  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Privacy', modal: 'privacy' },
    { label: 'Terms', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <>
      <GalaxyBackground />
      <div className="relative min-h-screen text-white flex flex-col items-center justify-start p-4 font-sans overflow-y-auto">
        
        <header className="w-full max-w-5xl mx-auto p-6 z-20 flex flex-col md:flex-row justify-between items-center border-b border-white/10 bg-slate-900/40 backdrop-blur-sm rounded-b-2xl mb-8">
            <div className="font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 md:mb-0">
                DOODAX<span className="text-white text-xs align-top opacity-50 ml-1">TOOLS</span>
            </div>
            <nav className="flex justify-center items-center gap-6 flex-wrap">
                {navLinks.map(link => (
                    <button key={link.label} onClick={() => setActiveModal(link.modal)} className="text-gray-400 hover:text-cyan-300 transition-colors text-sm font-medium uppercase tracking-wide">
                        {link.label}
                    </button>
                ))}
            </nav>
        </header>

        <main className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center flex-grow">
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-white to-purple-300 drop-shadow-sm animate-float">
                Audio Converter
            </h1>
            <p className="text-lg md:text-xl text-cyan-100/80 font-light max-w-2xl mx-auto">
                Securely convert Audio to Base64 and back. <br className="hidden md:block"/>
                100% Client-Side. No Server Uploads.
            </p>
          </div>

          <div className="w-full bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden ring-1 ring-white/5">
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setMode(ConversionMode.ENCODE)}
                className={`flex-1 p-5 text-lg font-bold tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${mode === ConversionMode.ENCODE ? 'bg-gradient-to-b from-white/10 to-transparent text-cyan-300 border-b-2 border-cyan-400' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}
              >
                ENCODE <span className="text-xs font-normal opacity-60 block md:inline md:ml-2">Audio ➜ Base64</span>
              </button>
              <button
                onClick={() => setMode(ConversionMode.DECODE)}
                className={`flex-1 p-5 text-lg font-bold tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${mode === ConversionMode.DECODE ? 'bg-gradient-to-b from-white/10 to-transparent text-cyan-300 border-b-2 border-cyan-400' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}
              >
                DECODE <span className="text-xs font-normal opacity-60 block md:inline md:ml-2">Base64 ➜ Audio</span>
              </button>
            </div>
            <div className="p-6 md:p-10">
              {mode === ConversionMode.ENCODE ? <AudioEncoder /> : <AudioDecoder />}
            </div>
          </div>
          
          <SeoArticle /> 

        </main>

        <footer className="w-full max-w-4xl mx-auto text-center z-20 py-8 border-t border-white/10 mt-12">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
                Powered by 
                <a 
                    href="https://github.com/hsinidev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors flex items-center gap-1"
                >
                    HSINI MOHAMED
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
            </p>
            <p className="text-xs text-gray-600">hsini.web@gmail.com</p>
          </div>
        </footer>
        
        <Modal isOpen={activeModal !== null} onClose={() => setActiveModal(null)} title={title}>
            {content}
        </Modal>
      </div>
    </>
  );
};

export default App;