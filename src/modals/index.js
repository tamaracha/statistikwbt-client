import login from './login';
import fsk from './fsk';
import akzeptanz from './akzeptanz';

export default /*@ngInject*/class modals{
  constructor($modal){
    this.$modal=$modal;
  }
  login(){
    var modalInstance=this.$modal.open(login);
    modalInstance.result.then(null,(res) => {
      console.log(res);
    });
  }
  fsk(){
    return this.$modal.open(fsk);
  }
  akzeptanz(){
    return this.$modal.open(akzeptanz);
  }
}