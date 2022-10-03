
#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){
	
setlocale (LC_ALL, "Portuguese");

/* Desenvolva um programa que leia o nome e o preço de 5 mercadorias. 
Se o preço for menor do que 1000 terá um aumento de 5% no preço da mercadoria, 
senão o aumento será de 7%. Mostrar o nome das mercadorias e o seu novo preço.*/


float preco[20] , total5, total7;
int i;
char produto[5][20];


	for(i=0; i<5; i++){

	printf("\n\nDigite o nome e o preço do %i produto ", i+1);
	printf("\nnome: ");
	scanf("%s", &produto[i]);
	printf("preço: ");
	scanf("%f", &preco[i]);
	

	}	

	for(i=0; i<5; i++){
		
	
		if(preco[i]>1000){

			total5= preco[i] * 0.05 + preco[i];
			
				printf("\n\nMercadoria: %s \nPreço anterior: %.2f \nPreço reajustado: %.2f", produto[i], preco[i], total5);
		}else{
			
			total7= preco[i] * 0.07 + preco[i];
			
				printf("\n\nMercadoria: %s \nPreço anterior: %.2f \nPreço reajustado: %.2f", produto[i], preco[i], total7);
		}
		
	
	}



}
