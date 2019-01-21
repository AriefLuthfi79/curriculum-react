import React, { Component } from "react";
import _ from "lodash";
import "./IntroRedux.styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Data from "../../config/redux.json";

class IntroRedux extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern">
          <Card>
            <p className="title">Introduction to Redux</p>  
            {Data.map(item => {
              return (
                <ul>
                  <li>
                    {item.title}<i className="italic"> [see detail]</i>                    
                    {
                      _.isArray(item.detail) ? item.detail.map((i, index)=> {
                        return (
                          <ul>
                            <li className="text-detail">{index+1}. {i}</li>
                          </ul>
                        )
                      }) : null                        
                    }
                  </li>
                </ul>
              );
            })}                   
          </Card>
        </div>
      </>
    );
  }
}

export default IntroRedux;
