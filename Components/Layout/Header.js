"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Globe } from "lucide-react";
import CustomDropdown from "./custom-dropdown";
import MobileDropdown from "./mobile-dropdown";

export default function Header({ heading, text }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative ">
      {/* Hero Background Image - Replace with your actual image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/Homeimage.png"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0D0D33A6]" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 relative">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <CustomDropdown
              label="Products"
              items={[
                { label: "Products", href: "/Products" },
                { label: "Brands", href: "/Brands" },
              ]}
            />
            <Link href="/About" className="text-white hover:text-gray-200">
              About Us
            </Link>
            <Link href="/Contact" className="text-white hover:text-gray-200">
              Contact Us
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 gap-x-2 bg-white text-black rounded-[22px] border border-gray-300 hover:bg-gray-100 transition-colors md:h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:ml-1"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="hidden sm:inline mr-1 text-[#2E2E2E]">
                Login
              </span>
            </button>
            <div
              className="w-8 h-8 flex items-center justify-center bg-[var(--primary-blue)] rounded-full"
              onClick={() => router.push("/Notifications")}
            >
              <Bell className="h-5 w-5 text-white" />
            </div>
            <CustomDropdown
              label={<Globe className="h-5 w-5  " />}
              items={[
                { label: "English", href: "#english" },
                { label: "العربية", href: "#arabic" },
              ]}
              className="text-white p-2 rounded-full hover:bg-white/10"
            />
            <div className="h-8 w-8 relative  overflow-hidden">
              <Image
                src="/images/saudi.svg"
                alt="Saudi Flag"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 p-4 rounded-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <MobileDropdown
                label="Products"
                items={[
                  { label: "Products", href: "/Products" },
                  { label: "Brands", href: "/Brands" },
                ]}
                onItemClick={() => setIsMenuOpen(false)}
              />
              <Link
                href="/About"
                className="text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/Contact"
                className="text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 text-center max-w-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {heading}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {text}
        </p>
      </div>
    </header>
  );
}
