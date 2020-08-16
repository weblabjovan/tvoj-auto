import { Container, Row, Col } from 'reactstrap'; 

const Footer = () => {

    return(
        <div className="footer-wrapper">
            <Container>
                <Row>
                    <Col xs="12">
                        <a href="/"><img src="/insta-w.png" alt="Tvoj auto instagram"/></a>
                        <a href="/"><img src="/facebook.png" alt="Tvoj auto facebook"/></a>
                        <a href="/"><img src="/youtube.png" alt="Tvoj auto youtube"/></a>
                        <a href="/"><img src="/pinterest.png" alt="Tvoj auto pinterest"/></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12"><p>&copy; tvojauto.com</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;