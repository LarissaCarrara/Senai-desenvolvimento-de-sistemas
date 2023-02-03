#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <time.h>

char aux; 
int n;
char vetor[10][10];

void sorteianome ( char vetor[10][10]);
void sorteianome ( char vetor[10][10]){	
	srand(time(NULL));
	
	printf("Digite 10 nomes: ");
	for (n=0; n<10; n++){
		scanf("%s", &vetor[n]);
	}
	
	aux = rand() % 11;
	
	printf("nome sorteado: %s", vetor[aux]);
	printf("posição no vetor: %d", aux);
}

int main(){	
	setlocale(LC_ALL, "portuguese");
	
	sorteianome (vetor);
}
