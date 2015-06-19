export default /*@ngInject*/class LoginCtrl{
  constructor(user,$modalInstance){
    this.user=user;
    this.$modalInstance=$modalInstance;
    this.data={};
    this.loginFields=[{
      key: 'email',
      type: 'horizontalInput',
      templateOptions: {
        type: 'email',
        label: 'E-Mail',
        required: true,
        placeholder: 'name@provider.com',
        maxlength: 20
      },
      validators: {
        userExists: {
          expression: function($viewValue){
            return user.check('email',$viewValue);
          },
          message: function($viewValue){
            return `${$viewValue} ist kein registrierter Benutzer`;
          }
        }
      },
      modelOptions: {
        updateOn: 'default blur',
        debounce: {default: 500, blur: 0}
      }
    },
    {
      key: 'password',
      type: 'horizontalInput',
      templateOptions: {
        type: 'password',
        label: 'Passwort',
        required: true,
        placeholder: 'unlösbar',
        minlength: 8
      }
    }];
  }
  login(){
    return this.user.authenticate(this.data,true)
    .then((data) => {
      return this.$modalInstance.close(data);
    },(e) => {
      this.message=e.data;
      return e;
    });
  }
  cancel(){
    this.$modalInstance.dismiss('cancel');
  }
}