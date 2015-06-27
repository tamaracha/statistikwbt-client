export default /*@ngInject*/class DownloadController{
  constructor(units){
    this.units = units;
    this.data = {
      contents: ['body'],
      format: 'markdown'
    };
    this.fields = [{
      key: 'units',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Kapitel',
        options: units,
        valueProp: '_id',
        labelProp: 'title'
      }
    },
    {
      key: 'contents',
      type: 'horizontalMultiCheckboxInline',
      templateOptions: {
        label: 'Inhalte',
        options: [{
          name: 'Kerntexte',
          value: 'body'
        },
        {
          name: 'Beispiele',
          value: 'examples'
        },
        {
          name: 'Extras',
          value: 'extras'
        }]
      }
    },
    {
      key: 'format',
      type: 'horizontalRadioInline',
      templateOptions: {
        label: 'DateiFormat',
        options: [{
          name: 'MS Word',
          value: 'docx'
        },
        {
          name: 'RTF',
          value: 'rtf'
        },
        {
          name: 'Epub',
          value: 'epub'
        },
        {
          name: 'Markdown',
          value: 'markdown'
        },
        {
          name: 'LaTeX',
          value: 'latex'
        }]
      }
    }];
  }
}
