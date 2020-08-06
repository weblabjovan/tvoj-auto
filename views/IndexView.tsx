import React from 'react';
import { Container, Row, Col } from 'reactstrap';

type IndexViewProps = {
    indexObjects: Array<object>,
}

const IndexView = (props: IndexViewProps) => {
    const { indexObjects } = props;

    return(
        <Container>
            <Row className="index-view">
                <Col sm="8" className="main">
                    <div className="poster">
                        <a href="/">
                            <div className="poster-img" style={{'background': 'url(/poster-car.jpg) center / cover no-repeat'}}></div>
                        </a>
                            <div className="poster-bottom">
                                <div className="left-side">
                                    <a href="/"><h3>Golf 5: Kako upaliti klimu?</h3></a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="right-side">
                                    <span>05 Jul 2020</span>
                                </div>
                                <div style={{'clear': 'both'}}></div>
                            </div>
                       
                    </div>

                    <div className="blog-list">
                        {
                            [1,2,3,4,5,6,7,7,8,9].map((item, index) => {
                                if(index  % 2 == 0){
                                    return(
                                        <Row key={`blog-item-${index}`}>
                                            <Col xs="12" sm="6">
                                                <div className="blog-item">
                                                    <a href="/">
                                                        <div className="blog-img" style={{'background': 'url(/poster-car.jpg) center / cover no-repeat'}}></div>
                                                    </a>
                                                        <div className="blog-text">
                                                            <a href="/"><h3>Golf 4: Kako resetovati mali servis?</h3></a>
                                                            <p>Volkswagen/ Jovan /27 Jun 2020</p>
                                                        </div>
                                                    
                                                    
                                                </div>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <div className="blog-item">
                                                    <a href="/">
                                                        <div className="blog-img" style={{'background': 'url(/poster-car.jpg) center / cover no-repeat'}}></div>
                                                    </a>
                                                        <div className="blog-text">
                                                            <a href="/"><h3>Golf 4: Kako resetovati mali servis?</h3></a>
                                                            <p>Volkswagen / Jovan / 27 Jun 2020</p>
                                                        </div>
                                                    
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                }else{
                                    return(
                                        <Row key={`blog-sep-${index}`}>
                                            <Col xs="12">
                                                <div className="separator"></div>
                                            </Col>
                                        </Row>
                                    )
                                }
                            })
                        }
                        <Row>
                            <Col xs="12">
                                <div className="btn-wrapper">
                                    <a href="/posts/all">
                                        <div className="btn-standard">svi članci</div>
                                    </a>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col sm="4">
                    <div className="side">
                        <div className="banner"></div>
                        <div className="banner"></div>
                        <div className="banner"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default IndexView;