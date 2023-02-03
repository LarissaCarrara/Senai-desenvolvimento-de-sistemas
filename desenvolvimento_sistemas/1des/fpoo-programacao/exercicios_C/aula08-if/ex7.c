#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	int n1,n2,n3,n4,n5, n=0;

	
		/* Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
	a. "Telefonou para a vítima?"
	b. "Esteve no local do crime?"
	c. "Mora perto da vítima?"
	d. "Devia para a vítima?"
	e. "Já trabalhou com a vítima?"
	O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a
	pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4
	como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".	*/
	
	
	printf("Telefonou para a vítima? (1-sim, 2-não): ");
	scanf("%d", &n1);
	
	if(n1 == 1){
		
		n++;	
	}
	
	printf("Esteve no local do crime? (1-sim, 2-não): ");
	scanf("%d", &n2);
	
	if(n2 == 1){
		n++;
	}
	
	printf("Mora perto da vítima? (1-sim, 2-não): ");
	scanf("%d", &n3);
	
	if(n3 == 1){
		n++;
	}
	
	printf("Devia para a vítima? (1-sim, 2-não): ");
	scanf("%d", &n4);
	
	if(n4 == 1){
		n++;
	}
	
	printf("Já trabalhou com a vítima? (1-sim, 2-não): ");
	scanf("%d", &n5);
	
	if(n5 == 1){
		n++;
		
	}
	
	
	if(n==1){
		printf("\n\nVocê foi considerado inocente");
		
	}else if(n==2){
		printf("\n\nVocê foi considerado suspeito(a)");
		
	}else if(n==3 || n==4){
		printf("\n\nVocê foi considerado cúmplice");
		
	}else if(n==5){
			printf("\n\nVocê foi considerado assasino(a)");
	}

}
