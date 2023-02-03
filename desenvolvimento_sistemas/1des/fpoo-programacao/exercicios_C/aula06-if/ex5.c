#include <stdio.h>
#include <locale.h>

int main(){
	
	/*- Desenvolva um programa que leia o nome e o preço de uma mercadoria. Se o preço for menor 
do que 1000 terá um aumento de 5% no preço da mercadoria, senão o aumento será de 7%. Mostrar o nome da mercadoria e o seu novo preço. */

	setlocale (LC_ALL, "Portuguese");
	
	int preco=0 , preconovo=0;
	char nome[15];
	
	printf("- Desenvolva um programa que leia o nome e o preço de uma mercadoria. Se o preço for menor do que 1000 terá um aumento de 5% no preço da mercadoria, senão o aumento será de 7%. Mostrar o nome da mercadoria e o seu novo preço. ");
	
	printf("\n\nDigite o nome do produto: ");
	scanf("%s", &nome);
	
	printf("\n\nDigite o preço do produto: ");
	scanf("%d", &preco);
	
	if(preco <1000){
		
		preconovo= preco * 5/100 + preco;
		
		printf("\n\nO preço final do %s será de %d reais", nome, preconovo);
	}else{
		preconovo= preco + preco * 7/100;
		printf("\n\nO preço final do %s será de %d reais", nome, preconovo);
	}	
	
}
