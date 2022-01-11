import React, { Component, Fragment } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
    };
  }

  render() {
    return (
      <>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-gray-800">
                Genres in Data Base
              </h6>
            </div>
            <div className="card-body">
              <div className="row">
                {
                this.state.genres.map((genre, index) => {
                  return <Genre name={genre.name} key={index + genre.name} />;
                })
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  async apiCall(url, handler){
    try {
      let response = await fetch(url);
      let result = await response.json();
      handler(result);
    } catch (err) {
      console.log(err);
    }
  };

  loadGenres = (result) => {
    this.setState({
      genres: result.data
    });
  };

  async componentDidMount() {
    await this.apiCall('http://localhost:3001/api/genres', this.loadGenres);
  }
}
export default GenresInDb;
