import _ from 'lodash';
export default /*@ngInject*/class TestCtrl{
  constructor(items,guesses,$state,$stateParams){
    this.items=items;
    this.guesses=guesses;
    if($state.current.name!=='main.content.unit.test'){$state.go('^.');}
    if(items.length===0){$state.go('.noitems');}
  }
  get max(){
    return this.items.length;
  }
  get done(){
    return _.size(this.guesses);
  }
  get item(){
    return _.find(this.items,function(item){
      return this.guesses[item._id] ? false : true;
    },this);
  }
  clean(){
    
  }
}
/*
angular.module("wbt")
.controller("testCtrl",function(user,content,unit,items,guesses){
  var self=this;
  this.guesses=guesses;
  this.state="intro";
  this.progress={
    max: items.length,
    maxPoints: content.maxPoints(items),
    done: _.size(guesses),
    points: content.points(guesses)
  };
  this.group=function(){
    this.items=_.groupBy(items,function(item){
      return this.guesses[item._id] ? "done" : "todo";
    },this);
  };
  this.solve=function(){
    return content.solve(unit._id,this.item,this.choice)
    .then(function(){
      self.guesses[self.item._id]=angular.copy(self.choice);
      self.group();
      self.progress.done=_.size(self.guesses);
      self.progress.points=content.points(self.guesses);
      if(self.progress.done===self.progress.max){
        return user.setComplete(unit._id);
      }
    });
  };
  this.next=function(){
    if(!this.items.todo){
      this.state="finished";
    }
    else{
      this.item=this.items.todo[0];
      this.state="item";
      this.choice=content.type(this.item);
    }
  };
  this.group();
  if(!this.items.todo){this.state="finished";}
});
*/