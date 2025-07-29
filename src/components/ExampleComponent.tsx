'use client';

// oxlint가 감지할 수 있는 다양한 문제들을 포함한 예제 컴포넌트

import React, { useState, useEffect } from 'react';

// 사용하지 않는 import (oxlint가 감지할 것)
import { unusedImport } from 'react';

interface Props {
  title: string;
  count?: number;
}

// 사용하지 않는 변수 (oxlint가 감지할 것)
const unusedVariable = 'this will be flagged';

export default function ExampleComponent({ title, count = 0 }: Props) {
  // var 사용 (oxlint가 경고할 것)
  const oldWay = 'using var';

  // 사용하지 않는 state (oxlint가 감지할 것)
  const [unusedState, setUnusedState] = useState('');

  // console.log 사용 (oxlint가 경고할 것)
  console.log('This will be flagged as warning');

  // 사용하지 않는 함수 (oxlint가 감지할 것)
  const unusedFunction = () => {
    return 'unused';
  };

  // let을 const로 변경할 수 있는 경우 (oxlint가 제안할 것)
  const shouldBeConst = 'this should be const';

  // 템플릿 리터럴을 사용하지 않는 경우 (oxlint가 제안할 것)
  const message = 'Hello ' + title + '!';

  // JSX에서 key가 없는 경우 (oxlint가 감지할 것)
  const items = ['item1', 'item2', 'item3'];

  return (
    <div className='p-4 border rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>{title}</h2>
      <p className='mb-2'>Count: {count}</p>
      <p className='mb-4'>{message}</p>

      {/* key가 없는 리스트 (oxlint가 감지할 것) */}
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* 중복된 props (oxlint가 감지할 것) */}
      <div className='p-2' className='p-4'>
        Duplicate className
      </div>

      {/* 정의되지 않은 컴포넌트 (oxlint가 감지할 것) - 주석 처리됨 */}
      {/* <UndefinedComponent /> */}

      <button
        onClick={() => {
          // 사용하지 않는 변수 (oxlint가 감지할 것)
          const unusedInCallback = 'unused';
          setUnusedState('clicked');
        }}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Click me
      </button>
    </div>
  );
}
