#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <time.h>

char aux; 
int n, qtd,i;
char vetor[10][10];


void recebenome ( ){	
	
	
	printf("Digite 10 nomes: ");
	
	for (n=0; n<10; n++){
		scanf("%s", &vetor[n]);
	}
	
	printf("Digite a quantidade de nomes que deseja sortear: ");
	scanf("%d", &qtd);
}


void sorteianome ( ){
	
aux = rand() % 11;
	
	printf("\n\nnome sorteado: %s \n", vetor[aux]);
	printf("posição no vetor: %d", aux);
	
}


int main(){	
	srand(time(NULL));
	setlocale(LC_ALL, "portuguese");
	
	recebenome();
	
	for (i=0; i<qtd; i++){
		sorteianome();
	}

}
