#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	/*Faça um programa que receba o nome e o salário de 5 pessoas, calcule o INSS, 
	o IRRF e o FGTS some os totais e a média de cada um destes itens, 
	mostre o funcionário mais bem pago e o menos pago.*/
	
	char nome[5][15];
	float salario[5], total, media, max=1, min=99999, inss[6], irrf[6], fgts[6], desconto[6];
	int i, cont =0, imax = 0, imin = 0;
	
	for(i=0; i<2; i++){
		
		printf("Digite o %dº nome: ", i+1);
		scanf("%s", &nome[i]);
	
		printf("Digite o salario: ");
		scanf("%f", &salario[i]);
		
		if (salario[i]>max){
			max = salario[i];
			imax= i;
		}
		if (salario[i] < min){
			min =salario[i];
			imin=i;
		}
	
	
	//INSS
	if (salario[i]<=1212){
		inss[i] = salario[i] * 0.075;
	}else if(salario[i]>1212 && salario[i] <=2427.35){
		inss[i] =  salario[i] * 0.09;
	}else if(salario[i] > 2427.35 && salario[i] <= 3641.03){
		inss[i] = salario[i] * 0.12;
	}else if(salario[i] > 3641.03 && salario[i] <= 7087.22){
		inss[i] =  salario[i] * 0.14;
	}else{
		inss[i] =  7087.22 * 0.14;
	}
	
	//IRRF
	if (salario[i]<=1903.98){
		irrf[i] = 0;
	}else if(salario[i]>1903.98 && salario[i] <=2826.65){
		irrf[i] = salario[i] * 0.075;
	}else if(salario[i] > 2826.65 && salario[i] <= 3751.05){
		irrf[i] = salario[i] * 0.15;
	}else if(salario[i] >  3751.05 && salario[i] <= 4664.68){
		irrf[i] = salario[i] * 0.225;
	}else{
		irrf[i] = 4664.69 * 0.275;
	}
	
	//FGTS
	fgts[i] = salario[i] * 0.08;
}

	for(i=0; i<2; i++){
		desconto[i] = inss[i] +irrf[i]+ fgts[i];
		printf("\nO desconto total salarial do/a %s será de %.2f reais.", nome[i],desconto[i]);
	}
		printf("\nMaior salario: %.2f reais - %s\nMenor salário: %.2f reais - %s",max, nome[imax], min, nome[imin]);
}
