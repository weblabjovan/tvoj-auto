import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import SinglePost from '../components/SinglePost';

type PostViewProps = {
    post: object,
    page: number,
    all: boolean,
}

const PostView = (props: PostViewProps) => {
  const { post, page, all } = props;
  const pagesLength = all ? post['pagesLength'] : 1;
  
  const back = page > 1 ? 1 : 0;
  const next = page < pagesLength ? 1 : 0;
  
  const pagination = {back, current: page, last: pagesLength, next};

  return(
    <Container>
      <Row className="post-view">
        {
          all === true
          ?
          (
            <React.Fragment>
              <Col sm="8">
                <h1>Naši članci</h1>

                <Row className="xs-only">
                  <Col xs="12">
                      <div className="banner"></div>
                  </Col>
                </Row>

                <div className="post-list">
                  {
                    post['postsForPage'].map((item, index) => {
                      return(
                        <div className="post-item" key={`blog-key-${index}`}>
                          <Row>
                            <Col xs="12" lg="4">
                              <Link href="/posts/[pid]" as={`/posts/${item['urlName']}`}>
                                <a>
                                  <div className="post-img">
                                    <img src={item['mainPhotos']['mediumPath']} alt={item['urlName']} title={item['urlName']}/>
                                  </div>
                                </a>
                              </Link>
                              
                            </Col>
                            <Col xs="12" lg="8">
                              <div className="post-text">
                                <Link href="/posts/[pid]" as={`/posts/${item['urlName']}`}>
                                  <a><h2>{item['name']}</h2></a>
                                </Link>
                                <p>{item['description']}</p>
                                <span>{`${item['dateString']} / ${item['author']['firstName']} ${item['author']['lastName']}`}</span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      )
                    })
                  }

                <Row className="xs-only">
                  <Col xs="12">
                      <div className="banner"></div>
                  </Col>
                </Row>

                  <div className="pagination-wrapper">
                    <Row>
                      <Col>
                        <div className="pagination">
                          {
                            
                            Object.keys(pagination).map((item, index) => {
                              return(
                                item === "back" && pagination[item] !== 0 
                                ?
                                <Link href="/posts/[pid]" as={`/posts/all?page=${page - 1}`} key={`pagination-key${index}`}>
                                  <a><div className="pagination-item button left" >{`nazad`}</div></a>
                                </Link>
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
                                <Link href="/posts/[pid]" as={`/posts/all?page=${page + 1}`} key={`pagination-key${index}`}>
                                  <a><div className="pagination-item button right" >{`napred`}</div></a>
                                </Link>
                                
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
                  <div className="banner"></div>
                  <div className="banner"></div>
                </div>
              </Col>
            </React.Fragment>
          )
          :
          post['author']
          ?
          <SinglePost
            postObject={ post }           
          />
          :
          null
        }
        
      </Row>
    </Container>
  )
}

export default PostView;