# oxlint 예제 프로젝트

이 프로젝트는 [oxlint](https://oxc-project.github.io/)를 사용한 Next.js React 애플리케이션의 예제입니다. oxlint는 Rust로 작성된 빠른 JavaScript/TypeScript 린터로, ESLint보다 훨씬 빠른 성능을 제공합니다.

## 🚀 주요 기능

- **빠른 린팅**: Rust로 작성되어 ESLint보다 50-100배 빠름
- **TypeScript 지원**: 완전한 TypeScript 지원
- **React 규칙**: JSX 관련 규칙 자동 검사
- **자동 수정**: 많은 문제들을 자동으로 수정 가능
- **설정 간편**: 단일 설정 파일로 모든 규칙 관리

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. oxlint 실행
```bash
# 린팅 검사
npm run oxlint

# 자동 수정
npm run oxlint:fix
```

## 🔧 oxlint 설정

프로젝트의 `oxlint.toml` 파일에서 린팅 규칙을 설정할 수 있습니다:

```toml
[typescript]
no-unused-vars = "error"
no-console = "warn"
prefer-const = "error"

[javascript]
no-unused-vars = "error"
no-console = "warn"
prefer-const = "error"

[react]
jsx-key = "error"
jsx-no-duplicate-props = "error"
jsx-no-undef = "error"

[imports]
no-duplicate-imports = "error"
no-unused-imports = "error"

[style]
no-var = "error"
prefer-template = "warn"
```

## 📁 프로젝트 구조

```
oxlint-example/
├── src/
│   ├── app/
│   │   └── page.tsx          # 메인 페이지
│   └── components/
│       ├── ExampleComponent.tsx  # 문제가 있는 컴포넌트 (oxlint가 감지할 예제)
│       └── GoodComponent.tsx     # 올바른 컴포넌트 (oxlint 규칙 준수)
├── oxlint.toml              # oxlint 설정 파일
├── package.json
└── README.md
```

## 🎯 예제 컴포넌트

### ExampleComponent.tsx
이 컴포넌트는 oxlint가 감지할 수 있는 다양한 문제들을 포함하고 있습니다:

- 사용하지 않는 import/변수
- 중복 import
- var 사용 (const/let 권장)
- console.log 사용
- JSX에서 key 누락
- 중복된 props
- 정의되지 않은 컴포넌트 사용

### GoodComponent.tsx
이 컴포넌트는 oxlint 규칙을 잘 따르는 올바른 예제입니다:

- const 사용
- 템플릿 리터럴 사용
- useCallback으로 함수 메모이제이션
- JSX에서 key 제공
- 적절한 TypeScript 타입 사용

## 🔍 oxlint가 감지하는 주요 문제들

### 1. 사용하지 않는 코드
```typescript
// ❌ 사용하지 않는 import
import { unusedImport } from 'react';

// ❌ 사용하지 않는 변수
const unusedVariable = 'this will be flagged';
```

### 2. 중복 import
```typescript
// ❌ 중복 import
import React from 'react';
import React from 'react';
```

### 3. React JSX 규칙
```typescript
// ❌ key가 없는 리스트
{items.map(item => (
  <li>{item}</li>
))}

// ✅ key가 있는 리스트
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### 4. 코드 스타일
```typescript
// ❌ var 사용
var oldWay = 'using var';

// ✅ const 사용
const newWay = 'using const';

// ❌ 문자열 연결
const message = 'Hello ' + name + '!';

// ✅ 템플릿 리터럴
const message = `Hello ${name}!`;
```

## 🚀 성능 비교

oxlint는 ESLint와 비교하여 다음과 같은 성능 향상을 제공합니다:

- **속도**: 50-100배 빠름
- **메모리 사용량**: 더 적은 메모리 사용
- **설정**: 더 간단한 설정
- **TypeScript**: 네이티브 TypeScript 지원

## 📚 추가 리소스

- [oxlint 공식 문서](https://oxc-project.github.io/)
- [oxlint GitHub](https://github.com/oxc-project/oxc)
- [Next.js 문서](https://nextjs.org/docs)
- [React 문서](https://react.dev/)

## 🤝 기여하기

이 예제 프로젝트에 기여하고 싶으시다면:

1. 이 저장소를 포크하세요
2. 새로운 브랜치를 생성하세요
3. 변경사항을 커밋하세요
4. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
