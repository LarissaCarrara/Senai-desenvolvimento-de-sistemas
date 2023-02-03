#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <locale.h>

int *maior(int num1, int num2);
int n1, n2;

//Crie uma função que receba dois valores e retorne o maior entre eles.

int *maior(int num1, int num2) {
	
	if(num1>num2){
		
		printf("Maior número: %d", num1);
	}else{
		
		printf("Maior número: %d", num2);
	}
		
		
}

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	printf("Digite dois valores: ");
	scanf("%d %d", &n1, &n2);
	
	maior(n1, n2);
}
