#include <stdio.h>
#include <locale.h>


int main(){
	setlocale(LC_ALL, "Portuguese");
	
	char cor[10], result[10];
	
	printf("\n\nDigite a cor do semáforo (1-verde, 2-amarelo e 3- vermelho): ");
	scanf("%s", &cor);
	
	if(strcmp(cor, "verde") == 0){
		
	printf("\n\nPode seguir em frente, o sinal está verde.");	
		
		
		
	}else if(strcmp(cor, "amarelo") == 0){
		
	printf("\n\nPode seguir em frente, mas tenha ATENÇÃO, o sinal está amarelo.");
		
	}else if(strcmp(cor, "vermelho") == 0 ){
		
		printf("\n\nPare!! O sinal está vermelho.");
		//sprintf(result, "vermelho");
		
	}else{
		
		printf("\n\nNão foi possivel realizar a operação, por favor, digite a cor a atual do semáforo (verde, amarelo ou vermelho)");
	}
	
	
	
	
}

