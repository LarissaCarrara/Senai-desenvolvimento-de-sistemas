package ex1;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Formulario extends JFrame implements ActionListener{

	private static final long serialVersionUID = 1L;
	JPanel painel;
	JLabel rotuloNome, rotuloIdade, rotuloResultado;
	JTextField campoNome, campoIdade;
	JButton botao, limpar;
	JTextArea areaResultado;
	String resultado ="", fasedavida;
	int idade;
	
	Formulario(){
		
		setTitle("Entrada, Processamento e Saída");
		setBounds(50,50,600,400);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel); 
		setLayout(null);
	
	rotuloNome = new JLabel ("Nome: ");
	rotuloNome.setBounds(20,20,200,30);
	painel.add(rotuloNome);
	
	rotuloIdade = new JLabel ("Idade: ");
	rotuloIdade.setBounds(20,60,200,30);
	painel.add(rotuloIdade);
	
	rotuloResultado = new JLabel ("Resultado: ");
	rotuloResultado.setBounds(20,100,200,30);
	painel.add(rotuloResultado);
	
	campoNome = new JTextField();
	campoNome.setBounds(100,20,250,30);
	painel.add(campoNome);
	
	campoIdade = new JTextField();
	campoIdade.setBounds(100,60,250,30);
	painel.add(campoIdade);
	
	botao = new JButton("Processar");
	botao.setBounds(400,40,100,30);
	painel.add(botao);
	botao.addActionListener(this);
	
	limpar = new JButton("Limpar");
	limpar.setBounds(400,80,100,30);
	painel.add(limpar);
	limpar.addActionListener(this);
	
	areaResultado = new JTextArea();
	areaResultado.setBounds(100,100,250,30);
	painel.add(areaResultado);
	
	
	}

	
	
	public static void main(String[] args) {
		System.out.println("Esse programa está funcionando");
		new Formulario().setVisible(true);
		
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		if(e.getSource()== botao) {
			resultado += campoNome.getText()+"\t";
			idade = Integer.parseInt(campoIdade.getText());
			resultado += idade;
			if(idade<10) {
				fasedavida = "- Criança";
			}else if(idade<22) {
				fasedavida = "- Jovem";
			}else if(idade <60) {
				fasedavida = "- Adulto";
			}else {
				fasedavida = "- Idoso";
			}
			areaResultado.setText(resultado + fasedavida);
		}
		if(e.getSource()== limpar) {
			resultado = "";
			areaResultado.setText(resultado);
		}
		
	}

}
