#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");

/* Escreva um programa que leia 5 números inteiros em qualquer ordem e 
exiba na tela ao final, os cinco números em ordem crescente*/

int vetor[5], n, i, aux;

for(n=0; n<5; n++){
	printf("\nnumero %d: ", n+1);
	scanf("%d", &vetor[n]);
}

for(n=0; n<5; n++){
		
	for(i=0; i<5; i++){
		
		if (vetor[i]>vetor[i+1]){
			
			aux = vetor[i];
			vetor[i] = vetor[i+1];
			vetor[i+1] = aux;
			
		}
	}
}

for (n=0; n<5; n++){
	printf("\n%d", vetor[n]);

}

}

