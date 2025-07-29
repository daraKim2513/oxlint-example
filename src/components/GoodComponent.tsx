'use client';

// oxlint 규칙을 잘 따르는 올바른 컴포넌트 예제

import React, { useState, useCallback } from 'react';

interface Props {
  title: string;
  count?: number;
}

export default function GoodComponent({ title, count = 0 }: Props) {
  const [clickCount, setClickCount] = useState(0);

  // const 사용 (올바름)
  const message = `Hello ${title}!`;

  // 템플릿 리터럴 사용 (올바름)
  const description = `Current count is ${count}`;

  // useCallback으로 함수 메모이제이션 (올바름)
  const handleClick = useCallback(() => {
    setClickCount((prev) => prev + 1);
  }, []);

  // key가 있는 리스트 (올바름)
  const items = ['item1', 'item2', 'item3'];

  return (
    <div className='p-4 border rounded-lg bg-green-50'>
      <h2 className='text-xl font-bold mb-4 text-green-800'>{title}</h2>
      <p className='mb-2 text-green-700'>{description}</p>
      <p className='mb-4 text-green-600'>{message}</p>

      {/* key가 있는 리스트 (올바름) */}
      <ul className='list-disc list-inside mb-4'>
        {items.map((item, index) => (
          <li key={index} className='text-green-700'>
            {item}
          </li>
        ))}
      </ul>

      <div className='mb-4'>
        <p className='text-green-600'>Click count: {clickCount}</p>
      </div>

      <button
        onClick={handleClick}
        className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors'
      >
        Click me
      </button>
    </div>
  );
}
