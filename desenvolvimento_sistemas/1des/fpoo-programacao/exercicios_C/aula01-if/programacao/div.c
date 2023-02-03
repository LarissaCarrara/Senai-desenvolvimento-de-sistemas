#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese"); 
	
	int a, b, c;
	
	printf("\nREALIZAR DIVISÃO DE DOIS NÚMEROS INTEIROS");
	printf("\n\ndigite o primeiro e segundo número: ");
	
	scanf("%d %d", &a, &b);
	
	if (b==0){
		
		printf("\n\nNão é possivel completar a operação, tente novamente!");
		return 0;
	}
	c = a / b;
	
	printf("o valor da divisão é %d", c);
	
	
}

