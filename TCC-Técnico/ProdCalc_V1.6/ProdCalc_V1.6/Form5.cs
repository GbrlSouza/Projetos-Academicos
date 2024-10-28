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
    public partial class Form5 : Form
    {
        public Form5()
        {
            InitializeComponent();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Form7 aux = new Form7();
            aux.FormClosed +=new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            Form6 aux = new Form6();
            aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
            aux.Show();
            this.Hide();
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Show();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
