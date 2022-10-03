#include <stdio.h>
#include <locale.h>


// Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.


int main(){
	
	setlocale(LC_ALL, "Portuguese"); 
	
	int a, b, c, result;
	printf("\nDesenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.");
	
	
	printf("\n\ndigite o valor de a: ");
	scanf("%d", &a);
	
	printf("\n\ndigite o valor de b: ");
	scanf("%d", &b);
	
	printf("\n\ndigite o valor de c: ");
	scanf("%d", &c);
	
	result = (a + b) /c;
	
	printf("\n\nO resultado da operação é de %d", result);
	
	
}
