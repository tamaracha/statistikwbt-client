import _ from 'lodash';
export default /*@ngInject*/class UnitCtrl{
  constructor($scope,jsonpatch,unit){
    this.unit=unit.plain();
    this.patches=[];
    this.error=null;
    this.unitFields=[{
      key: '_id',
      type: 'horizontalStatic',
      templateOptions: {
        label: 'ID'
      }
    },
    {
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
        valueProp: '_id',
        labelProp: 'title',
        options: _.reject($scope.units.units,{_id: unit._id})
      }
    },
    {
      key: 'description',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        label: 'Beschreibung',
        required: true,
        placeholder: 'hier Beschreibungstext eintragen'
      }
    }];
    $scope.$watch('units.units',(val,oldVal) => {
      this.unitFields[3].templateOptions.options=_.reject($scope.units.units,{_id: unit._id});
    },true);
    $scope.$watch('unit.unit',(val,oldVal) => {
      this.patches=jsonpatch.compare(oldVal,val);
      if(this.patches.length===0){return;}
      return unit.patch(this.patches)
      .then((data) => {
        this.patches=[];
        this.error=false;
      },(res) => {
        this.error=true;
        this.recover=oldVal;
      });
    },true);
  }
}
