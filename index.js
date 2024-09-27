// 1. DOM 문제
console.log("=== 1. DOM 문제 ===");
// DOM은 HTML 문서를 브라우저에서 구조화한 트리 같은 거임. 
// JavaScript로 이 트리를 조작해서 페이지 요소를 바꿀 수 있음.
const heading = document.getElementById('heading');
heading.textContent = 'New Heading';  // 텍스트 바꾸기
console.log(heading.textContent); // 확인용

// 2. DOM 선택자 문제
console.log("=== 2. DOM 선택자 문제 ===");
// getElementById는 ID로 찾고
const headingById = document.getElementById('heading');
console.log(headingById);

// querySelector는 CSS 스타일로 찾음
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// getElementsByClassName은 클래스명으로 여러 개 찾음
const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs);

// 3. DOM 이벤트 문제
console.log("=== 3. DOM 이벤트 문제 ===");
// 버튼 클릭하면 콘솔에 글자 나옴
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// 4. BOM 문제
console.log("=== 4. BOM 문제 ===");
// BOM은 브라우저랑 관련된 거. window는 브라우저 창을 의미함.
// 여기서 페이지를 리다이렉트할 수 있음
window.location.href = 'https://example.com'; // 리다이렉트 예시

// 5. BOM history 문제
console.log("=== 5. BOM history 문제 ===");
// history는 페이지 방문 기록임. back()은 이전 페이지로, forward()는 다음 페이지로 감.
history.back();  // 이전 페이지로 이동
history.forward();  // 다음 페이지로 이동

// 6. CSSOM 문제
console.log("=== 6. CSSOM 문제 ===");
// CSSOM은 CSS를 트리로 표현한 거임. 여기서는 스타일을 바꿈.
const headingStyle = document.querySelector('h1');
headingStyle.style.color = 'blue';  // 글자 색 바꾸기
headingStyle.style.fontSize = '24px';  // 폰트 크기 변경
console.log(headingStyle);

// 7. Reflow와 Repaint 문제
console.log("=== 7. Reflow와 Repaint 문제 ===");
// Reflow는 레이아웃 다시 계산하고 Repaint는 화면에 다시 그리는 거임.
// 한 번에 스타일 여러 개 바꾸면 성능이 좋아짐.

// 안 좋은 예: Reflow 여러 번 발생
headingStyle.style.width = '100px';
headingStyle.style.height = '200px';
headingStyle.style.backgroundColor = 'blue';

// 좋은 예: Reflow 최소화
headingStyle.style.cssText = 'width: 100px; height: 200px; background-color: blue;';
console.log(headingStyle);

// 8. JavaScript 실행 맥락 문제
console.log("=== 8. JavaScript 실행 맥락 문제 ===");
// 실행 맥락은 코드가 실행되는 환경? 전역 실행 맥락은 전역 변수같은거 쓰고, 함수 실행 맥락은 함수 안에서만 쓰는거.
let globalVar = 'Global';  // 전역 실행 맥락
function myFunction() {
  let localVar = 'Local';  // 함수 실행 맥락
  console.log(globalVar);  // 전역 변수 접근 가능
  console.log(localVar);   // 함수 내 지역 변수
}
myFunction();

// 9. 콜 스택 문제
console.log("=== 9. 콜 스택 문제 ===");
// 콜 스택은 함수 호출을 관리하는 것. 함수가 호출되면 스택에 쌓임. 종료되면 제거됨.
function first() {
  console.log('First');
}
function second() {
  console.log('Second');
}
first();  // 콜 스택에 first 함수가 쌓임
second();  // first 함수 종료 후, 콜 스택에 second 함수가 쌓임

// 10. 이벤트 루프 문제
console.log("=== 10. 이벤트 루프 문제 ===");
// 이벤트 루프는 비동기 작업을 관리하는 거임. setTimeout 같은 비동기 함수는 나중에 실행됨.
console.log('Start');
setTimeout(function() {
  console.log('This is an async message.');
}, 1000);  // 1초 후 비동기 코드 실행
console.log('End');
