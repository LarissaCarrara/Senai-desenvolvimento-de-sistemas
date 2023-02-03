#include <stdio.h>
#include <locale.h>


int main(){
	setlocale(LC_ALL, "Portuguese");
	
	int cor;
	
	printf("\n\nDigite a cor do semáforo (1-verde, 2-amarelo e 3- vermelho): ");
	scanf("%d", &cor);
	
	switch (cor){
	
	case 1:
	printf("\n\nPode seguir em frente, o sinal está verde.");	
	break;	
		
	case 2:
	printf("\n\nPode seguir em frente, mas tenha ATENÇÃO, o sinal está amarelo.");
	break;
	
	case 3:
	printf("\n\nPare!! O sinal está vermelho.");
	break;	
	
	defaut:
	printf("\n\nNão foi possivel realizar a operação, por favor, digite o número correspondente a atual cor do semáforo (verde, amarelo ou vermelho)");
	break;
	}
	
}
	
	


