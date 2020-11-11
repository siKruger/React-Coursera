import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";



    function RenderDish({dish}) {
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


    function RenderComments({dishComments}) {

        if (dishComments != null) {
            const comments = dishComments.map((coms) => {
                return (
                    <li key={coms.id}>
                        <p> {coms.comment} </p>
                        <p>-- {coms.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date( Date.parse(coms.date)))}</p>
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
            console.log("kein comment");
            return (<div></div>);
        }
    }


    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <RenderComments dishComments={props.dish.comments}/>
                </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

export default DishDetail;
