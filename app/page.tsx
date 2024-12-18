'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 px-4 pt-60">
      {/* Welcome Header */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Welcome to MyWebsite
      </h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Clerk Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
          <Link href="" className="text-xl font-semibold text-blue-600">
            introduce
          </Link>
          <p className="mt-4 text-gray-600">
            웹 프로젝트 두번째 포트폴리오 페이지입니다
          </p>
        </div>

        {/* GitHub Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
          <Link
            href="https://github.com/KIMDAYE04"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            my github
          </Link>
          <p className="mt-4 text-gray-600">저의 github주소입니다</p>
        </div>

        {/* Backend API Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
          <Link
            href="https://github.com/KIMDAYE04"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            my teamproject
          </Link>
          <p className="mt-4 text-gray-600">저희의 팀프로젝트 주소입니다</p>
        </div>
      </div>
    </div>
  )
}
