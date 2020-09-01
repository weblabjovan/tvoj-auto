import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

type SinglePostProps = {
    postObject: object,
}

const SinglePost = (props: SinglePostProps) => {
    const { postObject } = props;

    return(
      <React.Fragment>
        <Col sm="8">
          <div className="single-post">
            <h1>{postObject['name']}</h1>
            {
              postObject['structure'].map((item: object, index: number) => {
                return(
                  item['type'] === "photo-element"
                  ?
                  <div className="photo-element" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <div className="photo">
                      <img src={item['src']} alt={item['title']} title={item['title']}/>
                    </div>
                    {
                      item['explanation']
                      ?
                      <span>{item['explanation']}</span>
                      :
                      null
                    }
                  </div>
                  :
                  item['type'] === "photo-upright"
                  ?
                  <div className="photo-upright" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <div className="photo">
                      <img src={item['src']} alt={item['title']} title={item['title']}/>
                    </div>
                    {
                      item['explanation']
                      ?
                      <span>{item['explanation']}</span>
                      :
                      null
                    }
                  </div>
                  :
                  item['type'] === "simple-paragraph"
                  ?
                  <div className="simple-paragraph" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <p>{item['text']}</p>
                  </div>
                  :
                  item['type'] === "highlight-paragraph"
                   ?
                   <div className="highlight-paragraph" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                     <p><mark>{item['text']}</mark></p>
                   </div>
                  :
                  item['type'] === "simple-clipping"
                  ?
                  <div className="simple-clipping" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <p><b>{item['text']}</b></p>
                  </div>
                  :
                  item['type'] === "content-table"
                  ?
                  <div className="content-table" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <span>Sadržaj</span>
                    <ul>
                      {
                        item['list'].map((item1, index1) => {
                          return(
                            <li key={`list-key-${index1}`}><a href={item1['href']}>{item1['text']}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  :
                  item['type'] === "complex-paragraph"
                  ?
                  <div className="complex-paragraph" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <h2>{item['headline']}</h2>
                    <p>{item['text']}</p>
                  </div>
                  :
                  item['type'] === "simple-video"
                  ?
                  <div className="simple-video" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <iframe width="560" height="315" src={item['src']} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="title" allowFullScreen></iframe>
                  </div>
                  :
                  item['type'] === "simple-headline"
                  ?
                  <div className="simple-headline" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <h2>{item['headline']}</h2>
                  </div>
                  :
                  item['type'] === "numbered-list"
                  ?
                  <div className="numbered-list" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <span>{item['headline']}</span>
                    <ul>
                      {
                        item['list'].map((item1, index1) => {
                          return(
                            <li key={`numbered-key-${index1}`}>{item1['text']}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  :
                  item['type'] === "simple-list"
                  ?
                  <div className="simple-list" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <span>{item['headline']}</span>
                    <ul>
                      {
                        item['list'].map((item1, index1) => {
                          return(
                            <li key={`simplelist-key-${index1}`}>{item1['text']}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  :
                  item['type'] === "simple-subheadline"
                  ?
                  <div className="simple-subheadline" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <h3>{item['headline']}</h3>
                  </div>
                  :
                  item['type'] === "simple-table"
                  ?
                  <div className="simple-table" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <Table responsive>
                      <thead>
                        <tr>
                          {
                            item['table']['head'].map((item1, index1) => {
                              return(
                              <th key={`tablehead-key-${index1}`}>{item1}</th>
                              )
                            })
                          }
                        </tr>
                      </thead>

                      <tbody>
                        {
                          item['table']['content'].map((item1, index1) => {
                            return(
                              <tr key={`tablerow-key-${index1}`}>
                                {
                                  item1.map((sub, subInd) => {
                                    return(
                                      <td key={`tablerow-key-${subInd}`} >{sub}</td>
                                    )
                                  })
                                }
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                  </div>
                  :
                  item['type'] === "link-paragraph"
                  ?
                  <div className="link-paragraph" key={`str-key-${index}`} id={item['id'] ? `${item['id']}` : `smple-id-${index}`}>
                    <p>{`${item['linkText']['textFront']} `} <a href={item['linkText']['href']} target="_blank" rel="noreferrer">{item['linkText']['link']}</a> {` ${item['linkText']['textBack']}`}</p>
                  </div>
                  :
                  null
                )
              })
            }
          </div>

          <div className="blogger-info">
            <div className="blogger">
              <div className="photo" style={{'background': `url(${postObject['author']['photoPath']}) center / contain no-repeat`}}></div>
              <div className="text">
                <h4>{`${postObject['author']['firstName']} ${postObject['author']['lastName']}`}</h4>
                <p>{postObject['author']['description']}</p>
                <span>{postObject['dateString']}</span>
              </div>
              <div style={{"clear":"both"}}></div>
            </div>
          </div>
        </Col>


        <Col sm="4">
          <div className="side visible">
            <div className="banner xs-not"></div>

            <div className="related-list">
              <h2>Povezani članci</h2>
              <div className="banner xs-only"></div>
              {
                [1,2,3].map((item, index) => {
                  return(
                    <a href="/" key={`related-key-${index}`}>
                      <div className="related-post" >
                        <div className="related-img">
                          <img src="/small-side.jpg" alt="Da li je bolji Golf 5 ili Audi A3?" title="Da li je bolji Golf 5 ili Audi A3?"/>
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
      </React.Fragment> 
    )
}

export default SinglePost;