var n1, n2;

function getValue(){
   n1 = parseInt(document.getElementById("number1").value);
   n2 = parseInt(document.getElementById("number2").value);

}

function validar(){
   getValue();

   if (isNaN(n1) || isNaN(n2)){
      alert("Campo aceita apenas número!")
      exit;
   }
}

   function calcSoma(){
      getValue();
      validar();
      var result = n1 + n2;
      document.getElementById("retorno").value = (result);
   }

   function calcSub(){
      getValue();
      validar();
      var result = n1 - n2;
      document.getElementById("retorno").value = (result);
   }

   function calcMult(){
      getValue();
      validar();
      var result = n1 * n2;
      document.getElementById("retorno").value = (result);
   }

   function calcDiv(){
      getValue();
      validar();
      if(n1 == "0" || n2 == "0"){
      alert("Campo invalido");
      }
      else{
      var result = n1 / n2;
      document.getElementById("retorno").value = (result);
      }
   }

   function limpar(){
      getValue();

      document.getElementById("number1").value = "";
      document.getElementById("number2").value = "";
      document.getElementById("retorno").value = "";
   }
