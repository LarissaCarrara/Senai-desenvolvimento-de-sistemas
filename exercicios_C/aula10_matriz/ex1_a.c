#include <stdio.h>
#include <locale.h>


int main(){
	
	setlocale(LC_ALL, "");
	
	char nomes[5][20];
	float salarios[5], percentual;
	int i;
	
	printf("Digite os nomes dos 5 funcionários: \n");

	for(i=0; i<5; i++){
		
		scanf("%s", &nomes[i] );
	}
		
	printf("Digite os salários dos 5 funcionários: \n");

	for(i=0; i<5; i++){
		
		do{
		scanf("%f", &salarios[i] );
		
		
		}while(salarios[i]< 0 || salarios[i]>1000000);
	}
	
	do{
	printf("Digite o percentual(%%) de reajuste: ");
	scanf("%f", &percentual);
	}while(percentual <0|| percentual > 1000);
	
	for(i=0; i<5; i++)	{
		
		salarios[i]= salarios[i]*percentual/100 + salarios[i];
		printf("%s novo salário R$%.2f\n", nomes[i], salarios[i]);
	}
}
