#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	//Faça um programa que receba o nome e o salário de 1 pessoa e calcule o INSS.
	
	char nome[10];
	float salario, inss;
	
	printf("Digite seu nome: ");
	scanf("%s", &nome);
	
	printf("Digite seu salario: ");
	scanf("%f", &salario);
	
	if (salario<=1212){
		inss = salario - salario * 0.075;
		printf("O salario final será de %.2f reais", inss);
	}else if(salario>1212 && salario <=2427.35){
		inss = salario - salario * 0.09;
		printf("O salario final será de %.2f reais", inss);
	}else if(salario > 2427.35 && salario <= 3641.03){
		inss = salario - salario * 0.12;
		printf("O salario final será de %.2f reais", inss);
	}else if(salario > 3641.03 && salario <= 7087.22){
		inss = salario - salario * 0.14;
		printf("O salario final será de %.2f reais", inss);
	}else{
		inss = 7087.22 - 7087.22 * 0.14;
		printf("O salario final será de %.2f reais", inss);
	}
}
