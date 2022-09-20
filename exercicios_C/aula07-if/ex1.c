#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n=0;
	
	// Faça um programa que imprima na tela os valores no intervalo entre 10 e 200.
	for ( i= 10; i<=200; i++){
		
		printf("\n %d", i);
	} 
	

}
