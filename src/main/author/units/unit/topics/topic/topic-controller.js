export default /*@ngInject*/class TopicCtrl{
  constructor($scope,jsonpatch,topic){
    this.topic=topic.plain();
    this.patches=[];
    this.error=null;
    this.topicFields=[{
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
        required: true,
        label: 'Titel',
        placeholder: 'Titel des Subkapitels'
      }
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Subkapitels'
      }
    },
    {
      key: 'body',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        required: true,
        label: 'Text',
        placeholder: 'Hier Text des Subkapitels eingeben'
      }
    }];
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