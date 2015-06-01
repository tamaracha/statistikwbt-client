import Remarkable from 'remarkable';
export default /*@ngInject*/class MarkdownProvider{
  constructor(){
    var preset='full';
    var options={
      html: true,
      quotes: "„“",
      breaks: true
    };
    this.config={preset,options};
  }
  get preset(){
    return this.config.preset;
  }
  set preset(val){
    this.config.preset=val;
    return this;
  }
  get options(){
    return this.config.options;
  }
  set options(val){
    this.config.options=val;
    return this;
  }
  $get(){
    return new Remarkable(this.config.preset,this.config.options);
  }
  }