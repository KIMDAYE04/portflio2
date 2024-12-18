import Link from 'next/link'
import React from 'react'

export default function PlanPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 pt-16 px-4">
      {/* 상단 다른 나열할 공간 */}
      <div className="w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Plans</h2>
        <p className="text-lg text-gray-600">앞으로의 계획</p>
      </div>

      {/* 계획표 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* 계획 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 1</h3>
          <p className="text-gray-600">
            웹 프로그래밍을 위해 <br /> 여러가지 웹사이트를 모방하여 만들어보고
            오류를 해결해 나가며 실력을 키우고 학습해 나갈 것이다
          </p>
          <Link href="#" className="text-blue-600 hover:underline mt-4 block">
            더 보기
          </Link>
        </div>

        {/* 계획 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2</h3>
          <p className="text-gray-600">
            지속적인 공부를 위해 <br />
            전공서적을 비롯한 관련 IT 이슈를 자주 접하며 매일 발전해 나가는
            기술에 뒤쳐지지 말고 흐름을 따라 앞서나갈 수 있는 공부를 할 것이다
          </p>
          <Link href="#" className="text-blue-600 hover:underline mt-4 block">
            더 보기
          </Link>
        </div>

        {/* 계획 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 3</h3>
          <p className="text-gray-600">
            다양한 공부를 위해
            <br />
            새로운 언어 공부, 색다른 경험 등을 접할 기회를 놓치지 말고
            적극적으로 임하며 더 많은것을 배우고 경험해 나갈 것입니다 공모전,
            외부 동아리 등 이색 활동을 통해 여러가지 공부를 할것이다
          </p>
          <Link href="#" className="text-blue-600 hover:underline mt-4 block">
            더 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
