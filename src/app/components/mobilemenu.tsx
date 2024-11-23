// components/HamburgerMenu.tsx
'use client'
import { useState } from 'react'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-black"
        aria-label="Menu"
      >
        <div className={`w-6 h-[2px] bg-black mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-[2px] bg-black mb-1 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-[2px] bg-black ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-black hover:text-gray-600">Home</a>
            <a href="#" className="text-black hover:text-gray-600">Courses</a>
            <a href="#" className="text-black hover:text-gray-600">Services</a>
            <a href="#" className="text-black hover:text-gray-600">Achievement</a>
            <a href="#" className="text-black hover:text-gray-600">About Us</a>
            <a href="#" className="text-black hover:text-gray-600">Testimonials</a>
          </div>
        </div>
      )}
    </div>
  )
}
