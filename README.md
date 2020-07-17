# babel
babel setting 처리

## babel 의 정의
babel은 javascript compiler.
- Use next generation JavaScript, today.


## Babel Config
### 1. 전체 설정
 : babel 7.0.0 이상 부터 babel.config.js를 이용함
 : local 영역의 경우 기존의 .babelrc를 사용함
 : babel의 설정 파일간 상속 가능
 : babel의 
 : babel의 구조체 AST

### 2. 설정 값 상세
 - presets: 
 - plugins: 
 - polyfills: 

## Babel 실행 관련 

yarn add @babel/core @babel/preset-react @babel/preset-env @babel/plugin-transform-literals @babel/plugin-transform-arrow-functions @babel/plugin-proposal-class-properties

### 1. 기본 실행: 
npx babel ./src/code.js --out-file dist/code.bundle.js
### 2. AST 구조체 사용하기

## 기타 사항
### npx: 
### @babel/plugin-proposal-class-properties: 
### commonjs 형식:
 nodejs에서 사용하는 형태로 require함수로 함수를 받아서, 
 module.exports로 처리함
### esm 형식(ecma script module):
 import, export로 표현됨