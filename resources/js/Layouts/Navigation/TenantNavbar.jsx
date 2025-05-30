import { useState } from 'react';

function TenantNavbar() {
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-gray-900">Driflux</div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Overview</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Log in</button>
          <button className="px-6 py-2 bg-[#2719FF] text-white rounded-lg hover:bg-[#1f14e6]">
            Get Started
          </button>
        </div>
      </nav>
} 
export default TenantNavbar;