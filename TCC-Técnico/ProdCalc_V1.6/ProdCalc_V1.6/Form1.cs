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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            barra.Value += 5;
            carregado.Text = barra.Value.ToString() + "%";

            if (barra.Value == 100)
            {
                timer1.Stop();
                Form11 aux = new Form11();
                aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
                aux.Show();
                this.Hide();
            }
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Close();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            timer1.Start();
        }
    }
}
