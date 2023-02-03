#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL, "Portuguese");
	float preco, preconovo;
	
	printf("Desenvolva um programa que leia o preço de um produto e se o preço for maior do que 1000 reais aplique um desconto de 8%. Mostre o preço final. \n");
	
	printf("Digite o preço do produto: ");
	scanf("%f", &preco);
	
	if(preco > 1000){
		preconovo= preco - (preco*8/100);
		
		printf("O produto custará %.2f reais", preconovo);
	}else{
		printf("O produto continuará custando %.2 reais",preco);
	}
}
