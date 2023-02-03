#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	//Faça um programa que receba o nome e o salário de 5 pessoas, informe o mais bem pago e o menos pago.
	
	char nome[5][15];
	float salario[5], total, media, max=1, min=99999;
	int i, cont =0, imax = 0, imin = 0;
	for(i=0; i<5; i++){
		
		printf("Digite o %dº nome: ", i+1);
		scanf("%s", &nome[i]);
	
		printf("Digite o salario: ");
		scanf("%f", &salario[i]);
		
		if (salario[i]>max){
			max = salario[i];
			imax= i;
		}
		if (salario[i] < min){
			min =salario[i];
			imin=i;
		}
	}
		printf("\nMaior salario: %.2f reais - %s\nMenor salário: %.2f reais - %s",max, nome[imax], min, nome[imin]);
}
