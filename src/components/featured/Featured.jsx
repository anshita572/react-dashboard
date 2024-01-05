import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Sales</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={3500} text={"3500"} strokeWidth={5} />
        </div>
        <p className="title">Total sales </p>
        {/* <p className="amount">3500</p> */}
        {/* <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p> */}
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <TrendingDownIcon fontSize="small"/>
              <div className="resultAmount">3000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Current Week</div>
            <div className="itemResult positive">
              <TrendingUpIcon fontSize="small"/>
              <div className="resultAmount">2000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <TrendingDownIcon fontSize="small"/>
              <div className="resultAmount">1500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
