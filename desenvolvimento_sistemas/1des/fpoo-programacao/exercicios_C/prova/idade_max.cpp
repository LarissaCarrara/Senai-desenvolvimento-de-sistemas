#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	//Desenvolva um programa que leia 5 nomes e 5 idades e mostre ao final qual a idade da pessoa mais velha.

	
	char nome[5][15];
	float max=1;
	int i,idade[5], imax;
	
	for(i=0; i<5; i++){
		
		printf("Digite o %dº nome: ", i+1);
		scanf("%s", &nome[i]);
	
		printf("Digite a idade: ");
		scanf("%d", &idade[i]);
		
		if (idade[i]>max){
			max = idade[i];
			imax= i;
		}
	
	}
		printf("\nMaior salario: %.2f reais - %s\nMenor salário: %.2f reais - %s",max, nome[imax], min, nome[imin]);
}
