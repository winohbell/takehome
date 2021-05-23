import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        data: [],
        selected: {},
        directUrl: '',
        redirectInfo: {}
    }

    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount () {
      axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
              _limit: 10 //limit post number to 10, originally ~100
          }
      })
      .then((res) => {
          this.setState({
              data: res.data
          });
      })
  }

  findIndex(data, targetId) {
      for (let i = 0; i < data.length; i++) {
          if (data[i].id == targetId) return i
      }
  }
  handleSelectChange(e) {
      let selectedData = this.state.data[this.findIndex(this.state.data, e.target.value)];
    //   let redirectI = {pathname: `/posts/${selectedData.id}`, state: {data: selectedData}};
    //   console.log(redirectI)
      this.setState({selected: selectedData, directUrl: `/posts/${selectedData.id}`});
  }


  render() {
    return (
      <div id="home">
        <select onChange={this.handleSelectChange}>
            <option value="" selected>Select a Post</option>
            {this.state.data.map((post => {
                return <option key={post.id} value={post.id}>
                    {post.title}
                    </option>
            }))}
        </select>
        <div>
        {/* {this.state.selected.id ? (<Redirect push to={this.state.redirectInfo} />) : null} */}
            {this.state.selected.id ? (<Redirect push to={this.state.directUrl} />) : null}
        </div>
      </div>

    )
  }
};

export default Home;