import _ from 'lodash';
export default /*@ngInject*/class VegaCtrl{
  constructor(specs){
    this.specs = specs;
    this.model = {};
    this.formOptions = {
      formState: {
        renderer: 'svg'
      }
    };
    this.fields = [{
      key: '_id',
      type: 'horizontalStatic',
      templateOptions: {
        label: 'ID'
      },
      hideExpression: '!model[options.key]'
    },
    {
      key: 'name',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Name',
        type: 'text',
        required: true,
        placeholder: 'Bezeichnung für diese Spec'
      }
    },
    {
      key: 'spec',
      type: 'horizontalTextarea',
      templateOptions: {
        label: 'Spec',
        required: true,
        json: true
      },
      modelOptions: {
        updateOn: 'default blur',
        debounce: {
          default: 300,
          blur: 0
        }
      }
    },
    {
      key: 'renderer',
      model: this.formOptions.formState,
      type: 'horizontalRadioInline',
      templateOptions: {
        label: 'Renderer',
        options: [{
          name: 'Canvas',
          value: 'canvas'
        },
        {
          name: 'SVG',
          value: 'svg'
        }]
      }
    }];
  }
  save(){
    if(!this.selected){
      this.specs.post(this.model)
      .then((data) => {
        this.model = data;
        this.specs.push(data);
        this.selected = data._id;
      },
      (e) => {
        this.error = e;
      });
    }
    else{
      this.model.put()
      .then((data) => {
        this.model = data;
      },
      (e) => {
        this.error = e;
      });
    }
  }
  getSpec(){
    if(!this.selected){
      this.model = {
        spec: {}
      };
    }
    else{
      this.specs.get(this.selected)
      .then((data) => {
        this.model = data;
      },
      (e) => {
        this.error = e;
      });
    }
  }
  remove(){
    if(this.selected){
      this.model.remove()
      .then(() => {
        _.remove(this.specs,{_id: this.selected});
        this.selected = '';
        this.model = {};
      },
      (e) => {
        this.error = e;
      });
    }
  }
}
