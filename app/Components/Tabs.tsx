"use client"
// components/Tabs.js
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('jobPreview');

  const tabs = [
    { id: 'jobPreview', label: 'Job preview' },
    { id: 'applicants', label: 'Applicants' },
    { id: 'match', label: 'Match' },
    { id: 'messages', label: 'Messages' },
  ];

  return (
    <div className="border pt-4 border-[#E7E7E7] px-4 lg:px-16 w-screen">
      <nav className="-mb-px flex items-center gap-10 lg:gap-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative whitespace-nowrap pb-4 px-1 font-semibold text-lg ${
              activeTab === tab.id
                ? 'text-[#DC4A2D] font-semibold'
                : 'text-[#888888] hover:text-gray-700'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 border-red-500"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
