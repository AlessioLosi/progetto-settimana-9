import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';



class Movies extends Component {
  state = {
    remoteMovies: [],
  };

  fetchMovie = () => {
    fetch('http://www.omdbapi.com/?apikey=6a9548b4&s=Lord Of Rings')
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching movies');
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          remoteMovies: data.Search || [],
        });
      })
      .catch((error) => {
        console.log('ERROR!', error);
      });
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    console.log('Render method called');
    const movieGroups = [];
    for (let i = 0; i < this.state.remoteMovies.length; i += 4) {
      movieGroups.push(this.state.remoteMovies.slice(i, i + 4));
    }

    return (
      <div>
        <Carousel>
          {movieGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row>
                {group.map((movie, idx) => (
                  <Col key={idx} xs={12} sm={6} md={3}>
                    <img
                      className="d-block w-100"
                      src={movie.Poster}
                      alt={`Poster of ${movie.Title}`}
                    />
                    <h5>{movie.Title}</h5>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Movies;
