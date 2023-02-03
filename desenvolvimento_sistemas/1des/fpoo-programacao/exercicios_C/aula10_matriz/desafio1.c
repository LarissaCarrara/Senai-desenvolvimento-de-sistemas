#include <locale.h>
#include <time.h>
#include <stdio.h>
int main(){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	int vetor[6];
	int i = 0, alinha= 10, aux, encontrado, n, arm;
	do{
		aux=rand() % 60 + 1;	
		encontrado=0;
		for(n=0; n<i; n++){
			if( vetor[n] == aux){
				encontrado = 1;
			}
		}	
		if(!encontrado){
			vetor[i]= aux;
			i++;
		}
	}while(i < 6);
	
	for(i=1; i<=60; i++){
		for(n=0; n<6; n++){
			if(vetor[n] == i){
				printf("[  ]");
				arm= i;
				break;
			}
		}
		if(arm!=i && i<10) {	
			printf("[0%d]", i);
		}else if(arm!=i && i>=10) {
			printf("[%d]",i);
		}
		if(i==alinha){
			printf("\n");
			alinha+=10;
		}
	}
	printf("\n");
	for(i = 0; i < 6; i++)
		printf("(%d)",vetor[i]);	
}
