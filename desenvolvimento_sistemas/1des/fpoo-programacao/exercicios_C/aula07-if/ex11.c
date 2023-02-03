#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i, n,n1, soma;
	
	// Escreva um programa que exiba na tela a tabuada de um número que deverá ser informado pelo usuário. 

 

	printf("\n  Escreva um programa que exiba na tela a tabuada de um número que deverá ser informado pelo usuário.  ");
	printf("\n\nDigite o número: ");
	scanf("%d", &n1);
	
	for(n=1; n<=10; n++){
		
		soma= n1 * n;
		
		printf("\n\n%d x %d = %d", n1, n, soma);
		
		
	}
	
	
	
	
	

}
