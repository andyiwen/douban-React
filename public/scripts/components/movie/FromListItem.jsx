import React      from 'react';
import ReactDOM   from 'react-dom';


/* 选电影/选电视剧内容组件 */
class FromListItem extends React.Component {
    
    styles() {
        return({
          abc: {
              width: '40px'
            , height: '40px'
          }
        })
    }
       
  render() {
    // console.log(this);
    return (
      <figure>
       <img className="imgarea" src={this.props.data.imageURL} style={this.styles().abc} />
       <figcaption>
         <h2></h2>
       </figcaption>
     </figure>
    );
  }
}
/* 选电影/选电视剧内容组件--End */

module.exports = FromListItem;