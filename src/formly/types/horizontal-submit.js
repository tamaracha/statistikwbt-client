.form-group
  .col-xs-offset-2.col-xs-10
    input.btn(type="submit" ng-value="to.value" ng-class="{'btn-danger': fc.$invalid&&fc.$touched, 'btn-primary': fc.$valid}" ng-disabled="fc.$invalid")