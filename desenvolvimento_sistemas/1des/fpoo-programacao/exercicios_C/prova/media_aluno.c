#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	/*Faça um programa em linguagem C que leia o nome e duas notas (de 0 a 10)
	 de 5 alunos, mostre na tela os nomes, médias e conceitos  "Aprovado", "Reprovado", 
	 destes alunos considerando como critério para aprovação a média maior ou igual a 5.*/
	 
	 char nome[5][10];
	 float nota1[5], nota2[5], media[5];
	 int i;
	 
	 for(i=0;i<2; i++){
	 	printf("Digite o nome do %dº aluno: ", i+1);
	 	scanf("%s", &nome[i]);
	 	
	 	printf("Digite a primeira nota: ");
	 	scanf("%f", &nota1[i]);
	 	
	 	printf("Digite a segunda nota: ");
	 	scanf("%f", &nota2[i]);
	 	
	 	media[i] = (nota1[i] + nota2[i])/2;
	 }
	 
	 for(i=0; i<2; i++){
	 	
	 	if(media[i]>=5){
	 		printf("\nAluno: %s\nMédia: %.2f\nSituação: Aprovado(a).", nome[i], media[i]);
		}else{
			printf("\nAluno: %s\nMédia: %.2f\nSituação: Reprovado(a).", nome[i], media[i]);
		}
	 }
	 
}
