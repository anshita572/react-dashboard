import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "Design",
      product: "Complete Python Bootcamp",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: 150,
      amount: "⭐4.5",
      method: "$610",
      status: "6,512",
    },
    {
      id: "Development",
      product: "Advanced Excel Formulas & Functions",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: 20,
      amount: "⭐5",
      method: "$320",
      status: "24,512",
    },
    {
      id: "Photography",
      product: "Video Editor in Filmora",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: 56,
      amount: "⭐4.5",
      method: "$410.2",
      status: "24,512",
    },
    {
      id: "Marketing",
      product: "Online Meeting Facilitation:The 4 Secret Keys",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: 150,
      amount: "⭐4.5",
      method: "$500",
      status: "6,512",
    },
    {
      id: "Music",
      product: "Intermediate Blues Rhythm Guitar",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: 30,
      amount: "⭐4.5",
      method: "$210",
      status: "512",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Sale</TableCell>
            <TableCell className="tableCell">Rating</TableCell>
            <TableCell className="tableCell">Earning</TableCell>
            <TableCell className="tableCell">Visitor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
