import _ from 'lodash';

export default /*@ngInject*/class UnitsController{
  constructor(units){
    this.units=units;
    this.new={};
    this.requires={};
    this.collapse=false;
  }
  setRequires(){
    let requires=[];
    _.each(this.requires,function(val,key){
      if(val){requires.push(key);}
    },this);
    this.new.requires=requires;
  }
  save(){
    this.setRequires();
    return this.units.post(this.new)
    .then((unit) => {
      this.new={};
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
