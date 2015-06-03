import _ from 'lodash';
export default /*@ngInject*/class TopicsCtrl{
  constructor(topics){
    this.topics=topics;
    this.new={};
    this.selected=null;
  }
  save(){
    this.topics.post(this.new)
    .then((topics) => {
      this.topics=topics;
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
