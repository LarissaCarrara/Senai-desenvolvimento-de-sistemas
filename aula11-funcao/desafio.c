#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <locale.h>



int retangulo(int num1, int num2);
int n1, n2, n,i;
int desenho[99][99];
//Crie uma função que compare se dois valores são iguais e retorne um booleano.

int retangulo(int num1, int num2) {
	
for(i=0; i<num2; i++){
	

	for(n=0; n<num1; n++){
		
		desenho[n][1] = num1 * 100;
	
		printf("*", desenho[num1][num2]);	
	}
		
	}	
		
}

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	printf("Digite dois valores: ");
	scanf("%d %d", &n1, &n2);
	
	retangulo(n1, n2);
	
	
}
