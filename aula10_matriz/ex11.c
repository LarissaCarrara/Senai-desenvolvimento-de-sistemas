#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");



/*  Crie um programa que calcule o IMC (Índice de Massa Corpórea) 
de 5 pessoas Entradas: Nome, peso e altura, Saída Nome, Peso, Altura e IMC.
*/

char nome[5][20];
float peso[10], altura[10], imc[5];
int i;


for (i=0; i<5; i++){
	
	printf("Digite o nome ");
	scanf("%s", &nome[i]);
	
	printf("Peso: ");
	scanf("%f", &peso[i]);
	
	printf("Altura: ");
	scanf("%f", &altura[i]);
}

for(i=0; i<5; i++){
	
	imc[i]=(peso[i]/(altura[i]* altura[i]));
	
	printf("\n\nNome: %s\n Peso: %.2f\n Altura: %.2f\n Imc: %.2f", nome[i], peso[i], altura[i], imc[i]);
}

}
