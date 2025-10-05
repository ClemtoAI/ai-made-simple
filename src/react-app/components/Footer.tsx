export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-500 text-white rounded-lg p-2 mr-3">
              <span className="text-lg font-bold">AI</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Easy AI Guide</span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="/about" className="text-gray-600 hover:text-blue-600 text-sm">About Us</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">Contact</a>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-200 w-full">
            <p className="text-gray-500 text-sm text-center">
              © 2025 Easy AI Guide. Making artificial intelligence accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
