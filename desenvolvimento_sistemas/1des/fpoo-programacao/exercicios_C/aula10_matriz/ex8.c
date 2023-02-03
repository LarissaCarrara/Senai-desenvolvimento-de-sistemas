#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");

srand(time(NULL));

/* Gere e imprima uma matriz 5x5 com valores aleatórios entre 0 e 25. 
Após isso indique qual é o maior e o menor valor da linha 4 e o maior 
e menor valor da coluna 3.*/

int matriz[5][5], nposi, iposi, n,i, maior=0, menor=1000, maior2=0, menor2=1000;

	for(n=0; n<5; n++){
		for(i=0; i<5; i++){
			
			matriz[n][i]=rand() % 25;
			
		}
	}
	
	
	for(n=0; n<5; n++){
		for(i=0; i<5; i++){
    		
    		printf("matriz[%d][%d]= %d  ", n, i,matriz[n][i]);
    		if(i==4){
    			
    			printf("\n");
			}
		}
	}
	
		for(i=0; i<5; i++){
			
			if(maior<matriz[4][i]){
			
				maior = matriz[4][i];
			}
			if(menor>matriz[4][i]){
				
				menor=matriz[4][i];
			}
				
		}
		
		for(n=0; n<5; n++){
			
			if(maior2<matriz[n][2]){
			
				maior2 = matriz[n][2];
			}
			if(menor2>matriz[n][2]){
				
				menor2=matriz[n][2];
			}
		}
	
	
	printf("\n\nLinha 4\n\nO maior número é %d\n O menor número é: %d", maior,menor);
	
	printf("\n\nColuna 3\n\nO maior número é %d\n O menor número é: %d", maior2,menor2);
}

