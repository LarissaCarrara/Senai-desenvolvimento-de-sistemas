#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	int i,n1,n2,x,y;
	
	/*   Faça um programa que imprima na tela todos os números pares de um intervalo informado pelo
usuário*/

	printf("\n  Faça um programa que imprima na tela todos os números pares de um intervalo informado pelo usuário  ");
	printf("\n\nDigite o número inicial: ");
	scanf("%d", &n1);
	
	printf("\nDigite o número final: ");
	scanf("%d", &n2);

	x = n1;
	y= n2;

	if(n1>n2){
	n2= x;
	n1= y;	
	}		

	if(n1 % 2 != 0){
		
		n1++;
		
 	}
 	
 	if(n2< 32767){
		for ( i= n1; i<=n2; i+=2){
		
			printf("\n %d", i);
	} 
}

}
