import React from "react";
import { Bar } from "react-chartjs-2";

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(255, 99, 132)",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(75, 192, 192)",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / dashboard</div>
        <hr />
        <div className="title">Dashboard</div>
      </div>
      <div className="wrap">
        <div className="title">Dashboard Bar</div>
        <div className="gr-2-40-60">
          <div>
            <table id="custum_table">
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Königlich Essen</td>
                <td>Philip Cramer</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
            </table>
          </div>
          <div>
            <Bar type="bar" data={data} />
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="title">Dashboard Bar</div>
        <div className="gr-2-40-60">
          <div>
            <table id="custum_table">
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Königlich Essen</td>
                <td>Philip Cramer</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
            </table>
          </div>
          <div>
            <Bar type="bar" data={data} />
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="title">Dashboard Bar</div>
        <div className="gr-2-40-60">
          <div>
            <table id="custum_table">
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Königlich Essen</td>
                <td>Philip Cramer</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
            </table>
          </div>
          <div>
            <Bar type="bar" data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
