#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n1,n2;
	
	/* Escreva um programa que exiba na tela em ordem crescente, apenas os números pares existentes de 11 a 250.*/

	printf("\n  - Escreva um programa que exiba na tela em ordem crescente, apenas os números pares existentes de 11 a 250.");
	

	for ( i= 12; i<=250; i+=2){
		
		printf("\n %d", i);
	} 
	

}
