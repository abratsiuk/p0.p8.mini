corepack enable

yarn set version stable
yarn config set nodeLinker node-modules

yarn create vite .

yarn add redux

yarn add react-redux

yarn add @redux-devtools/extension

yarn add lodash

yarn add react-router-dom@^6.0.0
yarn up react-router-dom@^6.0.0
yarn add react-router-dom@^6.28.2

yarn

yarn dev


---------------
Redux DevTools
https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
![](_md_img/flow_images/flow%202025-01-22-16-37-45.png)

### variant 1

2-й или 3-й параметр

```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```
### variant 2

```
yarn add @redux-devtools/extension
```

```
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const store = createStore(
  reducer,
  /* preloadedState, */ devToolsEnhancer(),
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
);
```

https://monsterlessons.com/project/lessons/reduxjs-redux-devtools

![](_md_img/flow_images/flow%202025-01-22-16-27-40.png)
![](_md_img/flow_images/flow%202025-01-22-16-33-58.png)

-----------------yarn upgrade react-router-dom@^6.0.0