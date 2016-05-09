import React from 'react';

class QuestionSummary extends React.Component {
constructor(props) {
      super(props);
      document.body.style.backgroundColor = "black";
    }

  render() {
    var imgStyle = {
      height: '150px',
      width: '150px',
      padding: '10px'
    };
    return (
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-5">
          <div className="row text-center"><img src="images/yes.png" alt="smiley" style={imgStyle} /></div>
          <div className="text-center console">
          <div className="row">question</div>
          <div className="row">question</div>
          <div className="row">question</div>
          <div className="row">question</div>

          </div>
        </div>
        <div className="col-xs-5">
          <div className="row text-center" ><img src="../images/no.png" alt="smiley" style={imgStyle}/></div>
            <div className="text-center console">
              <div className="row">question</div>
              <div className="row">question</div>
              <div className="row">question</div>
              <div className="row">question</div>
              <div className="row">question</div>
              <div className="row">question</div>
              <div className="row">question</div>
              <div className="row">question</div>
            </div>
        </div>
        <div className="col-xs-1"></div>
      </div>
    );
  }
}
export default QuestionSummary
