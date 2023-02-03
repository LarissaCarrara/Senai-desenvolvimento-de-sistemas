#include <stdio.h>
#include <locale.h>

int main(){
	
	/*FaÃ§a um programa que receba como entrada o nome, a idade, sexo 
	e quantos dias desde a ultima doaÃ§Ã£o de uma pessoa e retorne se esta pode 
	ou nÃ£o doar sangue, conforme os critÃ©rios a seguir: Idade entre 18 e 69 anos
	 se homem intervalo de 60 dias, se mulher 90 dias. */
	 
	 char nome[15];
	 int idade, sexo, tempo; 
	 setlocale(LC_ALL,"Portuguese");
	 
	  printf("Digite o seu nome: ");
	  scanf("%s", &nome);
	  
	  printf("Digite o seu sexo (1- homem, 2-mulher): ");
	  scanf("%d", &sexo);
	  
	  printf("Digite a sua idade: ");
	  scanf("%d", &idade);
	  
	  printf("Digite a sua ultima doação (em dias): ");
	  scanf("%d", &tempo);
	  
	  if(sexo == 1){
	  	if(tempo >= 60 && idade >= 18 && idade <= 69){
	  		printf("\n%s está válido para doar.", nome);
		  }else{
		  	printf("\n%s não está válido para doar, pois precisa ter idade entre 18 e 69 anos e ter um intervalo de doação de 60 dias",nome);
		  }
	  }else if(sexo==2){
	  	if(tempo>= 90 && idade>=18 && idade <=69){
	  		printf("\n%s está válido para doar.", nome);
		  }else{
		  	printf("\n%s não está válido para doar, pois precisa ter idade entre 18 e 69 anos e ter um intervalo de doação de 90 dias",nome);
		  }
	  }else{
	  	printf("Digite um número válido (1- homem e 2-mulher).");
	  }
}
