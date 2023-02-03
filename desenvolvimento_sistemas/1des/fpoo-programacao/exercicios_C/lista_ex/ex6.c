#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	//Faça um programa que receba o nome e o salário de 1 pessoa e calcule o IRRF.
	
	char nome[10];
	float salario, irrf;
	
	printf("Digite seu nome: ");
	scanf("%s", &nome);
	
	printf("Digite seu salario: ");
	scanf("%f", &salario);
	
	if (salario<=1903.98){
		printf("O salario final será de %.2f reais", salario);
	}else if(salario>1903.98 && salario <=2826.65){
		irrf = salario - salario * 0.075;
		printf("O salario final será de %.2f reais", irrf);
	}else if(salario > 2826.65 && salario <= 3751.05){
		irrf = salario - salario * 0.15;
		printf("O salario final será de %.2f reais", irrf);
	}else if(salario >  3751.05 && salario <= 4664.68){
		irrf = salario - salario * 0.225;
		printf("O salario final será de %.2f reais", irrf);
	}else{
		irrf = 4664.69 - 4664.69 * 0.275;
		printf("O salario final será de %.2f reais", irrf);
	}
}
