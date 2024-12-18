import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { FaHome, FaBook, FaUserAlt, FaChartLine } from 'react-icons/fa'

export default function Header() {
  return (
    <div>
      <nav className="bg-gray-900 py-4 px-8 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <FaHome className="text-neon-green text-2xl" />
              <span className="text-xl font-extrabold text-white">
                My Website
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/introduce"
              className="text-gray-400 hover:text-neon-green transition duration-300"
            >
              <FaChartLine className="inline-block mr-2" />
              introduce
            </Link>
            <Link
              href="/plan"
              className="text-gray-400 hover:text-neon-green transition duration-300"
            >
              <FaBook className="inline-block mr-2" />
              plan
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <div className="text-gray-400 hover:text-neon-green transition duration-300">
                <SignInButton />
              </div>
              <div className="text-gray-400 hover:text-neon-green transition duration-300">
                <SignUpButton />
              </div>
            </SignedOut>

            <SignedIn>
              <Link
                href="/profile"
                className="text-gray-400 hover:text-neon-green transition duration-300"
              >
                <FaUserAlt className="inline-block mr-2" />
                Profile
              </Link>
              <div className="text-gray-400 hover:text-neon-green transition duration-300">
                <UserButton />
              </div>
              <div className="text-gray-400 hover:text-neon-green transition duration-300">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="bg-gray-800 md:hidden flex items-center justify-around py-2">
        <Link href="/" className="text-gray-400 hover:text-neon-green">
          <FaHome className="text-2xl" />
        </Link>
        <Link href="/repos" className="text-gray-400 hover:text-neon-green">
          <FaBook className="text-2xl" />
        </Link>
        <Link href="/profile" className="text-gray-400 hover:text-neon-green">
          <FaUserAlt className="text-2xl" />
        </Link>
        <Link href="/dashboard" className="text-gray-400 hover:text-neon-green">
          <FaChartLine className="text-2xl" />
        </Link>
      </div>
    </div>
  )
}
