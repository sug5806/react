import React from 'react';

class CardContainer extends React.Component {
    render() {
        const cards = [{
            "id": 1,
            "img": "img/strings.png",
            "imgalt": "strings",
            "desc": "A very authentic and beautiful instrument!!",
            "price": 100.0,
            "productname": "Strings"
        }, {
            "id": 2,
            "img": "img/redguitar.jpeg",
            "imgalt": "redg",
            "desc": "A really cool red guitar that can produce super cool music!!",
            "price": 299.0,
            "productname": "RedGuitar"
        }];

        const cardItems = cards.map(
            card => <Card key = {card.id} {...card}/>
        );
        return (
            <div>{cardItems}</div>
        );
    }
}

class Card extends React.Component {
    render() {
        const img = "img/strings.png";
        const imgalt = "string";
        const desc = "A very authentic and beautiful instrument!!";
        const price = 100;
        const productName = "Strings";
        return (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card mb-3">
                    <img className="card-img-top" src={this.props.img} alt={this.props.imgalt} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.productName}</h4>
                            Price: <strong>{this.props.price}</strong>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        );
    }
}

