module = angular.module("Prova", []);

module.controller("DisciplinaController", ["$scope", "$http", DisciplinaController]);


function DisciplinaController($scope, $http) {

    $scope.incluir = funcaoIncluir;
    $scope.editar = funcaoEditar;
    $scope.listar = funcaoListar;
    $scope.excluir = funcaoExcluir;

    $scope.disciplina = [];
    $scope.disciplina = {};
    $scope.isNovo = true;

    function funcaoIncluir() {
        funcaoIncluir();
        $http.post("/disciplinas").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplina = data;
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
        console.log(">>> incluindo disciplinas....");
        
        }
        
    }

    function funcaoEditar(discip) {
        $scope.disciplina = angular.copy(discip);
        $scope.isNovo = false;
    }

    function funcaoListar() {
        $http.get("/disciplinas").success(onSuccess).error(onError);

        function onSuccess(data, status) {
            $scope.disciplina = data;
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
        
        }
    
        function funcaoExcluir(discip) {
    }







