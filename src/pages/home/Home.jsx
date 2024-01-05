import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          {/* <TrendingUpIcon className="icon" /> */}
          <Chart title="Revenue" aspect={2 / 1} />
          
        </div>
        <div className="listContainer">
          <div className="listTitle">Course Status</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
