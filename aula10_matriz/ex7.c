#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");

srand(time(NULL));

/* Gere e imprima uma matriz 3x3 com valores aleatórios entre 0 e 9. 
Após, determine o maior número da matriz e sua posição.*/

int matriz[3][3], nposi, iposi, n,i, maior=0;

	for(n=0; n<3; n++){
		for(i=0; i<3; i++){
			
			matriz[n][i]=rand() % 9;
			
		}
	}
	
	
	for(n=0; n<3; n++){
		for(i=0; i<3; i++){
    		
    		printf("%d   ", matriz[n][i]);
    		if(i==2){
    			
    			printf("\n");
			}
		}
	}
	for(n=0; n<3; n++){
		for(i=0; i<3; i++){
			
			if(maior<matriz[n][i]){
				nposi= n;
				iposi= i;
				maior = matriz[n][i];
			}
		}
	}
	
	printf("O maior número é %d\n\n A posição da matriz: %d %d", maior, nposi, iposi);
}

