#include <stdio.h>
#include <locale.h>
#include <math.h>
int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	float salario, ajuste, nvsalario;

	
		/* As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
	contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o
	salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
	o salários até R$ 280,00 (incluindo) : aumento de 20%
	o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
	o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
	o salários de R$ 1500,00 em diante : aumento de 5%
	• Após o aumento ser realizado, informe na tela:
	o o salário antes do reajuste;
	o o percentual de aumento aplicado;
	o o valor do aumento;
	o o novo salário, após o aumento.
	*/
	
	
	printf("Digite o seu salário: ");
	scanf("%f", &salario);
	
	if(salario<= 280){
		
		ajuste = salario * 20/100;
		nvsalario= salario + ajuste;
		
		printf("\n\nsalário anterior: %.2f\n Porcentual aplicado : 20%%\n Valor do aumento: %.2f\n Novo salário: %.2f", salario, ajuste, nvsalario);
		
	}else if( 281< salario && salario <=700){
		
		ajuste = salario * 15/100;
		nvsalario= salario + ajuste;
		
		printf("\n\nsalário anterior: %.2f\n Porcentual aplicado : 15%%\n Valor do aumento: %.2f\n Novo salário: %.2f", salario, ajuste, nvsalario);
		
	}else if(701<salario && salario <= 1500){
		
		ajuste = salario * 10/100;
		nvsalario= salario + ajuste;
		
		printf("\n\nsalário anterior: %.2f\n Porcentual aplicado : 10%%\n Valor do aumento: %.2f\n Novo salário: %.2f", salario, ajuste, nvsalario);
		
	}else if(salario > 1501){
		
		ajuste = salario * 5/100;
		nvsalario= salario + ajuste;
		
		printf("\n\nsalário anterior: %.2f\n Porcentual aplicado : 5%%\n Valor do aumento: %.2f\n Novo salário: %.2f", salario, ajuste, nvsalario);
	}
	
	
}

