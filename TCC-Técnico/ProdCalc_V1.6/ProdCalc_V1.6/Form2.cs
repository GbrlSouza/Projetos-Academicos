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
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show(label1.Text+", Deseja fazer logoff?", "Aviso!", MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
            {
                this.Close();
            }
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            Form5 aux = new Form5();
            aux.FormClosed+=new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
            System.Diagnostics.Process.Start("calc");
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {
            Form4 aux = new Form4();
            aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        private void pictureBox5_Click(object sender, EventArgs e)
        {
            Form3 aux = new Form3();
            aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Show();
        }
    }
}
