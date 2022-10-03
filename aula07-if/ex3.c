#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n=0;
	
	/* Faça um programa onde o usuário digite um valor, e imprima na tela todos os valores entre 0 e o
valor digitado */

	printf("\nFaça um programa onde o usuário digite um valor, e imprima na tela todos os valores entre 0 e o valor digitado ");
	printf("\nDigite o número desejado: ");
	scanf("%d", &n);


	if(n< 32767){
		
		for ( i= 0; i<=n; i++){
		
		printf("\n %d", i);
	} 
	
	}
	

}
