import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";

import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import classes from "./PortfolioLayoutsTypeNinth.module.css"
import {Fade} from "react-awesome-reveal";

const postForView = 5;
const title = "Latest Projects";

class PortfolioLayoutsTypeNinth extends Component {

    state = {
        postForView: postForView ,
        activeCategory: 'branding',
        projects: [
            {
                name: 'Symbol Design Sysytem',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 3,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 4,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 5,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 6,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 6,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Symbol Design Sysytem',
                link: '#/some-link#1',
                poster: null,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#2',
                poster: null,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                category: 'web-design'
            },
            {
                name: 'Symbol Design Sysytem',
                link: '#/some-link#1',
                poster: null,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#2',
                poster: null,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                link: '#/some-link#3',
                poster: null,
                category: 'graphic-design'
            }
        ],
        category: [
          'Branding', 'Web Design' , 'Graphic Design'
        ]
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
        this.setState({postForView: postForView});
    }

    renderCards () {
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.category === this.state.activeCategory) {
                    return true
                }
            }
        ).filter((element, index) => {
                if (index < this.state.postForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <a href={item.link} className={classes.link}>
                            {this.props.dark === true ?
                                <>
                                    {item.poster ?
                                        <img
                                            src={item.poster}
                                            alt="placeholder"
                                            width="350"
                                            height="260"/>
                                        :
                                        <img
                                            src={placeholderDark}
                                            alt="placeholder"
                                            width="350"
                                            height="260"
                                        />
                                    }
                                </>
                                :
                                <>
                                    {item.poster ?
                                        <img
                                            src={item.poster}
                                            alt="placeholder"
                                            width="350"
                                            height="260"/>
                                        :
                                        <img
                                            src={placeholder}
                                            alt="placeholder"
                                            width="350"
                                            height="260"
                                        />
                                    }
                                </>
                            }
                        </a>
                    </Fade>
                </Col>
            )

        });
        return (
            <>
                {listItems}
            </>
        );
    }

    render() {

        return (
            <div>
                <section className={`section  ${classes.portfolio} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className={`mx-auto ${classes.headerColumn}`}>
                                    <Fade top triggerOnce={true}>
                                        <h1 className={classes.title}>{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>

                            <Row className={classes.tabsRow}>
                                <Col lg="6" md="8" className={`mx-auto d-flex justify-content-center ${classes.col} ${classes.tabs}`}>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <Tabs
                                            array={this.state.category}
                                            onClick={this.onLinksClickHandler}
                                        />
                                    </Fade>
                                </Col>
                            </Row>

                            <Row className={classes.portfolioRow}>
                                <div className={classes.cardWrapper}>
                                    {this.renderCards()}
                                </div>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PortfolioLayoutsTypeNinth
