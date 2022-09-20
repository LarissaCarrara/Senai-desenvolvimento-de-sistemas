#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	//Desenvolva um programa que leia um número ”n” inteiro, positivo e diferente de zero e apresente na tela: n – 1, e também n + 1.
	
	int n, soma, sub;
	
	printf(" \n\ninforme o número desejado: ");
	scanf("%d", &n);
	
	if( n < 0 || n== 0){
		
		printf(" \n\nNão foi possível prosseguir, insira um número positivo e diferente de 0. ");
		return 0;
		
	}
	soma = n + 1;
	sub = n - 1;

	
	printf("\n\nO número %d + 1 = %d e %d - 1 = %d", n, soma, n, sub);
}
