#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>


int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	char nome[5][15],  aux[15];
	int n=0, i,i2, menu;

do{

	
	printf("Digite cinco nomes: ");
	
	for(i=0; i<5; i++){
		
		scanf("\n%s", &nome[i]);
	}
	
	for(n=0; n<5; n++){
		
		for(i2=0 ; i2<5; i2++){
			
			if(strcmp(nome[n], nome[i2])<0){
				strcpy(aux, nome[n]);
				strcpy(nome[n], nome[i2]);
				strcpy(nome[i2], aux);
				
			}
			
		}
	}
	
	
	for(i=0; i<5; i++){
		printf("\nNome: %s\n", nome[i]);
		
		
	}
	
	printf("\n\n Deseja continuar? (1-sim / 2-não): ");
	scanf("%d", &menu);
	
	}while(menu == 1);
}

