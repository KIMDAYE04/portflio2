import Link from 'next/link'
import React from 'react'

export default function IntroducePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 px-4 pt-16">
      {/* Welcome Header */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Introduce
      </h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Clerk Section */}
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-300">
          <Link
            href=""
            className="text-xl font-semibold text-gray-800 hover:text-gray-700"
          >
            introduce
          </Link>
          <p className="mt-4 text-gray-700 text-base font-medium">
            중부대학교 정보보호학과 2학년
          </p>
        </div>

        {/* GitHub Section */}
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-300">
          <Link
            href=""
            className="text-xl font-semibold text-gray-800 hover:text-gray-700"
          >
            Name
          </Link>
          <p className="mt-4 text-gray-700 text-base font-medium">김다예</p>
        </div>

        {/* Backend API Section */}
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-300">
          <Link
            href=""
            className="text-xl font-semibold text-gray-800 hover:text-gray-700"
          >
            Hobby
          </Link>
          <p className="mt-4 text-gray-700 text-base font-medium">
            글씨 쓰기, 영화 감상, 책 읽기, 게임하기
          </p>
        </div>

        {/* New Section 1 */}
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-300">
          <Link
            href="https://github.com/KIMDAYE04"
            className="text-xl font-semibold text-gray-800 hover:text-gray-700 hover:underline"
          >
            github
          </Link>
          <p className="mt-4 text-gray-700 text-base font-medium">github</p>
        </div>

        {/* New Section 2 */}
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-300">
          <Link
            href="https://portfolio-mu-ashen-24.vercel.app/"
            className="text-xl font-semibold text-gray-800 hover:text-gray-700 hover:underline"
          >
            my website
          </Link>
          <p className="mt-4 text-gray-700 text-base font-medium ">
            중간고사때 만들었던 웹사이트 주소입니다
          </p>
        </div>

        {/* Study Section with fixed size */}
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-300 col-span-1 lg:col-span-3 xl:col-span-3">
          <Link
            href="https://portfolio-mu-ashen-24.vercel.app/"
            className="text-xl font-semibold text-gray-800 hover:text-gray-700 hover:underline"
          >
            Study
          </Link>
          <div className="space-y-4 w-full mt-8">
            <Link
              href="https://github.com/KIMDAYE04/-"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://github.com/KIMDAYE04/-
            </Link>
            <br />
            <Link
              href="https://daye-kims-projects.vercel.app/"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://daye-kims-projects.vercel.app/
            </Link>
            <br />
            <Link
              href="https://github.com/KIMDAYE04/portfolio"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://github.com/KIMDAYE04/portfolio
            </Link>
            <br />
            <Link
              href="https://portfolio-mu-ashen-24.vercel.app/"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://portfolio-mu-ashen-24.vercel.app/
            </Link>
            <br />
            <Link
              href="https://github.com/KIMDAYE04/mongo-crud"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://github.com/KIMDAYE04/mongo-crud
            </Link>
            <br />
            <Link
              href="https://mongo-crud-dun.vercel.app/"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://mongo-crud-dun.vercel.app/
            </Link>
            <br />
            <Link
              href="https://github.com/KIMDAYE04/crud-action-2"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://github.com/KIMDAYE04/crud-action-2
            </Link>
            <br />
            <Link
              href="https://crud-action-2-ozxo.vercel.app/"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://crud-action-2-ozxo.vercel.app/
            </Link>
            <br />
            <Link
              href="https://github.com/KIMDAYE04/clerk-api"
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              https://github.com/KIMDAYE04/clerk-api
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
