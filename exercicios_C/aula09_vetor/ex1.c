#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	/*Crie dois vetores numéricos de dimensão 5 com valores informados pelo usuário.
Apresente a soma do primeiro vetor com o inverso do segundo.*/
	
	int vetor1[5], vetor2[5], soma=0, n=0,  j=4;
	
	printf("Digite os 5 valores referente ao primeiro vetor: \n");
	
	for(n=0; n<5; n++){
		
		scanf("%d", &vetor1[n]);
		
	}
		printf("Digite os 5 valores referente ao segundo vetor: ");
	
	for (n=0; n<5; n++){
		
		scanf("%d", &vetor2[n]);
	
	}
	
	
	for(n=0; n<5; n++){
		
			soma = vetor1[n] + vetor2[4-n];
		
		printf("\n\nO valor do %d com o %d é de %d", vetor1[n], vetor2[4-n], soma);
	
	}
}

