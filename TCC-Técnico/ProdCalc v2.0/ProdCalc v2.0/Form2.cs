using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {
            Form3 aux = new Form3();
            aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == "admin" && textBox2.Text == "admin")
            {
                Form4 aux = new Form4();
                aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
                aux.Show();
                this.Hide();

                if (radioButton1.Checked == true)
                {
                    aux.label2.Text = radioButton1.Text;
                }

                if (radioButton2.Checked == true)
                {
                    aux.label2.Text = radioButton2.Text;
                }

                textBox1.Text = "";
                textBox2.Text = "";
            }
            else
            {
                if (textBox1.Text == "" && textBox2.Text == "")
                {
                    MessageBox.Show("Insira o Login e Senha paro acesso", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    textBox1.Text = "";
                    textBox2.Text = "";
                }
                else
                {
                    MessageBox.Show("Usuário inválido ou não cadastrado", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    textBox1.Text = "";
                    textBox2.Text = "";
                }
            }
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Show();
        }
    }
}
