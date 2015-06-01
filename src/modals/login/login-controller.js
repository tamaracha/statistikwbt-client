export default class LoginCtrl{
  constructor(UserModel,$modalInstance,$q){
    this.UserModel=UserModel;
    this.$q=$q;
    this.$modalInstance=$modalInstance;
    this.name="";
    this.pass="";
    this.message='';
  }
  login(){
    return this.UserModel.authenticate(this.name,this.pass)
    .then(this.UserModel.init)
    .then((r) => {return this.$modalInstance.close(r.data._id);})
    .catch(      (e) => {this.message=e.data; return e;});
  }
  cancel(){
    this.$modalInstance.dismiss();
  }
}