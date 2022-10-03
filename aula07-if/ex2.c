#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n=0;
	
	// Faça um programa que imprima na tela os valores no intervalo entre 200 e 1.
	for ( i= 200; i>=1; i--){
		
		printf("\n %d", i);
	} 
	

}
