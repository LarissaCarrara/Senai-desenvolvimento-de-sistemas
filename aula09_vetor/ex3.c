#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	/*Utilizando apenas um vetor de tamanho 6, troque os valores de maneira inversa;*/
	
	int vetor[5], aux=0, n, n2, j=5, i, n3;
	
	printf("Digite os 6 valores : \n");
	
		for(n=0; n<=5; n++){
		
			scanf("%d", &vetor[n]);
		
		}
			                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
		for (n2=0; n2<=2; n2++){
		
			 aux = vetor[j];
			 vetor[j] = vetor[n2];
			 vetor[n2] = aux;
		  
			j--;
		}
		
		for (n3=0; n3<6; n3++){
			
			printf("\nSaída do vetor invertido: %d", vetor[n3]);
		}
		
}
	
