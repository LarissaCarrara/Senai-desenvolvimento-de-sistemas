#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");

/* Desenvolva um programa que leia o nome e o preço de 10 mercadorias, 
depois leia o valor do índice percentual (%) de desconto no preço da mercadoria. 
Calcule e apresente na tela, o nome, o preço original, o valor do desconto e 
preço final de cada mercadoria com desconto.*/

int percent[10], preco[20], n;
float desconto, precofinal;
char mercadoria[20][20];


	for(n=0; n<10; n++){
		
		printf("\n\n %d produto ", n+1);
		printf("\nmercadoria: ");
		scanf("%s", &mercadoria[n]);
		printf("\npreço da mercadoria: ");
		scanf("%d", &preco[n]);	
		printf("\níndice percentual da mercadoria: ");
		scanf("%d", &percent[n]);
		
		desconto= preco[n] * (float)percent[n]/100;
		precofinal = preco[n] - desconto;
		
		printf("\n\nMercadoria: %s\n Preço original: %d\n Valor do desconto: %.2f\n Preço com desconto: %.2f", mercadoria[n],preco[n], desconto, precofinal);
			
		
	}
	
}
	
	
	
