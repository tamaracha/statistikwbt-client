export default /*@ngInject*/class subjectsCtrl{
  constructor(){
    this.newFields=[{
      key: 'name',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Name',
        required: true
      }
    },
    {
      key: 'group',
      type: 'horizontalRadio',
      templateOptions: {
        label: 'Gruppe',
        options: [
      }
    }];
  }
}