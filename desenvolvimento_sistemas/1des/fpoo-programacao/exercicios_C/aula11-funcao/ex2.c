#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <locale.h>

int *fahrenheit(float temp);
int temp;
float converter=0, n1;

//Crie uma função que receba um valor em Celsius e retorne em Fahrenheit.

int *fahrenheit(float temp) {
	
	converter = (float)temp * 1.8 + 32;
		
		printf("Temperatura em fahrenheit: %.2f°", converter);
}

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	printf("Digite a temperatura em celsius que deseja que seja convertido em fahrenheit: ");
	scanf("%f", &n1);
	
	fahrenheit(n1);
}
