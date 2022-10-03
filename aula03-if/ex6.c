#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	/*Sabendo-se que a velocidade de cruzeiro de um avi√£o 747-300 È de 900 km/h, fazer um programa que leia uma distancia (km), calcule e apresente na tela,
	 quanto tempo (horas) sera° necessario para um 747-300 sobrevoar a distancia informada.*/
	
	float tempo,dist;
	
	printf(" \n\ninforme a dist‚ncia que o avi„o ir· percorrer: ");
	scanf("%f", &dist);
	
	tempo= dist/900;	


	
	printf("\n\nO avi„o ir· demorar %.2f horas para percorrer %.2fhm/h", tempo, dist);
}
