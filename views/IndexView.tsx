import React from 'react';
import Link from 'next/link';
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
                        <Link href="/posts/[pid]" as={`/posts/golf_5_kako_upaliti_klimu`}>
                            <a>
                                <div className="poster-img">
                                    <img src="/poster-car.jpg" alt="golf-5-klima" title="Golf 5: Kako upaliti klimu?"/>
                                </div>
                            </a>
                        </Link>
                        
                        <div className="poster-bottom">
                            <div className="left-side">
                                <Link href="/posts/[pid]" as={`/posts/golf_5_kako_upaliti_klimu`}>
                                    <a><h3>Golf 5: Kako upaliti klimu?</h3></a>
                                </Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="right-side">
                                <span>05 Jul 2020</span>
                            </div>
                            <div style={{'clear': 'both'}}></div>
                        </div>
                    </div>

                    <Row className="xs-only">
                        <Col xs="12">
                            <div className="banner"></div>
                        </Col>
                    </Row>

                    <div className="blog-list">
                        {
                            [1,2,3,4,5,6,7,7,8,9].map((item, index) => {
                                if(index  % 2 == 0){
                                    return(
                                        <Row key={`blog-item-${index}`}>
                                            <Col xs="12" sm="6">
                                                <div className="blog-item">
                                                    <a href="/">
                                                        <div className="blog-img">
                                                            <img src="poster-car.jpg" alt="golf-4-rest-mali-servis" title="Golf 4: Kako resetovati mali servis?"/>
                                                        </div>
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
                                                        <div className="blog-img">
                                                            <img src="poster-car.jpg" alt="golf-4-rest-mali-servis" title="Golf 4: Kako resetovati mali servis?"/>
                                                        </div>
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
                        <Row className="xs-only">
                            <Col xs="12">
                                <div className="banner"></div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12">
                                <div className="btn-wrapper">
                                    <Link href="/posts/[pid]" as={`/posts/all?id=0`}>
                                        <a>
                                            <div className="btn-standard">svi članci</div>
                                        </a>
                                    </Link>
                                    
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col sm="4">
                    <div className="side">
                        <div className="banner"></div>

                        <div className="related-list">
                            <h2>Najčitanije</h2>
                            {
                                [1,2,3,4,5].map((item, index) => {
                                    return(
                                        <a href="/" key={`related-key-${index}`}>
                                            <div className="related-post" >
                                                <div className="related-img">
                                                    <img src="/small-side.jpg" alt="golf4-ili-audi-a3" title="Da li je bolji Golf 5 ili Audi A3?"/>
                                                </div>
                                                <div className="related-text">
                                                    <p>Da li je bolji Golf 5 ili Audi A3?</p>
                                                    <span>25 Jul 2020</span>
                                                </div>
                                                <div style={{"clear":"both"}}></div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        
                        <div className="banner"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default IndexView;