#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	int n=0, tabulacao = 10;
	float reais, preco;
	
	
		/* O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da 
	tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que 
	monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário*/
		
	
	printf("Digite o preço do pão: ");
	scanf("%f", &preco);
	
		for (n=1; n<= 50; n++){
		
		reais = n * preco;
		
		printf(" \n%d produto - %.2f reais. ", n, reais);
		
		if(tabulacao== n){
			
			printf("\n");
			tabulacao +=10;
		}
		
	}
}
