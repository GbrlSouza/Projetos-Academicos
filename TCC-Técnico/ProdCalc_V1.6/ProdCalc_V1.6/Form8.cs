using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace ProdCalc_V1._6
{
    public partial class Form8 : Form
    {
        public Form8()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == "Gabriel" && textBox2.Text == "13579" ||
                textBox1.Text == "Lucas" && textBox2.Text == "02468" ||
                textBox1.Text == "Riquelmi" && textBox2.Text == "1234")
            {
                Form2 aux = new Form2();
                aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
                aux.Show();
                aux.label1.Text = "Administrador(a)";
                this.Hide();
            }
            else
            {
                if (textBox1.Text == "" && textBox2.Text == "")
                {
                    MessageBox.Show("Insira o Login e Senha paro acesso","Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    textBox1.Text = "";
                    textBox2.Text = "";
                }
                else
                {
                    MessageBox.Show("Usuário inválido ou não cadastrado","Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    textBox1.Text = "";
                    textBox2.Text = "";
                }
            }
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Close();
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Form9 aux = new Form9();
            aux.Show();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }
    }
}
