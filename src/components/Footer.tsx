
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-bold text-xl mb-4">Skill<span className="text-secondary">Xchange</span></h3>
            <p className="text-gray-600 mb-4">
              Connect, learn, and share skills with a global community of learners and experts.
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/skills" className="text-gray-600 hover:text-primary">Browse Skills</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-primary">Categories</Link></li>
              <li><Link to="/teachers" className="text-gray-600 hover:text-primary">Top Teachers</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-primary">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-gray-600 hover:text-primary">Log In</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-primary">Sign Up</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-primary">My Profile</Link></li>
              <li><Link to="/my-skills" className="text-gray-600 hover:text-primary">My Skills</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SkillXchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
