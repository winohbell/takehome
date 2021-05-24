import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// class Home extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//     }

//   }


//   render() {
//     return (
//       <div id="home">
//         <select onChange={this.handleSelectChange}>
//             <option value="" selected>Select a Post</option>
//             {this.state.data.map((post => {
//                 return <option key={post.id} value={post.id}>
//                     {post.title}
//                     </option>
//             }))}
//         </select>
//         <div>
//         {/* {this.state.selected.id ? (<Redirect push to={this.state.redirectInfo} />) : null} */}
//             {this.state.selected.id ? (<Redirect push to={this.state.directUrl} />) : null}
//         </div>
//       </div>

//     )
//   }
// };

const Home = ({handleChange, postUrl, posts}) => {
    return (
        <div id="home">
          <select onChange={handleChange}>
              <option value="" selected>Select a Post</option>
              {posts.map((post => {
                  return <option key={post.id} value={post.id}>
                      {post.title}
                      </option>
              }))}
          </select>
          <div>
              {postUrl ? (<Redirect push to={postUrl} />) : null}
          </div>
        </div>
  
      )
}

export default Home;