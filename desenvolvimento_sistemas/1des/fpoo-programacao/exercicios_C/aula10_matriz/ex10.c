#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

int main(){

setlocale (LC_ALL, "Portuguese");

srand(time(NULL));

/*  Crie um programa que leia o nome e duas notas de 5 alunos, 
em seguida mostre a lista com nomes notas e médias dos 5 alunos.
*/

char nome[5][20];
float nota1[10], nota2[10], media[5];
int i;


for (i=0; i<5; i++){
	
	printf("Digite o nome do %d aluno: ", i+1);
	scanf("%s", &nome[i]);
	
	printf("Nota 1: ");
	scanf("%f", &nota1[i]);
	
	printf("Nota 2: ");
	scanf("%f", &nota2[i]);
}

for(i=0; i<5; i++){
	
	media[i]=(nota1[i]+nota2[i])/2;
	
	printf("\n\nAluno: %s\n Nota 1: %.2f\n Nota 2: %.2f\n Média: %.2f", nome[i], nota1[i], nota2[i], media[i]);
}

}
