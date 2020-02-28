import React from 'react';
import style from './../Projects.module.css';
import Button from "../../Button/Button";

class Project extends React.Component {
    /*state = {
        isFocus: false
    }
    makeIsFocusTrue = () => {
        this.setState({isFocus: true})
    }
    makeIsFocusFalse = () => {
        this.setState({isFocus: false})
    }*/
    ProjectImgStyle = {
        backgroundImage: 'url(' + this.props.img + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    render = () => {
        return (
            <div className={style.containerProject}>
                <div style={this.ProjectImgStyle} className={style.projectImg} onMouseEnter={this.makeIsFocusTrue}
                     onMouseLeave={this.makeIsFocusFalse}>
                    <div className={style.projectButton}>
                        <Button buttonName='cмотреть'/>
                    </div>
                </div>
                <div className={style.projectInfo}>
                <span className={style.projectName}>
                {this.props.name}
                </span>
                    <span className={style.projectDesc} >
                {this.props.desc}
                </span>
                </div>
            </div>
        )
    }

}
export default Project;