#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	float bruto, imposto_renda, inss, sindicato, liquido, rshr, hr, desconto;
	
		/* Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
	Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o
	Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: 
	a.	salário bruto.
	b. quanto pagou de IR.
	c. quanto pagou ao INSS.
	d. quanto pagou ao sindicato.
	e. o salário líquido
	f. calcule os descontos e o salário líquido, conforme a tabela abaixo:*/
	
	
	printf("Digite o quanto você ganha por hora: ");
	scanf("%f", &rshr);
	
	printf("Digite a quantidade de horas que você trabalha no mês: ");
	scanf("%f", &hr);
	
	bruto = rshr * hr;
	imposto_renda = (float) bruto* 11/100;
	inss= (float)bruto * 8/100;
	sindicato= (float) bruto* 5/100;
	liquido= bruto - imposto_renda - inss - sindicato;
	desconto= imposto_renda + inss+ sindicato;
	
	printf("\n\nsalário bruto: %.2f\n imposto de renda: %.2f\n inss: %.2f\n sindicato: %.2f\n valor descontado: %.2f\n salário líquido: %.2f\n", bruto, imposto_renda, inss, sindicato,desconto, liquido);
	
	
}
