app
	.controller('mainController',
		function($scope){
			$scope.showCalc = false;
			$scope.calculate = function (){
				$scope.showCalc = false;	
				$scope.invalidDate = false;

				var date = moment($scope.dt);
				if(!date.isValid() || $scope.dt == undefined){
					$scope.invalidDate = true;
					return;
				}
				//Dia da semana do nascimento
				$scope.birthWeekDay = date.format('dddd');
				//Ano bissexto?
				$scope.leapYear = date.isLeapYear()? 'Sim' : 'Não';

				//Prox aniversário
				nextBirthday = moment(date);
				nextBirthday.year(moment().year());
				if(nextBirthday.isBefore(moment(), 'day')){
					nextBirthday.add(1, 'year');
				}
				//Próximo aniversário em quantos dias?
				$scope.nextBirthdayIn = nextBirthday.diff(moment().startOf('day'), 'days');
				//Dia da semana prox aniversário
				$scope.nextBirthdayWeekDay = nextBirthday.format('dddd');
				$scope.showCalc = true;

				//easteregg trô
				$scope.atropelando = date.isSame('1997-01-01', 'year');
			};
	});