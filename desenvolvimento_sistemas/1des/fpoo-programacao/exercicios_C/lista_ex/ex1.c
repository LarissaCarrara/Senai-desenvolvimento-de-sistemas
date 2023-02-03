#include <stdio.h>
#include <locale.h>

int main(){

setlocale(LC_ALL, "Portuguese");

//Faça um programa que receba como entrada o nome e a idade de 5 pessoas e retorne a fase da vida.
int i, idade[4];
char nome[4][15], fase[4][15];
for(i=0; i<5; i++){
	
	printf("Digite o nome da %dº pessoa: ", i+1);
	scanf("%s", &nome[i]);
	
		
	printf("Digite a idade da %dº pessoa: ", i+1);
	scanf("%d", &idade[i]);
}
for(i=0; i<5; i++){
	if (idade[i]<=11 ){
		printf("\n\tNome: %s\n\tIdade: %d\n\tFase da vida: Criança", nome[i], idade[i]);
		
	}else if(idade[i]>11 && idade[i]<=18){
		printf("\n\tNome: %s\n\tIdade: %d\n\tFase da vida: Adolescente", nome[i], idade[i]);
	}else if(idade[i]>18 && idade[i]<=24){
		printf("\n\tNome: %s\n\tIdade: %d\n\tFase da vida: Jovem", nome[i], idade[i]);
	}else if(idade[i]>24 && idade[i]<=59){
		printf("\n\tNome: %s\n\tIdade: %d\n\tFase da vida: Adulto", nome[i], idade[i]);
	}else{
		printf("\n\tNome: %s\n\tIdade: %d\n\tFase da vida: Idoso", nome[i], idade[i]);
	}
}

	
	

}
