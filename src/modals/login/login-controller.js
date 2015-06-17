export default /*@ngInject*/class LoginCtrl{
  constructor(user,$modalInstance,$q,Restangular){
    this.user=user;
    this.$q=$q;
    this.$modalInstance=$modalInstance;
    this.data={
      email: '',
      password: ''
    };
    this.message='';
    this.loginFields=[{
      key: 'email',
      type: 'horizontalInput',
      templateOptions: {
        type: 'email',
        label: 'E-Mail',
        required: true,
        requiredValidatorMessage: 'bitte ausfüllen',
        placeholder: 'name@provider.com',
        maxlength: 20
      },
      validators: {
        userExists: {
          expression: function(value){
            var query={email: value};
            return Restangular.all('users').head(query);
          },
          message: '$viewValue+" existiert nicht"'
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
    return this.user.authenticate(this.data.email,this.data.password)
    .then(() => {
      return this.user.init()
      .then(() => {
        this.$modalInstance.close();
      });
    })
    .catch(      (e) => {this.message=e.data; return e;});
  }
  cancel(){
    this.$modalInstance.dismiss('cancel');
  }
}