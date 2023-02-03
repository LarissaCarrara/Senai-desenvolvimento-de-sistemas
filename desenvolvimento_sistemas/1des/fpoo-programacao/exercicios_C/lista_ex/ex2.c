#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	/*Faça um programa que receba como entrada o nome, a idade e o peso de 5 pessoas 
	e retorne se estas podem ou não doar sangue, conforme os critérios a seguir: 
	Idade entre 18 e 69 anos e pesar mais do que 50kg. */
	
	char nome[4][15];
	int idade[4], i;
	float peso[4];
	
	for(i=0; i<5; i++){
		printf("Digite o nome da %dº pessoa: ", i+1);
		scanf("%s", &nome[i]);
		
		printf("Digite a idade da %dº pessoa: ", i+1);
		scanf("%d", &idade[i]);	
		
		printf("Digite o peso da %dº pessoa: ", i+1);
		scanf("%f", &peso[i]);	
	}
	

	for(i=0; i<5; i++){
		if(idade[i]>=18 && idade[i]<=69 && peso[i]>50){
			printf("\n\n\tNome: %s\n\tIdade: %d\n\tPeso: %.2f\n\tSituação: Válido como doador", nome[i], idade[i], peso[i]);
		}else{
			printf("\n\n\tNome: %s\n\tIdade: %d\n\tPeso: %.2f\n\tSituação: Inválido como doador", nome[i], idade[i], peso[i]);
		}
	}				
}
