#include <stdio.h>
#include <locale.h>


// Desenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%) de reajuste do salário. Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.


int main(){
	
	setlocale(LC_ALL, "Portuguese"); 
	
	char nome;
	float salario, porcent, novosal, porcentagem;
	
	printf("\nDesenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%%) de reajuste do salário. Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.");
	
	
	printf("\n\ndigite seu nome: ");
	scanf("%s", &nome);
	
	printf("\n\ndigite o seu salário atual: ");
	scanf("%f", &salario);
	
	printf("\n\ndigite o índice porcentual de reajuste do salário: ");
	scanf("%f", &porcent);
	
	porcentagem = porcent/100;

	novosal = (salario * porcentagem)+ salario;

	printf("\n\nO novo salário será de %f" , novosal);
	
	
}
