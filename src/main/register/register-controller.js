export default /*@ngInject*/class RegisterCtrl{
  constructor(user,subjects,$state){
    this.user=user;
    this.subjects=subjects;
    this.$state=$state;
    this.registerData={
      role: 'user',
      profile: {
        age: 20
      }
    };
    this.fields=[{
      key: 'email',
      type: 'horizontalInput',
      templateOptions: {
        label: 'E-Mail-Adresse',
        type: 'email',
        required: true
      }
    },
    {
      key: 'password',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Passwort',
        type: 'password',
        minlength: 8,
        required: true
      }
    },
    {
      key: 'profile.nickname',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Nickname'
      }
    },
    {
      key: 'profile.age',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Alter',
        type: 'number',
        placeholder: 20
      }
    },
    {
      key: 'profile.sex',
      type: 'horizontalRadioInline',
      templateOptions: {
        label: 'Geschlecht',
        required: true,
        options: [{
          name: 'männlich',
          value: 'male'
        },
        {
          name: 'weiblich',
          value: 'female'
        }]
      }
    }];
  }
  register(){
    return this.user.create(this.registerData)
    .then((data) => {
      return this.user.authenticate(this.registerData,false)
      .then(() => {;
      this.$state.go('^.home');
      });
    },(e) => {
      this.error=e;
    });
  }
}