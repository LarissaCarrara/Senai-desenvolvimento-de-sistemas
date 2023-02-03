#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n=0;
	
	// Faça um programa que imprima na tela a soma dos valores entre 0 e 100. 

	for ( i= 0; i<=100; i++){
		n= n + i;
		
	}  
	
	printf("\n O resultado da soma do intervalo é %d", n);

}
