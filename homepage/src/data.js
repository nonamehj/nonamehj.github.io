import {
  formImage,
  movielistImage,
  tableorderImage,
  todoCalendarImage,
} from "./images/category-images";

import {
  formThumb,
  movieThumb,
  tableThumb,
  todoThumb,
} from "./images/thumbnail-images";

export const data = [
  {
    id: 1,
    title: "오늘 할일 & 일정 관리",
    skill: "html css javaScript react",
    skillDec: [
      { id: 1, name: "html css", dec: "form, media query" },
      { id: 2, name: "javascript", dec: "map, filter, find, localStorage" },
      { id: 3, name: "react", dec: "useState, useEffect" },
    ],
    img: todoCalendarImage,
    overview:
      "오늘 할 일, 일정 관리, 메인 미리보기 기능이 포함된 일정 관리 애플리케이션입니다. 사용자는 날짜별로 할 일을 등록하고, 메인 화면에서 미완료 항목을 빠르게 확인할 수 있습니다.",
    features: [
      { id: 1, dec: "메인 화면에서 미완료 항목 미리보기" },
      { id: 2, dec: "오늘 할 일 작성 및 관리" },
      { id: 3, dec: "달력 기반 일정 관리, 원하는 날짜 선택 후 리스트 작성" },
      { id: 4, dec: "미완료 항목만 순차적으로 정렬하여 표시" },
    ],
    description:
      "오늘의 할 일과 날짜별 일정을 통합 관리할 수 있도록 설계되었습니다. 메인 화면에서는 일정 관리에서 작성된 미완료 항목을 일부만 미리 확인할 수 있고, '오늘 할 일'에서는 일상적인 할 일을 작성·관리할 수 있습니다. 또한 '일정 관리' 기능을 통해 원하는 날짜를 선택해 해당 날짜에 필요한 할 일을 등록하고, 진행 상황에 따라 미완료 항목만 정렬하여 보여줍니다. 이를 통해 사용자는 일상적인 작업부터 특정 날짜의 일정까지 한 번에 효율적으로 관리할 수 있습니다.",
    projectLinks: {
      result: "https://nonamehj.github.io/todo-calendar",
      source: "https://github.com/nonamehj/todo-calendar",
    },
  },
  {
    id: 2,
    title: "회원 Form 관리",
    skill: "html css react",
    skillDec: [
      { id: 1, name: "html css", dec: "form, media query" },
      { id: 2, name: "javascript", dec: "find, localStorage, FormData" },
      { id: 3, name: "react", dec: "Router, Link, useNavigate" },
    ],
    img: formImage,
    overview:
      "회원가입, 로그인, 정보 수정, 문의, 회원 탈퇴 등 다양한 사용자 관리 과정을 모두 Form 기반으로 구현한 프로젝트입니다. 뉴스 리스트 화면을 활용해 로그인 전/후 접근 권한과 데이터 표시 방식을 구분하여 사용자 흐름을 구성했습니다.",
    features: [
      { id: 1, dec: "회원가입: 동의서 확인 후 가입 진행" },
      { id: 2, dec: "로그인 / 로그아웃 기능" },
      {
        id: 3,
        dec: "비로그인 시 일부 데이터만 표시, 로그인 후 전체 데이터 열람",
      },
      {
        id: 4,
        dec: "로그인 상태에 따른 페이지 접근 제어 (비로그인 접근 시 메인으로 이동)",
      },
      { id: 5, dec: "유저 페이지에서 정보 수정, 문의, 회원 탈퇴 Form 처리" },
      { id: 6, dec: "라우터를 통한 화면 전환 및 권한 관리 구조" },
    ],
    description:
      "회원가입, 로그인, 로그아웃, 정보 수정, 문의, 회원 탈퇴 등 사용자 관리 기능을 모두 Form으로 구현했습니다. 로그인 상태에 따라 접근 가능한 페이지와 데이터 범위를 제어하고, 입력 검증과 라우터 기반 페이지 이동까지 포함해 Form 처리와 권한 관리 전반을 경험할 수 있는 프로젝트입니다.",
    projectLinks: {
      result: "https://nonamehj.github.io/form-access-control",
      source: "https://github.com/nonamehj/form-access-control",
    },
  },
  {
    id: 3,
    title: "영화 검색 뷰어",
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
    img: movielistImage,
    overview:
      "TMDB API를 활용해 영화 목록을 검색, 카테고리별 조회, 상세 정보 확인까지 가능한 영화 탐색 프로젝트입니다. 상단 슬라이드와 하단 전체 이미지 갤러리를 통해 인터랙티브하게 영화 데이터를 시각화합니다.",
    features: [
      { id: 1, dec: "TMDB API를 활용해 영화 데이터를 Fetch 및 표시" },
      { id: 2, dec: "카테고리 선택과 검색을 통해 영화 조회" },
      {
        id: 3,
        dec: "영화 선택 시 제목, 평점, 개봉일, 줄거리 등 상세 정보 확인",
      },
      { id: 4, dec: "상단 이미지 3개 자동 슬라이드 및 좌우 버튼 이동" },
      { id: 5, dec: "하단 전체 이미지 클릭 시 상단 슬라이드 반영 " },
    ],
    description:
      "TMDB API를 활용하여 영화 데이터를 Fetch하고 화면에 표시하는 프로젝트입니다. 사용자는 카테고리 선택이나 검색을 통해 원하는 영화를 조회할 수 있으며, 영화 선택 시 제목, 평점, 개봉일, 줄거리 등 상세 정보를 확인할 수 있습니다. 상단 슬라이드는 자동으로 넘어가며 버튼 조작도 가능하고, 하단 이미지 목록을 클릭하면 상단 슬라이드에 선택한 영화가 반영됩니다. 반응형 그리드 구조로 PC, 태블릿, 모바일 환경에서 모두 적절한 UI를 제공하며, 카테고리별 페이지 이동도 지원합니다. 단순 영화 리스트 표시를 넘어, Fetch 기반 데이터 처리와 인터랙티브 UI 경험을 담은 포트폴리오용 프로젝트입니다.",
    projectLinks: {
      result: "https://nonamehj.github.io/movie-search-viewer",
      source: "https://github.com/nonamehj/movie-search-viewer",
    },
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
    img: tableorderImage,
    overview:
      "사용자가 상품을 보고 주문할 수 있는 간단한 테이블 오더 시스템 애플리케이션입니다.",
    features: [
      { id: 1, dec: "카테고리 선택 시 해당 음료 리스트 표시" },
      { id: 2, dec: "음료 선택 후 옵션 선택 모달 제공, 옵션에 따른 가격 반영" },
      { id: 3, dec: "장바구니에서 수량 조정 및 삭제 가능" },
      { id: 4, dec: "주문 완료 시 결제 내역 표시" },
      { id: 5, dec: "전체 주문 내역에서 선택 옵션 포함 모든 주문 확인 가능" },
      { id: 6, dec: "직원 호출 버튼 클릭 시 알림 문구 모달 표시" },
      { id: 7, dec: "리듀서를 활용한 상태 관리 구현" },
    ],
    description:
      "카페 테이블 오더 프로젝트입니다. 사용자는 카테고리를 선택해 음료 리스트를 확인하고, 원하는 음료를 선택한 후 모달에서 옵션을 선택할 수 있습니다. 선택한 옵션에 따라 가격이 실시간으로 반영되며, 장바구니에서는 수량 조정과 삭제가 가능합니다. 주문 완료 시 결제 내역이 표시되며, 전체 주문 내역을 통해 모든 선택 옵션과 음료를 확인할 수 있습니다. 직원 호출 버튼을 누르면 화면에 알림 문구 모달이 표시됩니다. 상태 관리는 리듀서를 활용하여 구현하였습니다.",
    projectLinks: {
      result: "https://nonamehj.github.io/cafe-tableorder",
      source: "https://github.com/nonamehj/cafe-tableorder",
    },
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

export const thumbnailData = [
  {
    id: 1,
    image: todoThumb,
    title: "오늘할일 & 일정관리",
  },
  {
    id: 2,
    image: formThumb,
    title: "회원 폼",
  },
  {
    id: 3,
    image: movieThumb,
    title: "영화리스트",
  },
  {
    id: 4,
    image: tableThumb,
    title: "카페 테이블오더",
  },
];

export const galleryData = [
  {
    id: 1,
    title: "오늘할일 & 일정관리",
    images: {
      767: [
        { feature: "메인", photo: "/images/todolist/767/main.webp" },
        { feature: "오늘할일", photo: "/images/todolist/767/todo.webp" },
        { feature: "일정관리", photo: "/images/todolist/767/calendar.webp" },
      ],
      1280: [
        { feature: "메인", photo: "/images/todolist/1280/main.webp" },
        { feature: "오늘할일", photo: "/images/todolist/1280/todo.webp" },
        { feature: "일정관리", photo: "/images/todolist/1280/calendar.webp" },
      ],
    },
    // projectImage: [
    //   {
    //     id: 767,
    //     images: [
    //       { feature: "메인", photo: "a" },
    //       { feature: "네비", photo: "aa" },
    //     ],
    //   },
    //   {
    //     id: 768,
    //     images: [
    //       { feature: "메인", photo: "b" },
    //       { feature: "섹션", photo: "bb" },
    //       { feature: "몰루", photo: "bbb" },
    //       { feature: "뭘까", photo: "bbbbb" },
    //       { feature: "뭐야", photo: "bbbbbb" },
    //       { feature: "카피", photo: "bbbbbbb" },
    //       { feature: "아티", photo: "bbbbbbbb" },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    title: "회원 form관리",
    images: {
      767: [
        {
          feature: "로그인전 메인",
          photo: "/images/form/767/formMainBefore.webp",
        },
        { feature: "로그인", photo: "/images/form/767/formLogin.webp" },
        { feature: "동의서", photo: "/images/form/767/formAgree.webp" },
        { feature: "회원가입", photo: "/images/form/767/formSignUp.webp" },
        {
          feature: "로그인후 메인",
          photo: "/images/form/767/formMainAfter.webp",
        },
        { feature: "회원탈퇴", photo: "/images/form/767/formDelete.webp" },
      ],
      1280: [
        {
          feature: "로그인전 메인",
          photo: "/images/form/1280/formMainBefore.webp",
        },
        { feature: "로그인", photo: "/images/form/1280/formLogin.webp" },
        { feature: "동의서", photo: "/images/form/1280/formAgree.webp" },
        { feature: "회원가입", photo: "/images/form/1280/formSignUp.webp" },
        {
          feature: "로그인후 메인",
          photo: "/images/form/1280/formMainAfter.webp",
        },
        { feature: "회원탈퇴", photo: "/images/form/1280/formDelete.webp" },
      ],
    },
    // projectImage: [
    //   {
    //     id: 1,
    //     images: [
    //       { photo: "c" },
    //       { photo: "cc" },
    //       { photo: "ccc" },
    //       { photo: "cccc" },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     images: [
    //       { photo: "d" },
    //       { photo: "dd" },
    //       { photo: "ddd" },
    //       { photo: "dddd" },
    //     ],
    //   },
    // ],
  },
  {
    id: 3,
    title: "무비리스트",
    images: {
      767: [
        { feature: "메인", photo: "/images/movielist/767/main.webp" },
        { feature: "목록", photo: "/images/movielist/767/list.webp" },
        { feature: "상세보기", photo: "/images/movielist/767/detail.webp" },
        { feature: "검색목록", photo: "/images/movielist/767/searchList.webp" },
      ],
      1280: [
        { feature: "메인", photo: "/images/movielist/1280/main.webp" },
        { feature: "목록", photo: "/images/movielist/1280/list.webp" },
        { feature: "상세보기", photo: "/images/movielist/1280/detail.webp" },
        {
          feature: "검색목록",
          photo: "/images/movielist/1280/searchList.webp",
        },
      ],
    },
    // projectImage: [
    //   {
    //     id: 1,
    //     images: [
    //       { photo: "e" },
    //       { photo: "ee" },
    //       { photo: "eee" },
    //       { photo: "eeee" },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     images: [
    //       { photo: "f" },
    //       { photo: "ff" },
    //       { photo: "fff" },
    //       { photo: "ffff" },
    //     ],
    //   },
    // ],
  },
  {
    id: 4,
    title: "테이블 오더",
    images: {
      767: [
        { feature: "메뉴", photo: "/images/tableorder/767/menu.webp" },
        { feature: "옵션", photo: "/images/tableorder/767/option.webp" },
        { feature: "카트", photo: "/images/tableorder/767/cart.webp" },
        {
          feature: "주문완료",
          photo: "/images/tableorder/767/orderComplete.webp",
        },
        {
          feature: "주문내역",
          photo: "/images/tableorder/767/orderHistory.webp",
        },
      ],
      1280: [
        { feature: "메뉴", photo: "/images/tableorder/1280/menu.webp" },
        { feature: "옵션", photo: "/images/tableorder/1280/option.webp" },
        { feature: "카트", photo: "/images/tableorder/1280/cart.webp" },
        {
          feature: "주문완료",
          photo: "/images/tableorder/1280/orderComplete.webp",
        },
        {
          feature: "주문내역",
          photo: "/images/tableorder/1280/orderHistory.webp",
        },
      ],
    },
    // projectImage: [
    //   {
    //     id: 1,
    //     images: [
    //       { photo: "g" },
    //       { photo: "gg" },
    //       { photo: "ggg" },
    //       { photo: "gggg" },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     images: [
    //       { photo: "h" },
    //       { photo: "hh" },
    //       { photo: "hhh" },
    //       { photo: "hhhh" },
    //     ],
    //   },
    // ],
  },
];
