import login from '../modals/login';
export default /*@ngInject*/class MainCtrl{
  constructor($state,$stateParams,user,modals,$modal){
    this.$state=$state;
    this.$stateParams=$stateParams;
    this.user=user;
    this.modals=modals;
    this.ngModelOptions={
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
  }
}
