#include <stdio.h>
#include <locale.h>
#include <math.h>
int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	float area, precogaloes, precolata,litros, qtdlatas, qtdgaloes;

	
		/* Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros
	quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros
	quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros,
	que custam R$ 25,00.Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços
	em 2 situações:
	a. comprar apenas latas de 18 litros;
	b. comprar apenas galões de 3,6 litros*/
	
	printf("Digite o tamanho em metros quadrados da área a ser pintada: ");
	scanf("%f", &area);
	
	litros = area/6;
	qtdlatas = ceil(litros/ 18);
	
	precolata= qtdlatas*80;
	qtdgaloes= ceil(litros/3.6);
	precogaloes = qtdgaloes*25;
	
	
	printf(" Quantidade de litros utilizados: %.0f litros\n\n UTILIZANDO LATAS\n quantidade de latas: %.0f\n orçamento das latas: %.0f reais.\n\n UTILIZANDO GALÕES\n quantidade de galões: %.0f \n orçamento dos galões: %.0f reais",litros, qtdlatas, precolata, qtdgaloes,precogaloes);
	
	
}
