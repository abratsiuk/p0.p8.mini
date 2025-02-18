
https://www.npmjs.com/package/cra-template-redux-typescript

npx create-react-app . --template redux-typescript

------------------
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: 06.cra.redux.ts@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
npm error node_modules/@testing-library/react
npm error   @testing-library/react@"^13.0.1" from the root project
---------------------

npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18

Remove-Item -Recurse -Force .\node_modules\
Remove-Item -Force .\package-lock.json

npm install

npm i @reduxjs/toolkit
npm i react-redux
npm i @testing-library/react

delete node_modules
delete packaje-lock.json

npm i

---------------

npm uninstall @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-private-methods @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-property-in-object @babel/plugin-proposal-optional-chaining
npm install @babel/plugin-transform-nullish-coalescing-operator @babel/plugin-transform-private-methods @babel/plugin-transform-numeric-separator @babel/plugin-transform-class-properties @babel/plugin-transform-private-property-in-object @babel/plugin-transform-optional-chaining

npm i rimraf@4 glob@9

npm audit fix --force

npm start

-------------------
npm install react-scripts@5.0.1
npm install typescript@4.9.5
