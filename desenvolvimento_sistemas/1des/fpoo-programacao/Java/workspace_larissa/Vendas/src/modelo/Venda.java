package modelo;

public class Venda {
	//atributos encapsulados
	private String produto;
	private int quantidade;
	private float preco;
	
	//metodo comum
	public float subTotal() {
		return quantidade * preco;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	@Override
	public String toString() {
		return String.format("\n%s\t%d\t\t%.2f\t\t%.2f\n", produto, quantidade, preco, subTotal());
	}

	
	
	
	
	
}

