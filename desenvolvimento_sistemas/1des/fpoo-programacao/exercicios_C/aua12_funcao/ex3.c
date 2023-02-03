#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <time.h>

char aux;
int n, qtd, i = 0, j = 0, igual, tabtime, numero[40];
char vetor[40][40], vetortime[40][40];

/*Ana Maria organiza campeonatos de diversos esportes, como futebol, basquete, entre outros,
crie uma função que receba 40 nomes de times e quantos times cada grupo deve ter, a função deve
mostrar na tela os times separados em grupos porém sorteados aleatóriamente. */

void recebenome()
{

    printf("Digite 40 times: ");

    for (n = 0; n < 40; n++)
    {
        scanf("%s", &vetor[n]);
    }

    printf("Digite a quantidade de times que cada grupo deve ter: ");
    scanf("%d", &qtd);
}

void sorteianome()
{
	int h = 0;
	i = 0;
    do
    {
        aux = rand() % 40;
        igual = 0;
	        for (h = 0;h<i+1; h++){
	            if (numero[h] == aux){
	                igual = 1;
	               
	            }
        	}
		
        if (igual == 0){
           	numero[i] = aux;
            i++;
        }
    } while (i < 39);   
}

void mostratime()
{
    i = 0;
    int contagrupo = 1, aleatorio;
    for (j = 0; j < 40; j++)
    {
        if (i == qtd)
        {
            printf("------------\n");
            i = 0;
        }
        if (i == 0)
        {
            printf("Grupo %d \n\n", contagrupo);
            contagrupo++;
        }
		aleatorio = numero[j];
        printf("nome sorteado: %s \n", vetor[aleatorio]);
        printf("posição no vetor: %d \n", j);
        i++;
    }
}

int main()
{
    srand(time(NULL));
    setlocale(LC_ALL, "portuguese");

    recebenome();
	
	sorteianome();    
    
	mostratime();
}

