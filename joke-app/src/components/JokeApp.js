import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        };
    }
    
     render() {
        return (
            <div>
                {/* <h4>{this.stateisLoading ? 'loading jokey joke...' this.state.joke}</h4>
                <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p> */}
                {this.state.isLoading && 'loading joke...'}
                {this.state.loading === false && this.state.joke}
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.chucknorris.io/jokes/random?category=dev';
            fetch(url)
                .then(response => response.json())
                .then(jokeJson => {
                    this.setState({
                        joke: jokeJson.value, isLoading: false
                    }, () => {
                        console.log('New joke stored');
                    });
                })
        })
    }
}

export default JokeApp;