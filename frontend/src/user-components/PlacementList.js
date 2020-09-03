import React,{Component} from "react";
import {Table} from "reactstrap";
import Axios from "axios";
import Students from './AllRecordsList';

class Leaderboard extends Component {
  constructor(props) {
        super(props);
        this.state={
          noc:0,
          wtc:1,
          nca:2,
          gdc:3,
          ce:4,
          ttc:5,
          nol:6,
          students: []
        };
    }
    componentDidMount() {
        Axios.get("http://localhost/login-backend/placementdetails.php?id="+this.props.login)
            .then(responses => {
                this.setState({
                  ce:123
                });
                console.log(responses);
            })
            .catch(function (error){
                console.log(error);
            })
    }
  render() {
    return (
      <div className="lb">
          <Table className="placements" bordered responsive>
              <tbody>
              <tr>
                <th colSpan="2">Placements Analysis</th>
              </tr>
              <tr align="left">
                <td md="6">Total Number of Companies:{this.state.noc}</td>
                <td md="6">Number of written test cleared:{this.state.wtc}</td>
              </tr>
              <tr align="left">
                <td md="6">Number of Companies Attended:{this.state.nca}</td>
                <td md="6">Number of GD's cleared:{this.state.gdc}</td>
              </tr>
              <tr align="left">
                <td md="6">Number of Companies Eligible:{this.state.ce}</td>
                <td md="6">Number of technical test cleared:{this.state.ttc}</td>
              </tr>
              <tr>
                <td colSpan="2">Number of Offer Letters:{this.state.nol}</td>
              </tr>
              </tbody>
        </Table>
        <br></br>
        <br></br>
        <Table  className="placements" bordered hover zoom responsive>
          <thead>
            <tr>
              <th>Company Logo</th>
              <th>Company Name</th>
              <th>Attendance</th>
              <th>Written Test</th>
              <th>GroupDiscussion</th>
              <th>Technical Test</th>
              <th>Personal Interview</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default Leaderboard;
