#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	int n=0, tabulacao = 10;
	float reais;
	
	
		/* O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 operadores 
	de caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém 
	o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa 
	precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado 
	para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos*/
	
	for (n=1; n<= 50; n++){
		
		reais = n * 1.99;
		
		printf(" \n%d produto - %.2f reais. ", n, reais);
		
		if(tabulacao== n){
			
			printf("\n");
			tabulacao +=10;
		}
		
	}
	
	
}
