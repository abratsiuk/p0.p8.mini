    ```
    https://redux.js.org/introduction/getting-started

    ![](_md_img/flow_images/flow%202025-03-09-16-27-56.png)
    npx degit reduxjs/redux-templates/packages/vite-template-redux .


    https://github.com/reduxjs/redux-templates

    ![](_md_img/flow_images/flow%202025-03-09-16-28-31.png)

    vite-template-redux: Vite, with TypeScript
    cra-template-redux-typescript: Create-React-App, with TypeScript
    cra-template-redux: Create-React-App, with JavaScript
    expo-template-redux: Expo, with TypeScript
    rtk-app-structure-example: A standalone example of a Redux Toolkit
    ```

npx degit reduxjs/redux-templates/packages/vite-template-redux .

-----------------------

git init
git add README.md
git commit -m "vite-template-redux: Vite, with TypeScript"
git branch -M main
git remote add origin https://github.com/abratsiuk/02.rtk.shop.git
git push -u origin main


git add -A; git commit -m "vite-template-redux: Vite, with TypeScript"; git push;

---------------------------
PS E:\R\02.rtk.shop> npm run build

> vite-template-redux@0.0.0 build
> tsc && vite build

error TS6305: Output file 'E:/R/02.rtk.shop/vite.config.d.ts' has not been built from source file 'E:/R/02.rtk.shop/vite.config.ts'.
  The file is in the program because:
    Matched by default include pattern '**/*'


Found 1 error.

Iskin:
            Ошибка возникает из-за того, что TypeScript пытается скомпилировать файл конфигурации Vite (`vite.config.ts`), чего делать не следует.

            Чтобы это исправить, необходимо исключить файл `vite.config.ts` из компиляции TypeScript. Для этого:

            1. Откройте файл `tsconfig.json`.
            2. В раздел `exclude` добавьте файл конфигурации Vite:

            ```json
            {
            "exclude": ["node_modules", "dist", "vite.config.ts"]
            }
            ```

            Это предотвратит компиляцию файла конфигурации Vite и устранит ошибку при выполнении команды сборки.

            После этого запустите ещё раз:

            ```bash
            npm run build
            ```

            Сборка должна пройти успешно.

-----------------------