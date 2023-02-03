#include <stdio.h>
#include <locale.h>
int main(){
	
	setlocale(LC_ALL,"");
	int n;
	float preco, total;
	
	/*Uma loja está fazendo uma promoção e precisa de ajuda no momento da venda, para liberar
os descontos. Baseado na peça, calcule o desconto e exiba o valor final da venda.
(camisa - 20% de desconto, bermuda - 10% de desconto, calça - 15% de desconto).*/


	
	printf("Digite o número equivalente ao produto (1- camisa, 2-bermuda, 3- calça): ");
	scanf("%d", &n);
	
	printf("Digite o preço do produto: ");
	scanf("%f", &preco);
	
	//Processamento
	if(n == 1){
		
		total = (double) preco - preco*20/100;
		printf("A camiseta custará %.2f reais", total);
		
	}else if(n == 2){
		
		total = (double) preco - preco*10/100;
		printf("A bermuda custará %.2f reais", total);
		
	}else{
		
		total = (double) preco - preco*15/100;
		printf("A calça custará %.2f reais", total);
	}
}
