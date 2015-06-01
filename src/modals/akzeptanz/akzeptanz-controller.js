export default class AkzeptanzCtrl{
  constructor($modalInstance,UnitModel,summary){
    this.UnitModel=UnitModel;
    this.$modalInstance=$modalInstance;
    this.summary=summary;
    this.labels=[
      "keine Antwort",
      "stimme nicht zu",
      "stimme weniger zu",
      "stimme teilweise zu",
      "stimme eher zu",
      "stimme zu"
    ];
  }
  ok(){
    return this.UnitModel.comment(this.summary.comment)
    .then(this.$modalInstance.close);
  }
  cancel(){
    return this.$modalInstance.dismiss("cancel");
  }
}