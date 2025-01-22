corepack enable

yarn set version stable
yarn config set nodeLinker node-modules

yarn create vite .

yarn add redux

yarn add react-redux

yarn

yarn dev


---------------
Redux DevTools
https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
![](_md_img/flow_images/flow%202025-01-22-16-37-45.png)

2-й или 3-й параметр

```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

https://monsterlessons.com/project/lessons/reduxjs-redux-devtools

![](_md_img/flow_images/flow%202025-01-22-16-27-40.png)
![](_md_img/flow_images/flow%202025-01-22-16-33-58.png)

-----------------