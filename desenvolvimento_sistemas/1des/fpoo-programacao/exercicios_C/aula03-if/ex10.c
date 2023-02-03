#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	/*Desenvolva um programa que leia o nome de uma cidade, o número total de eleitores e o número total de votos apurados na última eleição. O programa deverá calcular e exibir a porcentagem 
	de participação dos eleitores desta cidade na última eleição.*/
	
	float pessoa, eleitores, participacao, qtdvotos;
	char cidade[20];
	
	printf(" \n\ninforme o nome da cidade: ");
	scanf("%s", &cidade);
	
	printf(" \n\ninforme a quantidade total de eleitores: ");
	scanf("%f", &eleitores);
	
	printf(" \n\ninforme a quantidade total de votos: ");
	scanf("%f", &qtdvotos);
	
	
	participacao= (qtdvotos/eleitores) * 100; 


	
	printf("\n\n A participação dos eleitores de %s na última eleição foi de %.1f %%.", cidade, participacao);
}
