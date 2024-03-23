// page.tsx
import React from 'react';
import './HomePage.css';
import { GlobalFonts } from './ui/fonts'; // Import GlobalFonts

const HomePage = () => {
    return (
        <GlobalFonts>
            <div className="flex flex-col min-h-screen bg-gray-800 text-white">
                <div className="relative h-64 bg-blue-500 banner">
                    <img
                        src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/622f4f52652245b383845325_19.jpg"
                        alt="Banner" className="absolute h-full w-full object-cover"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p className="text-white text-5xl font-bold">NotesDev</p>
                    </div>
                </div>
                <div className="flex-grow p-6 content">
                    <h1 className="text-3xl mb-2 text-center font-bold">Your Personal Workspace Awaits</h1>
                    <h2 className="text-xl mb-4 text-center">Enter your notes below to get started</h2>
                    <div className="border-2 border-gray-700 rounded-lg p-4 bg-gray-900">
                        <div className="mb-4 flex items-center">
                            <input className="w-full p-2 rounded-lg" placeholder="Enter API key here"/>
                            <button className="ml-2 text-white p-2 rounded-lg confirm-button">Confirm</button>
                        </div>
                        <textarea className="w-full h-64 p-2 rounded-lg notes" placeholder="Enter notes here"></textarea>
                        <button className="ml-2 text-white p-2 rounded-lg confirm-button confirm-button-below">Generate Workspace
                        </button>
                    </div>
                </div>
                <footer className="bg-gray-900 text-white p-4">
                    <div className="flex justify-between">
                        <p>About Us</p>
                        <p>Contact</p>
                    </div>
                </footer>
            </div>
        </GlobalFonts>
    );
};

export default HomePage;