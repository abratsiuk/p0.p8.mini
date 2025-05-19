
## install

https://react.dev/learn/build-a-react-app-from-scratch

npm create vite@latest my-app -- --template react

React
Typescript

## burger


### fix error in import interface

![](_md_img/flow_images/flow%202025-05-19-17-52-53.png)

'IPropsClassName' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.ts(1484)

это из-за того что

"verbatimModuleSyntax": true

В этом режиме все импорты типов нужно делать через import type, иначе TypeScript будет ругаться.

import **type** { IPropsClassName } from '../interfaces/IPropsClassName';

отключил  tsconfig.app.json

    "verbatimModuleSyntax": false,