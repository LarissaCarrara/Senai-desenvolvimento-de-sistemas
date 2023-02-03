#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL, "Portuguese");
	
	//Desenvolva um programa que leia o nome e o preço de uma mercadoria. O programa deverá calcular um aumento de 5% no preço da mercadoria e mostrar o nome da mercadoria e o seu novo preço.
	
	float preco, novopreco;
	char mercadoria[20];
	
	printf(" \n\ninforme o nome da mercadoria: ");
	scanf("%s", &mercadoria);
	
	printf(" \n\ninforme o preço da mercadoria: ");
	scanf("%f", &preco);
	
	
	novopreco= preco * 0.05 + preco;


	
	printf("\n\n Mercadoria: %s\n Novo preço: %.2f", mercadoria, novopreco);
}
