using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

/*Turquoise*/

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            progressBar1.Value += 5;
            label2.Text = progressBar1.Value.ToString() + "%";

            if (progressBar1.Value == 100)
            {
                timer1.Stop();
                Form2 aux = new Form2();
                aux.FormClosed += new FormClosedEventHandler(aux_FormClosed);
                aux.Show();
                this.Hide();
            }
        }

        void aux_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Close();
        }

        private void Form1_Load_1(object sender, EventArgs e)
        {
            timer1.Start();
        }
    }
}
