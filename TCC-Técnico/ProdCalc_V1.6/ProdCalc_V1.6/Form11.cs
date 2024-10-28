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
    public partial class Form11 : Form
    {
        public Form11()
        {
            InitializeComponent();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Form10 aux = new Form10();
            aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            Form8 aux = new Form8();
            aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("ProdCalc sera encerrado! \nConfirmar?", "Aviso!", MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
            {
                Application.Exit();
            }
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Show();
        }
    }
}
