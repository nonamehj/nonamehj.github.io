import movielistImg from "./img/movielistImg.webp";
import todolistImg from "./img/todolistImg.webp";
import loginImg from "./img/loginImg.png";
import kioskImg from "./img/kioskImg.jpg";

export const data = [
  {
    id: 1,
    title: "할일 목록",
    skill: "html css javaScript react",
    skillDec: [
      { id: 1, name: "html css", dec: "form, media query" },
      { id: 2, name: "javascript", dec: "map, filter, find, localStorage" },
      { id: 3, name: "react", dec: "useState, useEffect" },
    ],
    img: todolistImg,
    overview:
      "오늘 할 일을 등록, 수정, 삭제할 수 있는 간단한 할 일 관리 애플리케이션입니다.",
    features: [
      {
        id: 1,
        dec: "새로운 할 일을 목록에 추가",
      },
      {
        id: 2,
        dec: "기존할 일 수정",
      },
      {
        id: 3,
        dec: "목록에서 할 일 삭제",
      },
      {
        id: 4,
        dec: "할 일이 추가되거나 수정되거나 삭제될 때 알림 받기",
      },
    ],
    description:
      "TodoList 애플리케이션은 사용자가 일일 할 일을 효율적으로 관리할 수 있도록 합니다. 사용자는 새로운 할 일을 목록에 추가하고, 기존할 일의 세부사항을 수정하며, 더 이상 필요 없는 할 일을 삭제하고, 모든 할 일을 한곳에서 볼 수 있습니다. 추가로, 이 애플리케이션은 할 일이 추가되거나 수정되거나 삭제될 때 사용자에게 알림을 제공하여, 사용자들이 항상 할 일 목록의 변경 사항을 인지할 수 있도록 합니다. 이 프로젝트는 사용자가 체계적으로 할 일을 관리하고 효과적으로 할 일 목록을 추적하는 데 도움이 됩니다.",
    projectLinks: {
      result: "https://nonamehj.github.io/project-todolist",
      source: "https://github.com/nonamehj/project-todolist",
    },
  },
  {
    id: 2,
    title: "회원가입",
    skill: "html css react",
    skillDec: [
      { id: 1, name: "html css", dec: "form, media query" },
      { id: 2, name: "javascript", dec: "find, localStorage, FormData" },
      { id: 3, name: "react", dec: "Router, Link, useNavigate" },
    ],
    img: loginImg,
    overview:
      "사용자가 회원가입, 로그인, 로그아웃을 할 수 있는 간단한 인증 시스템입니다.",
    features: [
      {
        id: 1,
        dec: "회원가입",
      },
      {
        id: 2,
        dec: "로그인",
      },
      {
        id: 3,
        dec: "로그아웃",
      },
    ],
    description:
      "회원가입 및 로그인 시스템 프로젝트는 React의 useState를 사용하여 구현된 간단한 인증 시스템입니다. 사용자는 이메일과 비밀번호로 회원가입을 하고, 로그인 및 로그아웃을 할 수 있습니다. 이 프로젝트를 통해 사용자 입력 데이터를 처리하고 인증 상태를 관리하는 방법을 배웠습니다. 사용자 인터페이스는 CSS를 사용하여 간결하고 깨끗하게 설계되었습니다.",
    projectLinks: {
      result: "https://nonamehj.github.io/project-form",
    },
  },
  {
    id: 3,
    title: "영화목록",
    skill: "html css react",
    skillDec: [
      { id: 1, name: "html css", dec: "form, media query" },
      { id: 2, name: "javascript", dec: "map" },
      {
        id: 3,
        name: "react",
        dec: "Router, Link, useNavigate, context, createContext, useContext, useState, useEffect, useRef, useCallback, useMemo, memo",
      },
    ],
    img: movielistImg,
    overview:
      "TMDB API를 사용하여 영화를 검색하고 상세 정보를 볼 수 있는 애플리케이션입니다.",
    features: [
      {
        id: 1,
        dec: "영화 검색",
      },
      {
        id: 2,
        dec: "상세 정보 보기",
      },
    ],
    description:
      "MovieList 프로젝트는 TMDB API를 사용하여 영화 데이터를 가져오고 표시하는 애플리케이션입니다. 사용자는 영화를 검색하고 해당 영화에 대한 상세 정보를 볼 수 있습니다. 이 프로젝트를 통해 외부 API와 통신하고 데이터를 활용하는 방법을 배웠습니다. 전체 디자인은 사용자 친화적으로 CSS를 사용하여 만들어졌습니다.",
  },
  {
    id: 4,
    title: "테이블 오더",
    skill: "html css react",
    skillDec: [
      { id: 1, name: "html css", dec: "media query" },
      { id: 2, name: "javascript", dec: "map, filter, reduce" },
      {
        id: 3,
        name: "react",
        dec: "context, createContext, useContext, useState, useEffect, useReducer, useCallback, useRef",
      },
    ],
    img: kioskImg,
    overview:
      "사용자가 상품을 보고 주문할 수 있는 간단한 테이블 오더 시스템 애플리케이션입니다.",
    features: [
      { id: 1, dec: "상품목록 보기" },
      {
        id: 2,
        dec: "상품 선택 및 주문",
      },
      {
        id: 3,
        dec: "장바구니 및 주문내역",
      },
    ],
    description:
      "간단한 테이블 오더 프로젝트는 React의 useReducer를 사용하여 상태 관리를 하는 애플리케이션입니다. 사용자는 상품 목록을 보고, 상품을 선택하여 주문할 수 있습니다. 주문 내역은 useReducer를 사용하여 효율적으로 관리됩니다. 이 프로젝트를 통해 복잡한 상태 관리와 데이터 흐름을 처리하는 방법을 배웠습니다. UI는 간단하고 명확하게 CSS로 설계되었습니다.",
  },
];

export const desc = [
  { description: "효율적인 코드를 작성하여 안정적인 애플리케이션을 만듭니다." },
  { learning: "새로운 아이디어를 실현하기 위해 끊임없이 배우고 성장합니다." },
  { creativity: "문제 해결을 위한 창의적인 접근 방식을 채택합니다." },
  { collaboration: "협업을 통해 최상의 결과를 도출하는 것을 목표로 합니다." },
  { userExperience: "효과적인 사용자 경험을 제공하는 데 주력합니다." },
];

export const aboutDec = [
  {
    aboutMe:
      "다양한 프로젝트를 경험하면서 사용자 중심의 디자인과 최적화된 사용자 경험을 추구해 왔습니다. 기술적 도전에 직면했을 때, 문제를 명확하게 분석하고 적절한 해결책을 찾아내는 데 집중합니다. 이러한 과정에서 창의적이고 혁신적인 접근을 추구하여, 사용자가 진정으로 필요로 하는 솔루션을 개발하는 데 주력합니다. 지속적인 학습과 성장을 통해 개발자로서의 역량을 지속적으로 향상하고, 새로운 기술 트렌드를 주시하며 도전적인 프로젝트에 도전하고 있습니다. 문제 해결과 결정적인 실행을 통해 프로젝트의 성과를 극대화하며, 팀과 함께 목표를 달성하는 데 기여하고자 합니다.",
  },
  {
    skill: [
      { "Html/Css": "웹 페이지의 구조와 스타일을 설계하고 구현" },
      { JavaScript: "동적 웹 애플리케이션 개발 및 최적화" },
      { React: "컴포넌트 기반 웹 애플리케이션 개발" },
      { "Context API": "전역 상태 관리" },
      { "비동기 프로그래밍": "API 통신 관리" },
    ],
  },
  {
    projects: [
      {
        id: 1,
        title: "자기 주도적 학습과 응용",
        description:
          "HTML, CSS, JavaScript 및 React를 학습하고 개인 프로젝트를 통해 실전에서 경험을 쌓았습니다. 새로운 기술과 도구를 탐구하고 적용하는 데 자신감을 가지고 있습니다.",
      },
      {
        id: 2,
        title: "사용자 중심의 웹 인터페이스 개발",
        description:
          "다양한 웹 프로젝트를 통해 사용자 중심의 웹 인터페이스를 개발하였습니다. HTML, CSS, JavaScript를 활용하여 각종 UI 요소를 구현하고, React를 통해 상호작용성이 있는 웹 애플리케이션을 제작하였습니다.",
      },
      {
        id: 3,
        title: "외부 API 연동 및 데이터 관리",
        description:
          "여러 프로젝트에서 외부 API를 연동하여 데이터를 효율적으로 관리하였습니다. Context API를 활용하여 전역 상태를 유지하고 데이터의 일관성을 보장하는 방법을 익혔습니다.",
      },
      {
        id: 4,
        title: "데이터 처리와 최적화",
        description:
          "JavaScript의 다양한 메서드와 React Hooks를 사용하여 데이터 처리와 UI 업데이트를 최적화하였습니다. Map과 Filter를 활용하여 데이터 조작을 효율적으로 수행하고, 비동기 처리에 대한 경험을 쌓았습니다.",
      },
      {
        id: 5,
        title: "문제 해결 능력의 발전",
        description:
          "각 프로젝트에서 발생한 다양한 기술적 도전 과제를 해결하면서, 문제 해결 능력을 키웠습니다. 실제 문제에 대한 해결책을 고민하고 구현하는 과정을 통해 많은 성장을 이루었습니다.",
      },

      // " 자기 주도적 학습과 응용: HTML, CSS, JavaScript 및 React를 학습하고 개인 프로젝트를 통해 실전에서의 응용 능력을 길러왔습니다. 새로운 기술과 도구를 탐구하고 적용하는 데 자신감을 가지고 있습니다.",
      // " 사용자 중심의 웹 인터페이스 개발: 다양한 웹 프로젝트를 통해 사용자 중심의 웹 인터페이스를 개발하였습니다. HTML, CSS, JavaScript를 활용하여 각종 UI 요소를 구현하고, React를 통해 상호작용성이 있는 웹 애플리케이션을 제작하였습니다.",
      // " 외부 API 연동 및 데이터 관리: 다양한 프로젝트에서 외부 API를 연동하여 데이터를 효율적으로 관리하였습니다. Context API를 활용하여 전역 상태를 유지하고 데이터의 일관성을 보장하는 방법을 익혔습니다.",
      // " 데이터 처리와 최적화: JavaScript의 다양한 메서드와 React Hooks를 사용하여 데이터 처리와 UI 업데이트를 최적화하였습니다. Map과 Filter를 활용하여 데이터 조작을 효율적으로 수행하고, 비동기 처리에 대한 경험을 쌓았습니다.",
      // " 문제 해결 능력의 발전: 각 프로젝트에서 발생한 다양한 기술적 도전 과제를 해결하면서, 문제 해결 능력을 키웠습니다. 실제 문제에 대한 해결책을 고민하고 구현하는 과정을 통해 많은 성장을 이루었습니다.",
    ],
  },
  {
    learning: `각 프로젝트를 진행하면서 저는 단순한 기술적 해결책을 넘어, 실제 문제 해결에 집중했습니다. 프로젝트를 시작할 때부터 끝까지 맡은 역할을 충실히 수행하면서, 자발적으로 새로운 기술을 배우고 적용하는 과정에서 큰 성장을 이루었습니다. 기술이 단순한 수단일 뿐, 사용자의 문제를 해결하고 사용자 경험을 개선하는 것이 진정한 가치라는 것을 깨달았습니다.
    프로젝트 초기에는 기술적인 부분에만 집중했지만, 프로젝트가 진행됨에 따라 각 기능이 사용자에게 어떤 가치를 제공할 수 있는지에 대해 깊이 고민하게 되었습니다. 이를 통해 UX/UI 디자인의 중요성과 그 영향력을 명확히 이해할 수 있었습니다.
    각 프로젝트는 제게 유익한 학습과 성장의 기회가 되었습니다. 이 경험들은 제 기술적 역량뿐만 아니라 전문적인 발전에도 큰 도움이 되었습니다.`,
  },
];
