#include <stdio.h>
#include <locale.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	
	float peso, excesso, multa;
	
		/* João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento
	diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo
	regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo
	excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule
	o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor
	da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.*/

 printf("João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. \nToda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo\n (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia\n a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite\n e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.");
 printf("\n\n\nDigite o peso do peixe: ");
 scanf("%fd", &peso);
 
 if(peso ==0 || peso <0){
 	
 		printf("\n\nDigite um peso válido!");
 		return 0;
 }
 
 if(peso > 50){
 	
 	excesso = peso - 50;
 	
 	multa = excesso * 4;
 	
 	printf("O peixe possui o excesso de %.2fkg, a multa aplicada será de %.2f reais.", excesso, multa);
 	
 }else{
 	
 	printf( "O peixe pesa abaixo ou igual a 50kg e por isso, não tomará multa.");
 }
 
}
