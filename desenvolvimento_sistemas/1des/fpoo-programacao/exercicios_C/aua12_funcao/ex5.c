#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <locale.h>
 



int n1,n2,n3, ano, anoidade,ndia, nmes, nano, dia, mes, anomes, anodia;

/*Para participar dos campeonatos os competidores preenchem um formulário com sua data de nascimento, 
crie uma função que receba o ano de nascimento e retorne a idade do competidor. */

int converteidade(int dia,  int mes, int ano, int n1, int n2, int n3) {
	

		
		if(mes>n2){
			
			anoidade = ano - n3;
			anomes= mes-n2;
		}else{
			anoidade = (ano - n3)-1;
			anomes= 12 - (n2-mes); 
		}
		
		if(dia>n1){
			
			anodia = dia - n1;
		}else{
			anodia= n1-dia;
		}
		printf("anos: %d, meses: %d, dias: %d ", anoidade, anomes, anodia  );
	
		
}

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	

	printf("Digite o dia atual: ");
	scanf("%d", &dia);
	
	printf("Digite o mês atual: ");
	scanf("%d", &mes);
	
	printf("Digite o ano atual: ");
	scanf("%d", &ano);
		
	printf("\nDigite o dia em que o competidor nasceu: ");
	scanf("%d", &n1);
		
	printf("\nDigite o mês em que o competidor nasceu: ");
	scanf("%d", &n2);
	
	printf("Digite o ano em que o competidor nasceu: ");
	scanf("%d", &n3);
	
	converteidade(dia,mes, ano,n1, n2,n3);
}
