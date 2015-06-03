import _ from 'lodash';
import jsonpatch from 'fast-json-patch';
export default /*@ngInject*/class UnitCtrl{
  constructor($scope,unit){
    this.unit=unit.plain();
    this.patches=[];
    this.message=null;
    this.initRequires();
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
  initRequires(){
    let requires={};
    _.each(this.unit.requires,function(r){
      requires[r]=true;
    },this);
    this.requires=requires;
  }
  toggleRequires(id){
    let includes=_.includes(this.unit.requires,id);
    if(this.requires[id]===includes){return;}
    if(this.requires[id]===true){
      this.unit.requires.push(id);
    }
    else if(this.requires[id]===false){
      _.pull(this.unit.requires,id);
    }
  }
}
