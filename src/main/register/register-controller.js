export default /*@ngInject*/class RegisterCtrl{
  constructor($http){
    this.$http=$http;
    this.registerData={
      profile: {
        age: 20
      }
    };
  }
  getSubjects(val){
    return this.$http.get('api/subjects',{params: {search: val}});
  }
}