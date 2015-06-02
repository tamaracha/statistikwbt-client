export default class LoginCtrl{
  constructor(user,$modalInstance,$q){
    this.user=user;
    this.$q=$q;
    this.$modalInstance=$modalInstance;
    this.name="";
    this.pass="";
    this.message='';
  }
  login(){
    return this.user.authenticate(this.name,this.pass)
    .then(this.user.init)
    .then((r) => {return this.$modalInstance.close(r.data._id);})
    .catch(      (e) => {this.message=e.data; return e;});
  }
  cancel(){
    this.$modalInstance.dismiss();
  }
}