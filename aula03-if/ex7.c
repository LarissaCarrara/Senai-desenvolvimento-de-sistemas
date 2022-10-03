#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	/*Um caminhão consegue transportar 18 toneladas de laranjas em uma viagem que faz entre a fazenda e a fábrica de suco de laranja. Um alqueire de terra produz em média 250 toneladas de laranjas. 
	Faça um programa que leia quantos caminhões e quantos alqueires uma fazenda produtora de laranjas possui, calcule e apresente na tela quantas viagens de caminhão serão necessárias para transportar 
	toda a colheita de laranjas.*/
	
	float voltas, caminhao, alqueire, qtdalqueire, qtdcaminhao;
	
	
	printf("Informe a quantidade de alqueires que a fazenda possui: ");
	scanf("%f", &alqueire);
	
	printf("Informe a quantidade de caminhãoes que a fazenda possui: ");
	scanf("%f", &caminhao);	
		       
	qtdalqueire= 250 * alqueire;
	qtdcaminhao= 18 * caminhao;
	
	voltas= qtdalqueire/qtdcaminhao;
	
	          
	printf("\n\nO caminhÃ£o precisará¡ dar %.2f voltas", voltas);
}
                                                     
