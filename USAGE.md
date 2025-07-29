# oxlint 사용법 가이드

## 🚀 빠른 시작

### 1. 프로젝트 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 2. oxlint 실행
```bash
# 린팅 검사
npm run oxlint

# 자동 수정
npm run oxlint:fix
```

## 📋 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |
| `npm run oxlint` | oxlint 실행 |
| `npm run oxlint:fix` | oxlint 자동 수정 |

## 🔍 oxlint가 감지하는 문제들

### 1. 중복 Import
```typescript
// ❌ 문제
import React from 'react';
import React from 'react';

// ✅ 해결
import React from 'react';
```

### 2. 사용하지 않는 변수
```typescript
// ❌ 문제
const unusedVariable = 'this will be flagged';

// ✅ 해결
// 변수 제거 또는 사용
```

### 3. var 사용
```typescript
// ❌ 문제
var oldWay = 'using var';

// ✅ 해결
const newWay = 'using const';
```

### 4. JSX Key 누락
```typescript
// ❌ 문제
{items.map(item => (
  <li>{item}</li>
))}

// ✅ 해결
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### 5. console.log 사용
```typescript
// ❌ 문제 (경고)
console.log('This will be flagged');

// ✅ 해결
// 개발 환경에서만 사용하거나 제거
```

## ⚙️ 설정 파일 (oxlint.toml)

```toml
[typescript]
no-unused-vars = "error"    # 사용하지 않는 변수 에러
no-console = "warn"         # console 사용 경고
prefer-const = "error"      # const 사용 강제
no-var = "error"           # var 사용 금지
prefer-template = "warn"    # 템플릿 리터럴 권장

[react]
jsx-key = "error"          # JSX key 필수
jsx-no-duplicate-props = "error"  # 중복 props 금지
jsx-no-undef = "error"     # 정의되지 않은 컴포넌트 금지

[imports]
no-duplicate-imports = "error"  # 중복 import 금지
no-unused-imports = "error"     # 사용하지 않는 import 금지
```

## 🎯 예제 컴포넌트

### 문제가 있는 컴포넌트 (ExampleComponent.tsx)
- oxlint가 감지할 수 있는 다양한 문제들 포함
- 학습 목적으로 의도적으로 문제가 있는 코드 작성

### 올바른 컴포넌트 (GoodComponent.tsx)
- oxlint 규칙을 잘 따르는 예제
- 실제 프로덕션에서 사용할 수 있는 코드

## 🔧 문제 해결

### 1. oxlint가 실행되지 않는 경우
```bash
# oxlint 재설치
npm uninstall oxlint
npm install --save-dev oxlint
```

### 2. 설정이 적용되지 않는 경우
- `oxlint.toml` 파일이 프로젝트 루트에 있는지 확인
- 파일 형식이 올바른지 확인

### 3. 특정 파일 제외하기
```toml
# oxlint.toml에 추가
[ignore]
"src/components/ExampleComponent.tsx" = true
```

## 📚 추가 학습

- [oxlint 공식 문서](https://oxc-project.github.io/)
- [Next.js 문서](https://nextjs.org/docs)
- [React 문서](https://react.dev/) 