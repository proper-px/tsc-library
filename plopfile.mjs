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
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: '.plop/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: '.plop/component-test.hbs',
      },
      {
        type: 'add',
        path: 'src/styles/components/{{pascalCase name}}/_{{camelCase name}}.tsx',
        templateFile: '.plop/component-style.hbs',
      },
      {
        type: 'modify',
        path: 'src/components/index.tsx',
        pattern: /(\/\/ PLOP)/g,
        template: 'export { {{pascalCase name}} } from "./{{pascalCase name}}";\n$1',
      },
      {
        type: 'modify',
        path: 'src/styles/components/_components.scss',
        pattern: /(\/\/ PLOP)/g,
        template: '@import "./{{pascalCase name}}/{{camelCase name}}";\n$1',
      },
      {
        type: 'modify',
        path: 'src/index.tsx',
        pattern: / }/g,
        template: ', {{pascalCase name}} }',
      },
    ],
  });
}
