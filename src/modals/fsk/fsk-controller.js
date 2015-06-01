export default class FskCtrl{
  constructor(UserModel,$modalInstance){
    this.UserModel=UserModel;
    this.$modalInstance=$modalInstance;
    this.sessko=[];
  }
  ok(){
    return this.UserModel.createFsk(this.sessko)
    .then($modalInstance.close);
  }
  cancel(){
    return $modalInstance.dismiss();
  }
}