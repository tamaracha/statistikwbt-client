export default /*@ngInject*/class RegisterCtrl{
  constructor(user,subjects,$state,$q){
    this.user = user;
    this.subjects = subjects;
    this.$state = $state;
    this.formOptions = {
      formState: {
        showPassword: false
      }
    };
    this.model = {
      role: 'user',
      profile: {}
    };
    function userAvailable($viewValue){
      return user.check('email',$viewValue)
      .then(() => {
        return $q.reject('exists');
      }, () => {
        return true;
      });
    }
    this.fields = [{
      key: 'email',
      type: 'horizontalInput',
      templateOptions: {
        label: 'E-Mail-Adresse',
        type: 'email',
        required: true,
        maxlength: 30,
        placeholder: 'name@provider.com'
      },
      validators: {
        userAvailable: {
          expression: userAvailable,
          message: '$viewValue+" wurde schon registriert"'
        }
      },
      modelOptions: {
        updateOn: 'default blur',
        debounce: {
          blur: 0,
          default: 500
        }
      }
    },
    {
      key: 'password',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Passwort',
        type: 'password',
        minlength: 8,
        required: true,
        placeholder: 'unlösbar'
      },
      expressionProperties: {
        'templateOptions.type': 'formState.showPassword ? "text" : "password"'
      }
    },
    {
      key: 'showPassword',
      model: this.formOptions.formState,
      type: 'horizontalCheckbox',
      templateOptions: {
        label: 'Passwort einblenden'
      }
    },
    {
      key: 'nickname',
      model: 'model.profile',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Nickname',
        maxlength: 20
      }
    },
    {
      key: 'age',
      model: 'model.profile',
      type: 'horizontalInput',
      templateOptions: {
        label: 'Alter',
        required: true,
        type: 'number',
        placeholder: 20,
        min: 0,
        max: 100,
        step: 1
      }
    },
    {
      key: 'sex',
      model: 'model.profile',
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
    },
    {
      key: 'subject',
      model: 'model.profile',
      type: 'horizontalTypeahead',
      templateOptions: {
        label: 'Studiengang',
        required: true,
        type: 'text',
        placeholder: 'hier Studiengang eingeben und auswählen',
        options: subjects,
        valueProp: 'name',
        tml: 3
      }
    },
    {
      key: 'reasons',
      model: 'model.profile',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Registrierungsgründe',
        options: [{
          name: 'Interesse für das Thema',
          value: 'interesse'
        },
        {
          name: 'Langeweile, Zeitvertreib, zufällig reingestolpert',
          value: 'langeweile'
        },
        {
          name: 'Vor- oder Nachbereitung für Klausur/Vorlesung',
          value: 'klausur'
        }]
      }
    }];
  }
  register(){
    return this.user.create(this.model)
    .then(() => {
      return this.user.authenticate(this.model,false)
      .then(() => {
        this.$state.go('^.home');
      });
    },(e) => {
      this.error = e;
    });
  }
}
