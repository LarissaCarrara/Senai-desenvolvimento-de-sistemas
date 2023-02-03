#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	/*Desenvolva um programa que leia a distância
	entre duas cidades (km) e quantas horas um veículo  levou para percorre-la.
	Calcule e apresente na tela a velocidade média (km/h)  deste veículo.*/
	
	float km, tempo, velocidade; 
	printf("Digite a distância entre as duas cidades (km): ");
	scanf("%f", &km);
	
	printf("Digite quantas horas um veículo levou para percorre-la: ");
	scanf("%f", &tempo);
	
	velocidade = km/tempo;
	printf("A velocidade média do carro foi de %.1fm/s", velocidade);
}
