#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	
	setlocale(LC_ALL,"Portuguese");
	
	char sexo;
	int idade, dias;
	char saida[9] = "Inapta(o)";
	
	//entrada 
	printf("Digite o sexo, a idade e a quantos dias você doou sangue:  ");
	scanf("%c %d %d", &sexo , &idade, &dias);
	
	//processamento
	if(sexo == 'm'||sexo == 'M'){
		if(idade >=16 && idade <=69 && dias >= 60){
			strcpy(saida, "Apto");
		}
	}
	
	if(sexo== 'f' || sexo == 'F'){
		if(idade>=16 && idade <=69 && dias >=90){
			strcpy(saida,"Apto");
		}
	}
	
	printf("%s", saida);
}
