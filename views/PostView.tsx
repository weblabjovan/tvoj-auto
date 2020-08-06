import React from 'react';
import { Container, Row, Col } from 'reactstrap';

type PostViewProps = {
    post: string,
    page: number,
}

const PostView = (props: PostViewProps) => {
  const { post, page } = props;
  const back = page > 1 ? 1 : 0;
  const next = page < 7 ? 1 : 0;
  
  const pagination = {back, current: page, last: 7, next};


  return(
    <Container>
      <Row className="post-view">
        {
          post === "all"
          ?
          (
            <React.Fragment>
              <Col sm="8">
                <h1>Naši auto članci</h1>
                <div className="post-list">
                  {
                    [1,2,3,4,5,6,7,7,8,9,0,0,8,8].map((item, index) => {
                      return(
                        <div className="post-item" key={`blog-key-${index}`}>
                          <Row>
                            <Col xs="12" sm="4">
                              <a href="/">
                                <div className="post-img" style={{'background': 'url(/poster-car.jpg) center / cover no-repeat'}}></div>
                              </a>
                              
                            </Col>
                            <Col xs="12" sm="8">
                              <div className="post-text">
                                <a href="/">
                                  <h3>Neki naslov bilo koji kao pitanje?</h3>
                                </a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <span>Volkswagen / Jovan / 27 Jul 2020</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      )
                    })
                  }
                  <div className="pagination-wrapper">
                    <Row>
                      <Col>
                        <div className="pagination">
                          {
                            
                            Object.keys(pagination).map((item, index) => {
                              return(
                                item === "back" && pagination[item] !== 0 
                                ?
                                <a href={`/posts/all?page=${page - 1}`} key={`pagination-key${index}`}><div className="pagination-item button left" >{`nazad`}</div></a>
                                :
                                item === "current" && pagination[item] !== 0
                                ?
                                <div className="pagination-item" key={`pagination-key${index}`}>{`strana ${pagination[item]} `}</div>
                                :
                                item === "last" && pagination[item] !== 0
                                ?
                                <div className="pagination-item" key={`pagination-key${index}`}>{` od ${pagination[item]}`}</div>
                                :
                                item === "next" && pagination[item] !== 0 
                                ?
                                <a href={`/posts/all?page=${page + 1}`} key={`pagination-key${index}`}><div className="pagination-item button right" >{`napred`}</div></a>
                                :
                                null
                              )
                            })
                          }
                          
                          
                        </div>
                      </Col>
                    </Row>
                  </div>
                  
                </div>

              </Col>
              <Col sm="4">
                <div className="side">
                  <h2>Ovo je strana</h2>
                </div>
              </Col>
            </React.Fragment>
          )
          :
          null
        }
        
      </Row>
    </Container>
  )
}

export default PostView;