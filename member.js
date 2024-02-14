function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/components/member/member.html',
    scope: {
      member: '='
    },
    controller: 'MemberController',
    controllerAs: 'vm',
    bindToController: true
  };
}