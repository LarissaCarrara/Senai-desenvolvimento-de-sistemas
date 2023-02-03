#include <stdio.h>
#include <locale.h>


int main(){
	setlocale(LC_ALL, "Portuguese");
	
	int cor;
	
	printf("\n\nDigite a cor do semáforo (1-verde, 2-amarelo e 3- vermelho): ");
	scanf("%d", &cor);
	
	if(cor == 1){
		
	printf("\n\nPode seguir em frente, o sinal está verde.");	
		
		
		
	}else if(cor == 2 ){
		
	printf("\n\nPode seguir em frente, mas tenha ATENÇÃO, o sinal está amarelo.");
		
	}else if(cor == 3){
		
		printf("\n\nPare!! O sinal está vermelho.");
		
	}else{
		
		printf("\n\nNão foi possivel realizar a operação, por favor, digite o número correspondente a atual cor do semáforo (verde, amarelo ou vermelho)");
	}
	
	
	
	
}

