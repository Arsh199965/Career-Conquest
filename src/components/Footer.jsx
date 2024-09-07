const Footer = ()=> {
    return (
        <footer className="bg-gray-50 py-8 mt-12 border-t border-gray-300">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-8">
    
    {/* Left Section */}
    <div className="lg:w-1/3 mb-6 lg:mb-0">
      <h4 className="text-lg font-bold mb-4">Career Conquest</h4>
      <p className="text-gray-600 text-sm">
        Empowering individuals with personalized job matching and skill development to achieve their career aspirations.
      </p>
    </div>
    
    {/* Center Section - Navigation */}
    <div className="lg:w-1/3 mb-6 lg:mb-0 text-center">
      <h4 className="text-lg font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="/signup" className="text-gray-600 hover:text-gray-900">Sign Up</a></li>
        <li><a href="/dashboard" className="text-gray-600 hover:text-gray-900">Log In</a></li>
      </ul>
    </div>
    
    {/* Right Section - Contact Information */}
    <div className="lg:w-1/3 text-center lg:text-right">
      <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
      <p className="text-gray-600 text-sm">Email: support@careerconquest.com</p>
      <p className="text-gray-600 text-sm">Phone: +91 XXXXXXXXXX</p>
    </div>
  </div>
  
  {/* Bottom Section */}
  <div className="mt-8 border-t border-gray-300 pt-4 text-center">
    <p className="text-gray-500 text-sm">© 2024 Career Conquest. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
    </div>
  </div>
</footer>

    );
}

export default Footer;