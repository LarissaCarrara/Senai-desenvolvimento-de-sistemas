#include <stdio.h>
#include <locale.h>
#include <math.h>
int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	int a, b,c, delta, raiz1, raiz2,resultdelta;

	
		/* Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c.
	O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes
	situações:
	• Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o
	programa não deve fazer pedir os demais valores, sendo encerrado;
	• Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e
	encerre o programa;
	• Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao
	usuário;
	• Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;	*/
	
	
	printf("Digite o valor de A: ");
	scanf("%d", &a);
	
	if(a==0){
		printf("\nA igual a zero, a equação não é do segundo grau.");
		return 0;
	}	
	
	printf("Digite o valor de B: ");
	scanf("%d", &b);
	
	printf("Digite o valor de C: ");
	scanf("%d", &c);
	
	delta = (b*b) - 4 * a * c;
	
	if(delta<0){
		printf("\nO delta calculado é negativo, a equação não possui raizes reais.");
		return 0;
	}
	
	if(delta==0){
		printf("O delta calculado é igual a zero, a equação possui apenas uma raiz real.");
		
		raiz1= (-b + resultdelta)/2*a;
			printf("A raiz da equacão é: %d", raiz1);	
			return 0;	
	}
	
	resultdelta= sqrt(delta);
	
	raiz1= (-b + resultdelta)/2*a;
	raiz2= (b+resultdelta)/2*a;
	
	printf("As raízes da equação são: %d e %d", raiz1, raiz2);
	
}
