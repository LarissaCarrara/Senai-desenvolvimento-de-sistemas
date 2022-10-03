#include <stdio.h>
#include <locale.h>

int main (){
	
	setlocale(LC_ALL, "Portuguese"); 
int idade, crianca, adoles = 10, jovem=19, adulto=25, midade=45, idoso = 60;
char nome[10];	
	
	printf("\n\nReceba como entrada o nome e a idade de uma pessoa e diga se ela é crianca, adolescente, jovem, adulto, meia idade ou idosa.");
	
	printf("\n\nDigite o nome: ");
	scanf("%s", &nome);
	
	printf("\nDigite a idade: ");
	scanf("%d", &idade);
	


	if (idade >= adoles){
			
			if (idade>= jovem ){
				
				if(idade>= adulto){
					
					if(idade>= midade){
						
						if(idade >= idoso){
							
							printf("\n\nO/A %s é cosiderado idoso segundo a OMS", nome);
							
						}else{
							printf("\n\nO/A %s é cosiderado de meia idade segundo a OMS", nome);
						}
						
						
						
					}else{
						
						printf("\n\nO/A %s é cosiderado adulto segundo a OMS", nome);
					}
					
				}else{
					
					printf("\n\nO/A %s é cosiderado jovem segundo a OMS", nome);
				}
				
				
			}else{
				
				printf("\n\nO/A %s é cosiderado adolescente segundo a OMS", nome);
				
			}
		
		
		
	}else {
		
			printf("\n\nO/A %s é cosiderado criança segundo a OMS", nome);
		
	}




	
	
	
	
	
}
