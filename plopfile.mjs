export default function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name your new component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.tsx',
        templateFile: '.plop/component.hbs',
      },
      {
        type: 'modify',
        path: 'src/components/index.tsx',
        pattern: /(\/\/ PLOP)/g,
        template: 'export { {{name}} } from "./{{name}}";\n$1',
      },
      {
        type: 'modify',
        path: 'src/index.tsx',
        pattern: / }/g,
        template: ', {{name}} }',
      },
    ],
  });
}
