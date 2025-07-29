import Image from 'next/image';
import ExampleComponent from '@/components/ExampleComponent';
import GoodComponent from '@/components/GoodComponent';

export default function Home() {
  return (
    <div className='font-sans min-h-screen p-8'>
      <main className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <Image
            className='dark:invert mx-auto mb-4'
            src='/next.svg'
            alt='Next.js logo'
            width={180}
            height={38}
            priority
          />
          <h1 className='text-4xl font-bold mb-4'>oxlint 예제 프로젝트</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            oxlint를 사용한 코드 품질 관리 예제
          </p>
        </div>

        {/* oxlint 설명 */}
        <div className='mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
          <h2 className='text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200'>
            oxlint란?
          </h2>
          <p className='text-blue-700 dark:text-blue-300 mb-4'>
            oxlint는 Rust로 작성된 빠른 JavaScript/TypeScript 린터입니다.
            ESLint보다 훨씬 빠르며, 다양한 코드 품질 문제를 감지할 수 있습니다.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
            <div>
              <h3 className='font-semibold mb-2'>주요 기능:</h3>
              <ul className='list-disc list-inside space-y-1'>
                <li>사용하지 않는 변수/import 감지</li>
                <li>중복 import 감지</li>
                <li>React JSX 규칙 검사</li>
                <li>코드 스타일 제안</li>
                <li>TypeScript 지원</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>사용법:</h3>
              <ul className='list-disc list-inside space-y-1'>
                <li>
                  <code className='bg-blue-200 px-1 rounded'>
                    npm run oxlint
                  </code>{' '}
                  - 린팅 실행
                </li>
                <li>
                  <code className='bg-blue-200 px-1 rounded'>
                    npm run oxlint:fix
                  </code>{' '}
                  - 자동 수정
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 컴포넌트 예제 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* 문제가 있는 컴포넌트 */}
          <div>
            <h2 className='text-2xl font-bold mb-4 text-red-800 dark:text-red-200'>
              ❌ 문제가 있는 컴포넌트
            </h2>
            <p className='text-red-600 dark:text-red-300 mb-4'>
              이 컴포넌트는 oxlint가 감지할 수 있는 다양한 문제들을 포함하고
              있습니다.
            </p>
            <ExampleComponent title='문제 컴포넌트' count={5} />
          </div>

          {/* 올바른 컴포넌트 */}
          <div>
            <h2 className='text-2xl font-bold mb-4 text-green-800 dark:text-green-200'>
              ✅ 올바른 컴포넌트
            </h2>
            <p className='text-green-600 dark:text-green-300 mb-4'>
              이 컴포넌트는 oxlint 규칙을 잘 따르고 있습니다.
            </p>
            <GoodComponent title='올바른 컴포넌트' count={10} />
          </div>
        </div>

        {/* 사용법 안내 */}
        <div className='mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg'>
          <h2 className='text-2xl font-bold mb-4'>사용법</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>1. oxlint 실행</h3>
              <code className='block bg-gray-200 dark:bg-gray-700 p-2 rounded'>
                npm run oxlint
              </code>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>2. 자동 수정</h3>
              <code className='block bg-gray-200 dark:bg-gray-700 p-2 rounded'>
                npm run oxlint:fix
              </code>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>3. 개발 서버 실행</h3>
              <code className='block bg-gray-200 dark:bg-gray-700 p-2 rounded'>
                npm run dev
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
