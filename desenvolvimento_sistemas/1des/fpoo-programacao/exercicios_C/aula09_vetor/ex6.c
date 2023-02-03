#include <stdio.h>
#include <locale.h>
#include <time.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	srand(time(NULL));
	
	int vetor[100], aux, n=0,n1;
	
	
	
	// Faça um programa que leia 10 valores inteiros em qualquer ordem e os classifique em ordem crescente. 
	
	
	for(n=0; n<100; n++){
		
	vetor[n]=rand();
	}
	
	
	n=0;
	
	for(n1=0; n1<100; n1++){
	n=0;	
	
	do{
		if(vetor[n]>vetor[n+1]){
			
			aux= vetor[n];
			vetor[n] = vetor[n+1];
			vetor[n+1]=aux;
			
		}
		n++;
	}while(n<100);
	
	}
	
	
	
	
		
		
		
	
	for(n=0; n<100; n++){
		
		printf("números ordenados: %d\n", vetor[n]);
	}
		
		
	
	
}
