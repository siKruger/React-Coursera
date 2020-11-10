import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }


    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }


    renderComments(dishComments) {
        if (dishComments != null) {

            const comments = dishComments.map((coms) => {
                return (
                    <li key={coms.id}>
                        <p> {coms.comment} </p>
                        <p>-- {coms.author}, {coms.date}</p>
                    </li>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );

        } else {
            return (<div></div>);
        }
    }


    render() {
        if (this.props.dish != null) {


            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>

                    {this.renderComments(this.props.dish.comments)}

                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;
