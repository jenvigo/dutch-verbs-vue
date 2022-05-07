# Dutch verbs with VueJS

This is a simple VueJS test made while watching this Udemy course (https://www.udemy.com/course/vuejs-2-the-complete-guide/)

### Try it

- Run in your terminal `npm run serve`
- Go to the url that prints in the terminal. For example: http://localhost:8080/

## Errors

### ES-Lint

Failed to compile.

./src/components/HintAnswer.vue
Module Error (from ./node_modules/eslint-loader/index.js):

/home/juan/PhpstormProjects/dutch-verbs-vue/src/components/HintAnswer.vue
8:1   error  Expected indentation of 1 tab but found 2 spaces   indent
9:1   error  Expected indentation of 1 tab but found 2 spaces   indent

#### Solution: 

run in terminal: eslint --fix "./src/**"
or
run npm lint




