import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Left section of the footer (visible on medium and larger screens) */}
        <div className="md:mb-0 mb-4">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>

        {/* Right section of the footer (visible on medium and larger screens) */}
        <div>
          <a href="#" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">Contact Us</a>
        </div>
      </div>

      {/* Bottom section of the footer (visible on small screens) */}
      <div className="md:hidden text-sm mt-4">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <div>
          <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
          <a href="#" className="text-white hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer