## Set up new NodeJS app with Typescript
1. `npm init`
2. `npm i typescript -D`
3. To create a typescript config file **tsconfig.json** `tsc --init`
4. Update **tsconfig.json** to setup output directory  `"outDir": "./dist"`
5. `npm i nodemon -g`

## Run compile and run in the same time
6. `npm i concurrently -D`
7. create scripts in `package.json` file
```
"scripts": {
  "build-tsc": "tsc -w",
  "run-watch": "nodemon ./dist",
  "dev": "concurrently \"npm run build-tsc\"  \"npm run run-watch\""
}
``` 
### Run the compile and run command 
8. `npm run dev`
## install Express JS framework 
9. `npm i express`

npm i @types/express -D