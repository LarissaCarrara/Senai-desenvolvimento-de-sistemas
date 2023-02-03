#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese"); 
	
	int a, b, c;
	
	printf("\nREALIZAR MULTIPLICAÇÃO DE DOIS NÚMEROS INTEIROS");
	printf("\n\ndigite o primeiro e segundo número: ");
	
	scanf("%d %d", &a, &b);
	
	c = a * b;
	
	printf("o valor da mult é %d", c);
	
	
}

