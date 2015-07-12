import _ from 'lodash';
export default /*@ngInject*/class TestCtrl{
  constructor(items,guesses,$stateParams,Restangular){
    this.items = items.plain();
    this.guesses = guesses.plain();
    this.$stateParams = $stateParams;
    this.Restangular = Restangular;
    this.getItem();
  }
  getItem(){
    const keys = _.keys(this.guesses);
    this.item = _.find(this.items,function(i){
      return !_.contains(keys,i._id);
    });
  }
  reset(){
    this.guesses = {};
    this.getItem();
  }
  get max(){
    return this.items.length;
  }
  get done(){
    return _.size(this.guesses);
  }
  get maxPoints(){
    return _.reduce(this.items,function(sum,item){
      switch(item.type){
        case 'single':
          sum = sum + 1;
          break;
        case 'multiple':
          sum = sum + item.choices.length;
          break;
        case 'input':
          sum = sum + 1;
          break;
      }
      return sum;
    },0);
  }
  get sumPoints(){
    return _.reduce(this.guesses,function(sum,guess,key){
      const item = _.find(this.items,{_id: key});
      if(!item){
        return sum;
      }
      let choice;
      switch(item.type){
        case 'single':
          choice = _.find(item.choices,{_id: guess.single});
          if(choice.correct){
            sum = sum + 1;
          }
          break;
        case 'multiple':
          _.each(item.choices,function(c){
            const checked = _.contains(guess.multiple,c._id);
            if(checked === c.correct){
              sum = sum + 1;
            }
          },this);
          break;
        case 'input':
          choice = _.find(item.choices,{text: guess.input});
          if(choice.correct){
            sum = sum + 1;
          }
          break;
      }
      return sum;
    },0,this);
  }
  submit(){
    const guess = {
      unit: this.$stateParams.unit,
      item: this.item._id,
      response: {}
    };
    switch(this.item.type){
      case 'single':
      if(!this.input){
        return;
      }
      this.form.item.$setValidity('correct',this.input.correct);
      guess.response = {single: this.input._id};
      break;
      case 'input':
      if(!this.input){
        return;
      }
      const choice = _.find(this.item.choices,{text: this.input});
      if(choice){
        this.form.item.$setValidity('correct',choice.correct);
        this.output = choice.feedback;
      }
      else{
        this.form.item.$setValidity('correct',false);
        this.output = 'Falsch';
      }
      guess.response = {input: this.input};
      break;
      case 'multiple':
      guess.response.multiple = [];
      _.each(this.item.choices,function(c){
        if(c.checked){
          guess.response.multiple.push(c._id);
        }
      },this);
    }
    this.guesses[this.item._id] = guess.response;
    this.Restangular.all('guesses').post(guess);
  }
  next(){
    this.input = null;
    this.output = null;
    this.form.$submitted = false;
    this.form.$setPristine();
    this.getItem();
  }
}
