#include <stdio.h>
#include <locale.h>

int main(){
	
	/*- - Desenvolva um programa que leia os valores de três lados de um triângulo (a, b e c) e se os três 
lados forem diferentes escreva ESCALENO se os três lados forem iguais EQUILÁTERO e se apenas dois lados forem iguais ISÓSCELE */

	setlocale (LC_ALL, "Portuguese");
	
	int lado1,lado2,lado3;
	
	printf("- - Desenvolva um programa que leia os valores de três lados de um triângulo (a, b e c) e se os três lados forem diferentes escreva ESCALENO se os três lados forem iguais EQUILÁTERO e se apenas dois lados forem iguais ISÓSCELES ");
	
	printf("\n\nInsira o primeiro lado do triângulo: ");
	scanf("%d", &lado1);
	
	printf("\n\nInsira o segundo lado do triângulo: ");
	scanf("%d", &lado2);
	
	printf("\n\nInsira o terceiro lado do triângulo: ");
	scanf("%d", &lado3);
	
	if(lado1==lado2 && lado1==lado3){
		
		printf("\n\nÉ um triângulo equilátero");
		return 0;
		
	}else if(lado1==lado2){
	
		
		printf("\n\nÉ um triângulo isóceles");
		return 0;
		
	}if(lado2==lado3){
		printf("\n\nÉ um triângulo isóceles");
		return 0;
		
	}else if( lado1== lado3){
		printf("\n\nÉ um triângulo isóceles");
		return 0;
		
	}if(lado1 != lado2 != lado3){
		printf("\n\nÉ um triângulo escaleno");
	}
	
}
