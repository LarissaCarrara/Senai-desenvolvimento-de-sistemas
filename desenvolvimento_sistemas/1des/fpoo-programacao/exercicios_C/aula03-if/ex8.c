#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	//Desenvolva um programa que leia o raio (cm) e a altura (cm) de um cilindro. Calcule e mostre a área (cm2) e o volume (cm3) do cilindro.
	
	float raio, altura, arealateral, areatotal, volume, comprimento;
	
	printf(" \n\ninforme o raio do cilindro: ");
	scanf("%f", &raio);
	
	printf(" \n\ninforme a altura do cilindro: ");
	scanf("%f", &altura);
	
	
	arealateral= 2 * 3.14* raio * altura;
	areatotal=  arealateral + 2 * (3.14 * (raio * raio) ) ;
	volume= 3.14 * (raio * raio) * altura; 
		


	
	printf("\n\n A area do cilindro é %.2fcm2\n O volume do cilindro é %.2fcm3", areatotal, volume);
}
