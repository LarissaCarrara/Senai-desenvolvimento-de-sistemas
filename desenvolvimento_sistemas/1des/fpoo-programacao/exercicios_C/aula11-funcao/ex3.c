#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <locale.h>

int *celsius(float temp);
int temp;
float converter=0, n1;

//Crie uma função que receba um valor em Fahrenheit e retorne em Celsius.

int *celsius(float temp) {
	
	converter = (float)(temp - 32) * 5/9;
		
		printf("Temperatura em celsius: %.2f°", converter);
}

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	printf("Digite a temperatura em fahrenheit que deseja que seja convertido em celsius : ");
	scanf("%f", &n1);
	
	celsius(n1);
}
