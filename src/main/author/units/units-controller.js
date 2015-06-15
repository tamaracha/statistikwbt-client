import _ from 'lodash';

export default /*@ngInject*/class UnitsController{
  constructor(units){
    this.collapse=false;
    this.units=units;
    this.new={};
    this.newFields=[{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Titel',
        placeholder: 'Titel des Kapitels',
        required: true
      }
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Kapitels'
      }
    },
    {
      key: 'requires',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Voraussetzungen',
        options: this.units,
        labelProp: 'title',
        valueProp: '_id'
      }
    },
    {
      key: 'description',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        label: 'Beschreibung',
        required: true,
        placeholder: 'hier Beschreibungstext eingeben'
      }
    }];
  }
  save(){
    return this.units.post(this.new)
    .then((unit) => {
      this.units.push(unit);
      this.selected=unit;
      this.new={};
    });
  }
  remove(){
    if(!this.selected){return;}
    return this.selected.remove()
    .then((unit) => {
      _.remove(this.units,{_id: this.selected._id});
      this.selected=null;
    });
  }
}
