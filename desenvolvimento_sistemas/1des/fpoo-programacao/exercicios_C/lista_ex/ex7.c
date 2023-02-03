#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	//Faça um programa que receba o nome e o salário de 5 pessoas, some os valores dos salários e calcule a média salarial.
	
	char nome[5][15];
	float salario[5], total, media;
	int i, cont =0;
	for(i=0; i<5; i++){
		
		printf("Digite o %dº nome: ", i+1);
		scanf("%s", &nome[i]);
	
		printf("Digite o salario: ");
		scanf("%f", &salario[i]);
		
		total += salario[i];
		
		cont++;
	}
		media = total/cont;
		printf("\nMedia: %.2f reais",media);
}
