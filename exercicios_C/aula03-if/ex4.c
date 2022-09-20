#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	/*Desenvolva um programa que leia o nome de um time de futebol, o número de vitórias e o número de empates. O programa deverá calcular e apresentar na tela, 
	o nome do time e o total de pontos. Lembrando que a vitória vale 3 pontos e o empate vale 1 ponto.*/
	
	char time[15];
	int vit, emp, total;
	
	printf(" \n\nEscreva o nome do time:");
	scanf("%s", &time);
	
	printf("\n\nInforme a quantidade de vitórias que o time possui: ");
	scanf("%d", &vit);
	
	printf("\n\nInforme a quantidade de empates que o time possui: ");
	scanf("%d", &emp);
	
	total= 3 * vit + emp;
	
	printf("\n\nA quantidade de pontos do %s é %d", time, total);
}
