export default /*@ngInject*/class TestsCtrl{
  constructor(tests,Restangular,$stateParams){
    this.tests=tests;
    this.Tests=Restangular.one('units',$stateParams.unit).all('tests');
    this.newTest={tags: [], options: []};
    this.error=null;
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
      type: 'repeatSection',
      key: 'choices',
      templateOptions: {
        btnText:'Antwortoption hinzufügen',
        label: 'Antwortoptionen',
        fields: [
          {
            type: 'horizontalInput',
            key: 'text',
            templateOptions: {
              type: 'text',
              label: 'Antwort',
              placeholder: 'Lösung',
              required: true
            }
          },
          {
            key: 'correct',
            type: 'horizontalCheckbox',
            templateOptions: {
              label: 'Korrekt'
            }
          },
          {
            key: 'feedback',
            type: 'horizontalInput',
            templateOptions: {
              label: 'Feedback',
              type: 'text',
              required: true,
              placeholder: '*lob*'
            }
          }
        ]
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
  create(){
    this.Tests.post(this.newTest)
    .then((data) => {
      this.tests.push(data);
      this.newTest={};
    }, (data) => {
      this.error=data.data;
    });
  }
}