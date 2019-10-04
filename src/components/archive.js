import React, {Component} from 'react';

const API_KEY = 'ZnMcGEypGxtSBSFQVlGc0DAjriyjnUGE';

export default class Archive extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: {},
            isLoad: false
        }
    }

    componentDidMount() {
        fetch(`https://api.nytimes.com/svc/archive/v1/2019/10.json?api-key=${API_KEY}`)
            .then(responce => responce.json())
            .then(news => this.setState({
                result: news,
                isLoad: true
            }))
            .catch(error => console.log(error))
    }

    render() {

        const {
            result,
            isLoad
        } = this.state;

        console.log(result);

        if (!isLoad) {
            return (
                <div className="load__wrapper">
                    <p>Loading news...</p>
                </div>
            );
        } else {
            return (
                <div className="news__wrapper">
                    {result.response.docs.map((article, id) => (
                        <div key={id} className="news__card">
                            <div className="news__title">
                                <p>{article.headline.main}</p>
                            </div>
                            <div className="news__snippet">
                                <p>{article.snippet}</p>
                            </div>
                            <div className="news__link">
                                <a href={article.web_url}>read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}