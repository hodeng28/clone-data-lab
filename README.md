#프로젝트 디렉토리 구조 설명
view state 분할
└── src
    ├── api
    │   ├── apiHandler.js
    │   ├── articleApi.js
    │   ├── categoryApi.js
    │   └── userApi.js
    ├── common
    │   ├── components
    │   │   └── ArticleComponent.jsx
    │   └── containers
    │       └── ArticleContainer.js
    ├── index.js
    ├── pages
    │   ├── CategoryPage
    │   │   ├── CategoryPageContainer.js
    │   │   └── components
    │   │       └── CategoryPageComponent.jsx
    │   └── HomePage
    │       ├── components
    │       │   ├── ArticleListComponent.jsx
    │       │   ├── CategoryComponent.jsx
    │       │   └── HomePageComponent.jsx
    │       └── HomePageContainer.js
    ├── router
    |   ├── routes.js
    ├── state
    │   ├── article
    │   │   ├── articleActions.js
    │   │   └── articleReducer.js
    │   ├── category
    │   │   ├── categoryActions.js
    │   │   └── categoryReducer.js
    │   ├── middleware.js
    │   ├── store.js
    │   └── user
    │       ├── userActions.js
    │       └── userReducer.js
    └── utils
    │   └── authUtils.js    
    ├── constants.js