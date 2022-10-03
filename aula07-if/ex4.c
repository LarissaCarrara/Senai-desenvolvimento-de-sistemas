#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n1,n2, x, y;
	
	/*  Faça um programa onde o usuário digite dois valores, e imprima na tela todos os valores no intervalo entre os valores digitados. */

	printf("\n Faça um programa onde o usuário digite dois valores, e imprima na tela todos os valores no intervalo entre os valores digitados.  ");
	printf("\n\nDigite os dois números: ");
	scanf("%d %d", &n1, &n2);
	

	x = n1;
	y= n2;

	if(n1>n2){
	n2= x;
	n1= y;	

	}


	if(n2< 32767){
		for ( i= n1; i<=n2; i++){
			
			printf("\n %d", i);
		} 
		
	}
}
