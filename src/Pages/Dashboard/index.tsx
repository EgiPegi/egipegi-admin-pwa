import React from "react";
import { Bar } from "react-chartjs-2";
import DataTable from "../../components/DataTable";

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

//table
const columns = [
  {
    name: "Dataset 1",
    selector: "data1",
    // width: "80px",
  },
  {
    name: "Dataset 2",
    selector: "data2",
    // action: (row: any) => row.data2,
  },
  {
    name: "Action",
    selector: "action",
    width: "50px",
    action: (row: any) => (
      <div
        onClick={() => alert(JSON.stringify(row))}
        style={{
          cursor: "pointer",
          backgroundColor: "mediumseagreen",
          color: "white",
          padding: 4,
          borderRadius: 4,
        }}
      >
        alert
      </div>
    ),
  },
];
const tableData = [
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
]

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
          <DataTable columns={columns} data={tableData} pagination={true} />
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
