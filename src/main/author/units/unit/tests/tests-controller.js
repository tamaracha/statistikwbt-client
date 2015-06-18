export default /*@ngInject*/class TestsCtrl{
  constructor(tests){
    this.tests=tests;
    this.newTest={tags: [
      {text: 'hallo'},
      {text: 'halli'}
    ]};
    this.newFields=[{
      type: 'horizontalMarkdownArea',
      key: 'text',
      templateOptions: {
        label: 'Aufgabenstamm',
        required: true,
        placeholder: 'Frage oder Aussage'
      }
    },
    {
      type: 'horizontalRadioInline',
      key: 'type',
      templateOptions: {
        label: 'Aufgabenformat',
        options: [{
          name: 'Multiple-Choice',
          value: 'multiple'
        },
        {
          name: 'Single-Choice',
          value: 'single'
        },
        {
          name: 'Eingabe',
          value: 'input'
        }],
        required: true
      }
    },
    {
      key: 'tags',
      template: '<tags-input ng-model="model[options.key]"></tags-input>',
      wrapper: ['horizontalBootstrapLabel','bootstrapHasError'],
      templateOptions: {
        label: 'Tags'
      }
    }];
  }
}