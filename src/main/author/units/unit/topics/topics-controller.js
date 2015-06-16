import _ from 'lodash';
export default /*@ngInject*/class TopicsCtrl{
  constructor(topics){
    this.topics=topics;
    this.new={};
    this.selected=null;
    this.collapse=false;
    this.newFields=[{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'titel',
        required: true,
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
        label: 'Text',
        required: true,
        placeholder: 'hier Text des Subkapitels eingeben'
      }
    }];
  }
  save(){
    this.topics.post(this.new)
    .then((topic) => {
      this.topics.push(topic);
      this.selected=topic;
      this.new={};
    });
  }
  remove(){
    if(!this.selected){return;}
    this.selected.remove()
    .then(() => {
      _.remove(this.topics,{_id: this.selected._id});
      this.selected=null;
    });
  }
  moveUp(){
    this.selected.moveUp()
    .then((topics) => {
      this.topics=topics;
    });
  }
  moveDown(){
    this.selected.moveDown()
    .then((topics) => {
      this.topics=topics;
    });
  }
}
