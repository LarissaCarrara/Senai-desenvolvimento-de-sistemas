#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	int vetor[10], aux, n=0,n1;
	
	
	
	// Faça um programa que leia 10 valores inteiros em qualquer ordem e os classifique em ordem crescente. 
	
	
	for(n=0; n<10; n++){
		
		printf("Insira o %d número: \n", n);
		scanf("%d", &vetor[n]);
	}
	
	
	n=0;
	
	for(n1=0; n1<10; n1++){
	n=0;	
	
	do{
		if(vetor[n]>vetor[n+1]){
			
			aux= vetor[n];
			vetor[n] = vetor[n+1];
			vetor[n+1]=aux;
			
		}
		n++;
	}while(n<10);
	
	}
	
	
	
	
		
		
		
	
	for(n=0; n<10; n++){
		
		printf("números ordenados: %d\n", vetor[n]);
	}
		
		
	
	
}
