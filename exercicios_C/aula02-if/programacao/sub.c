#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese"); 
	
	int a, b, c;
	
	printf("\nREALIZAR SUBTRA��O DE DOIS N�MEROS INTEIROS");
	printf("\n\ndigite o primeiro e segundo n�mero: ");
	
	scanf("%d %d", &a, &b);
	
	c = a - b;
	
	printf("o valor da subtra��o � %d", c);
	
	
}

