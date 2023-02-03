#include <stdio.h>
#include <locale.h>

int main(){
	
	/*- Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário 
for menor do que 2000 o funcionário receberá um salário família equivalente a 45 reais por filho.
Apresente o salário final. */

	setlocale (LC_ALL, "Portuguese");
	
	int salario, filhos, salarioNovo;
	
	printf("- Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário for menor do que 2000 o funcionário receberá um salário família equivalente a 45 reais por filho.Apresente o salário final. ");
	
	printf("\n\nInsira seu salário: ");
	scanf("%d", &salario);
	
	printf("\n\nInsira quantos filhos possui: ");
	scanf("%d", &filhos);
	
	
	if(salario <2000){
		
		salarioNovo= filhos * 45 + salario;
		
		printf("\n\nSeu salário final será de %d reais", salarioNovo);
	}else{
		
		printf("\n\nSeu salário continuará sendo de %d reais", salario);
	}	
	
}
