export default /*@ngInject*/class LoginCtrl{
  constructor(user,$modalInstance,$q){
    this.user=user;
    this.$q=$q;
    this.$modalInstance=$modalInstance;
    this.name='';
    this.pass='';
    this.message='';
  }
  login(){
    return this.user.authenticate(this.name,this.pass)
    .then(() => {
      return this.user.init()
      .then(() => {
        this.$modalInstance.close();
      });
    })
    .catch(      (e) => {this.message=e.data; return e;});
  }
  cancel(){
    this.$modalInstance.dismiss('lala');
  }
}