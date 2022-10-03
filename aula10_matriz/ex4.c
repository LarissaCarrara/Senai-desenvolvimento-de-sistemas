#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");

/* Desenvolva um programa que leia o nome de uma cidade, 
o número total de eleitores e o número total de votos apurados na última eleição. 
O programa deverá calcular e exibir a porcentagem de participação dos eleitores 
desta cidade na última eleição e fazer isso para 5 cidades.*/
	
	int numeleitores[20], numtotal[20], i, porcentagem;
	char cidade[5][20];
	
	
	for(i=0; i<5; i++){

		printf("\n\n %d cidade:  ", i+1);
		printf("\nnome: ");
		scanf("%s", &cidade[i]);
		printf("\nnúmero total de eleitores: ");
		scanf("%d", &numtotal[i]);
		printf("\nnúmero total de votos apurados na última eleição: ");
		scanf("%d", &numeleitores[i]);
		
	}	
	
	for(i=0; i<5; i++){
		
		porcentagem = (float)(numeleitores[i]*100)/ numtotal[i]; 
		
		printf(" \nCidade %d - %s \n porcentagem de participação: %d %%.", i+1,cidade[i] , porcentagem);
	}
}
