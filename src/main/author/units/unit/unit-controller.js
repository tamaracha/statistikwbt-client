import _ from 'lodash';
export default /*@ngInject*/class UnitCtrl{
  constructor($scope,jsonpatch,unit){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.unit = unit.plain();
    this.patches = [];
    this.error = null;
    this.unitFields = [{
      key: '_id',
      type: 'horizontalStatic',
      templateOptions: {
        label: 'ID'
      }
    },
    {
      key: 'title',
      type: 'horizontalInput',
      modelOptions,
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
      modelOptions,
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Kapitels'
      }
    },
    {
      key: 'requires',
      type: 'horizontalMultiCheckbox',
      modelOptions,
      templateOptions: {
        options: _.reject($scope.units.units,{_id: unit._id}),
        label: 'Voraussetzungen',
        valueProp: '_id',
        labelProp: 'title'
      }
    },
    {
      key: 'description',
      type: 'horizontalMarkdownArea',
      modelOptions,
      templateOptions: {
        label: 'Beschreibung',
        required: true,
        placeholder: 'Beschreibungstext'
      }
    }];
    $scope.$watch('units.units',() => {
      this.unitFields[3].templateOptions.options = _.reject($scope.units.units,{_id: unit._id});
    },true);
    $scope.$watch('unit.unit',(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal,val);
      if(this.patches.length > 0){
        return unit.patch(this.patches)
        .then(() => {
          this.patches = [];
          this.error = null;
        },(e) => {
          this.error = e;
          this.recover = oldVal;
        });
      }
    },true);
  }
}
