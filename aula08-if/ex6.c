#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	int saque, nota100=0 ,nota50=0,nota10=0,nota5=0,nota1=0;

	
		/* Faça um programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do
saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1,
5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se
preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de
50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de
50, quatro notas de 10, uma nota de 5 e quatro notas de 1.	*/
	
	
	printf("Digite o valor do saque: ");
	scanf("%d", &saque);
	
	if(saque>=100){
		
		nota100 = saque/100;
		saque=saque %100;
		
	}
	
	if(saque>=50){
		
		nota50 = saque/50;
		saque=saque %50;
	}
	
	
	if(saque>=10){
		
		nota10 = saque/10;
		saque=saque %10;
	}
	
		
	if(saque>=5){
		
		nota5 = saque/5;
		saque=saque %5;
	}
	
		
	if(saque>=1){
		
		nota1 = saque/1;
	
	}
	
	 
	
	printf(" notas 100: %d\n notas 50: %d\n notas 10: %d\n notas 5: %d\n notas 1: %d",nota100,nota50,nota10,nota5,nota1);
}
