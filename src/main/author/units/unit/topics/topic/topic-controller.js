export default /*@ngInject*/class TopicCtrl{
  constructor($scope,jsonpatch,topic){
    this.topic=topic.plain();
    this.patches=[];
    this.error=null;
    $scope.$watch('topic.topic',(val,oldVal) => {
      this.patches=jsonpatch.compare(oldVal,val);
      if(this.patches.length===0){return;}
      return topic.patch(this.patches)
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