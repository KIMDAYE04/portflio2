/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

export default async function DashboardPage() {
  const { userId } = auth()
  const _user = await currentUser()

  return (
    <div className="ml-auto mr-auto w-full max-w-6xl mt-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Introduce
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        자기소개 페이지입니다
      </p>

      {/* 사용자 정보 칸을 그리드 형식으로 나열 */}
      {userId && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Grade</h2>
            <p className="text-lg text-gray-600 mt-2">
              중부대학교 정보보호학과 2학년
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Name</h2>
            <p className="text-lg text-gray-600 mt-2">김다예</p>
          </div>

          <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">github</h2>
            <p className="text-lg text-gray-600 mt-2">
              https://github.com/KIMDAYE04
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            <p className="text-lg text-gray-600 mt-2">kimdaye@gmail.com</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
            <Link
              href="https://portfolio-mu-ashen-24.vercel.app/"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              mywebsite
            </Link>
            <p className="mt-4 text-gray-600">
              중간고사때 만들었던 웹사이트 주소입니다
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
