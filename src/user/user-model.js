export default /*@ngInject*/class user{
  constructor(Restangular,$localStorage,$window,$q){
    this.Users=Restangular.all('users');
    this.Token=Restangular.one('tokens','new');
    this.$storage=$localStorage;
    this.$q=$q;
    this.$window=$window;
    this.data=null;
    this.init();
  }
  get authenticated(){
    return this.$storage._id&&this.$storage.token ? true : false;
  }
  set authenticated(data){
    this.$storage.token=data.token;
    this.$storage._id=data._id;
  }
  init(){
    if(this.authenticated){
      return this.Users.get(this.$storage._id)
      .then((data) => {
        this.data=data;
        return data;
      });
    }
    else{this.inauthenticate();}
  }
  authenticate(name,pass){
    return this.$q((resolve,reject) => {
      if(!name||!pass){return reject('missing credentials');}
      let str=this.$window.btoa(name+':'+pass);
      let authorization='basic '+str;
      return resolve(this.Token.get(null,{authorization}));
    })
    .then((data) => {
      this.authenticated=data;
      return data;
    });
  }
  inauthenticate(){
    this.$storage.$reset();
    this.data=null;
  }
  create(form){
    return this.Users.post(form)
    .then((data) => {
      this.data=data;
      return this.authenticate(form.email,form.password);
    });
  }
  remove(){
    return this.data.remove()
    .then(() => this.inauthenticate());
  }
}