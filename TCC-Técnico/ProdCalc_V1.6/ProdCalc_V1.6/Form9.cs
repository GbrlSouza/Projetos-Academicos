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
    public partial class Form9 : Form
    {
        public Form9()
        {
            InitializeComponent();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            if (textBox2.Text != textBox3.Text)
            {
                MessageBox.Show("Insira a sua senha Corretamente","Aviso!",MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                textBox2.Text = "";
                textBox3.Text = "";
            }
            else if (textBox1.Text == "" && textBox2.Text == "")
            {
                MessageBox.Show("Insira o Login e Senha paro acesso", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                textBox2.Text = "";
                textBox3.Text = "";
            }
        }

        private void Form9_Load(object sender, EventArgs e)
        {
            if (textBox2.Text == "")
            {
                pictureBox3.Visible = false;
            }
            else
            {
                pictureBox3.Visible = true;
            }

            if (textBox3.Text == "")
            {
                pictureBox4.Visible = false;
            }
            else
            {
                pictureBox4.Visible = true;
            }
        }
    }
}
