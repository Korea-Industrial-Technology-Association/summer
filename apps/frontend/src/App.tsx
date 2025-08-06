import { useState } from 'react'
import { AttendStatus, AttendStatusDescription } from '@koita/shared'

function App() {
  const [currentStatus, setCurrentStatus] = useState<AttendStatus>(AttendStatus.NONE)

  const statusOptions = Object.values(AttendStatus)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-6xl animate-spin-slow">⚛️</div>
            <div className="text-6xl animate-bounce">⚡</div>
          </div>pnpm
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            KOITA Summer Forum
          </h1>
          <p className="text-lg text-gray-600">
            한국산업기술진흥협회 하계포럼 관리 시스템
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              참가 신청 상태
            </h3>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-lg">
              현재 상태: {AttendStatusDescription[currentStatus]}
            </div>
          </div>

          {/* Status Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statusOptions.map((status) => (
              <button
                key={status}
                onClick={() => setCurrentStatus(status)}
                className={`
                  py-4 px-6 rounded-xl font-medium transition-all duration-200 transform hover:scale-105
                  ${currentStatus === status 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-2 border-gray-200'
                  }
                `}
              >
                {AttendStatusDescription[status]}
              </button>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-indigo-600">TypeScript 모노레포</span>를 활용한 
            타입 안전한 상태 관리 예시
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              NestJS
            </span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              TailwindCSS
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Turbo
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
              pnpm
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
