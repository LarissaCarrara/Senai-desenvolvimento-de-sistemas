#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){
	
	int vitorias[50], empates[50], pontos[100], aux, i,i2;
	char nomes[5][20], aux2[15];
	
	setlocale(LC_ALL, "");
	
	/* Desenvolva um programa que leia o nome de 5 times de futebol, o número de vitórias 
	e o número de empates de cada time. O programa deverá calcular e apresentar na tela, 
	o nome dos times e o total de pontos de cada um e a ordem de classificação crescente. 
	Lembrando que a vitória vale 3 pontos e o empate vale 1 ponto. */
	
	


	for(i=0; i<5; i++){
		
		printf("\nDigite o nome do %d time: ", i+1);
		scanf("%s", &nomes[i] );
		printf("Digite a quantidade de vitórias e empates que o time possui: ");
		scanf("%d %d", &vitorias[i], &empates[i] );
	}

	for (i=0; i<5; i++){
		
		pontos[i]= vitorias[i] * 3 + empates[i];
	}
	
	for (i=0; i<5; i++){
		for(i2=0; i2<5; i2++){
				
			
			if(pontos[i] > pontos[i2]){
				
			 aux = pontos[i];
			 pontos[i] = pontos[i2];
			 pontos[i2] = aux;
			 
			 
			 strcpy(aux2, nomes[i]);
			 strcpy(nomes[i], nomes[i2]);
			 strcpy(nomes[i2], aux2);
			 
			}
		}
		
	}
	
	for (i=0; i<5; i++){
			
		printf(" \nTime: %s pontuação: %d", nomes[i], pontos[i]);
	}
		
}
