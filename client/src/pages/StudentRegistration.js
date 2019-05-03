import React, { Component } from 'react';
import '../css/StudentRegistration.css';
import { AutoSuggest } from "../components/AutoSuggest";
import { Upload } from "../components/Upload";
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { MDBCollapse } from "mdbreact";
import { Dropdown } from 'semantic-ui-react';
import InputFiles from 'react-input-files';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

export class StudentRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            endDate:new Date(),
            collapseAdditionalID: "",
            button: true,
            gitlinks: [''],
            additionallinks: [''],
            courses: [''],
            achievements: [''],
            companies: [''],
            positions: [''],
            numOfSubs: 0
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    render() {
        return (
            <div>
                {/* main container */}
                <div className="main2">

                    {/* Rectangle */}
                    <div className="rectangle2">
                        <div className="emptyRectangle2">
                            <h2 className="rightTitle2">Create Student account</h2>
                        </div>
                    </div>

                    {/* Info Form */}
                    <div className="mainInfo">

                        <div className="rectGeneral">
                            <h2 className="rectText">General information</h2>
                        </div>

                        <Form className="generalFormStyle">
                            <Row>
                                <Form.Group className="infoRow">
                                    <Form.Control className="but" color="black" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group className="infoRow">
                                    <Form.Control className="but" placeholder="Last Name" />
                                </Form.Group>

                                <Form.Group className="infoRow" >
                                    <AutoSuggest
                                        id="type-city"
                                        placeholder="City"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="infoRow" >
                                    <AutoSuggest
                                        id="type-uni"
                                        placeholder="University"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="infoRow">
                                    <Form.Control className="but" placeholder="Specialization" />
                                </Form.Group>

                                <Form.Group className="infoRow">
                                    <Form.Control className="but" placeholder="Course" />
                                </Form.Group>
                            </Row>
                        </Form>


                        {/* Own projects */}
                        <div className="rectOwn">
                            <h2 className="additionalRectText">Own projects</h2>
                        </div>

                        <div className="ownformStyle">
                            <Row className="ownRow">
                                {this.state.gitlinks.map((question, index) => (

                                    <Row>
                                        <span className="ownText">Project {index + 1}</span>

                                        <Form.Group className="infoRow">
                                            <Form.Control className="but" color="black" placeholder="Github link" onChange={this.handleTextGit(index)}  />
                                        </Form.Group>

                                        <span className="ownline">|</span>

                                        <Form.Group className="infoRow">
                                            <Form.Control className="but" color="black" placeholder="Additional link" onChange={this.handleTextAdditional(index)}/>
                                        </Form.Group>

                                        <span className="ownline">|</span>

                                        <InputFiles style={{ height: "auto" }} onChange={files => console.log(files)}>
                                            <button className="butUpload" style={{ color: "#6c757d" }}>
                                                <span className="ownUploadText">Upload photo</span>
                                                <i id="ownUploadIcon" className = "far fa-image"></i>
                                            </button>
                                        </InputFiles>
                                        <span className="hideReactJSX">{this.state.numOfSubs = index}</span>

                                    </Row>
                                ))}
                                {this.state.numOfSubs !== 0 ? <button className="ownButDel" onClick={this.handleDeleteProject(this.state.numOfSubs)}><i class="fas fa-minus-square"></i></button> : ''}
                                <button className="ownButAdd" onClick={this.addProject}><i className="fas fa-plus"></i></button>
                            </Row>
                        </div>
                        {/*
                        <DatePicker
                            className="but"
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            onChange={this.handleChangeStart}
                        />
                        <DatePicker
                            className="but"
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            onChange={this.handleChangeEnd}
                        />*/}
                        {/* Additional Information */}
                        <div className="rectAdditional">
                            <h2 className="additionalRectText">Additional information</h2>
                        </div>

                        <div className="additionalformStyle">
                            <Row className="additionalRow">
                                {/* <button className={this.state.button ? "additionalButtonTrue" : "additionalButtonFalse"}
                                    onClick={this.toggleCollapseAdditional("hide")}>Courses</button>*/}
                                <button className="additionalButton"
                                    onClick={this.toggleCollapseAdditional("courses")}>Courses</button>
                                <h2 className="line">|</h2>
                                <button className="additionalButton"
                                    onClick={this.toggleCollapseAdditional("achievements")}>Achievements</button>
                                <h2 className="line">|</h2>
                                <button className="additionalButton" onClick={this.toggleCollapseAdditional("skills")}>Skills</button>
                                <h2 className="line">|</h2>
                                <button className="additionalButton" onClick={this.toggleCollapseAdditional("technology")}>Technology</button>
                                <h2 className="line">|</h2>
                                <button className="additionalButton" onClick={this.toggleCollapseAdditional("experience")}>Work Experience</button>
                                
                            </Row>

                            <MDBCollapse id="courses" isOpen={this.state.collapseAdditionalID}>
                                <Row className="additionalRow">
                                    {this.state.courses.map((question, index) => (
                                        <Row className="additionalRow">
                                            <Form.Group style={{ marginTop: "5.4vh" }} >
                                                <Form.Control className="but" color="black" placeholder="Course link" onChange={this.handleTextCourses(index)} />
                                            </Form.Group>
                                            <Form.Group style={{ marginTop: "-3vh" }} >
                                                <Upload />
                                            </Form.Group>
                                            <h1>{this.state.courses[index]}</h1>
                                            <span className="hideReactJSX">{this.state.numOfSubs = index}</span>
                                        </Row>
                                    ))}
                                    {this.state.numOfSubs !== 0 ? <button className="additionalButDel" onClick={this.handleDeleteCourse(this.state.numOfSubs)}><i class="fas fa-minus-square"></i></button> : ''}
                                    <button className="additionalButAdd" onClick={this.addCourse}><i class="fas fa-plus"></i></button>
                                </Row>
                            </MDBCollapse>

                            <MDBCollapse id="achievements" isOpen={this.state.collapseAdditionalID}>
                                <Row className="additionalRow">
                                    {this.state.achievements.map((question, index) => (
                                        <Row className="additionalRow">
                                            <Form.Group style={{ marginTop: "2.9vh" }} >
                                                <Form.Control as="textarea" className="achievementText" color="black" placeholder="Write about your Achievement.." onChange={this.handleTextAchievements(index)} />
                                            </Form.Group>
                                            <Form.Group style={{ marginTop: "-3vh" }} >
                                                <Upload />
                                            </Form.Group>
                                            <span className="hideReactJSX">{this.state.numOfSubs = index}</span>
                                        </Row>

                                    ))}
                                    {this.state.numOfSubs !== 0 ? <button className="additionalButDel" onClick={this.handleDeleteAchievement(this.state.numOfSubs)}><i class="fas fa-minus-square"></i></button> : ''}
                                </Row>
                                <span className="skillsText">What are your achievements?</span>
                                <button className="additionalButAddAchievement" onClick={this.addAchievement}><i class="fas fa-plus"></i></button>
                            </MDBCollapse>

                            <MDBCollapse id="skills" isOpen={this.state.collapseAdditionalID}>
                                <Row className="ownRow">
                                    <Form.Group >
                                        <Form.Control as="textarea" className="achievementText" color="black" placeholder="Write all your soft skills.." />
                                    </Form.Group>
                                    <span className="skillsText">All your good points matter!</span>
                                </Row>
                            </MDBCollapse>

                            <MDBCollapse id="technology" isOpen={this.state.collapseAdditionalID}>
                                <Form className="ownFormStyle" style={{ paddingBottom: "1vw" }}>
                                    <Dropdown id="additionalDropDown" placeholder='Technologies' fluid multiple selection options={options} />
                                </Form>
                            </MDBCollapse>

                            <MDBCollapse id="experience" isOpen={this.state.collapseAdditionalID}>
                                <Row className="ownRow">
                                    {this.state.companies.map((question, index) => (
                                        <Row className="additionalRow" style={{ marginLeft: "2vw" }}>
                                            <Form.Group className="infoRow">
                                                <Form.Control className="but" color="black" placeholder="Company" onChange={this.handleTextCompany(index)} />
                                            </Form.Group>

                                            <span className="ownline">|</span>

                                            <Form.Group className="infoRow">
                                                <Form.Control className="but" placeholder="Position" onChange={this.handleTextPosition(index)} />
                                            </Form.Group>
                                            <span className="hideReactJSX">{this.state.numOfSubs = index}</span>
                                        </Row>
                                    ))}
                                    {this.state.numOfSubs !== 0 ? <button className="ownButDel" onClick={this.handleDeleteExperience(this.state.numOfSubs)}><i class="fas fa-minus-square"></i></button> : ''}
                                    <button className="ownButAdd" onClick={this.addExperience}><i class="fas fa-plus"></i></button>

                                </Row>
                            </MDBCollapse>
                        </div>
                    </div>
                </div>
                {/* end of main container */}
                <div className="buttonsReg">
                    <a href="/"><button className="skipButtonReg">Skip by now</button></a>
                    <a href="/registration"><button className="createButtonReg">Create account</button></a>
                </div>
            </div>
        );
    }

    /* Date */

    handleChangeStart(date) {
        this.setState({
          startDate: date
        });
      }

      handleChangeEnd(date) {
        this.setState({
          endDate: date
        });
      }
    /* Achievements */

    handleTextAchievements = i => e => {
        let achievements = [...this.state.achievements]
        achievements[i] = e.target.value
        this.setState({
            achievements
        })
    }

    handleDeleteAchievement = i => e => {
        e.preventDefault()
        let achievements = [
            ...this.state.achievements.slice(0, i),
            ...this.state.achievements.slice(i + 1)
        ]

        this.setState({
            achievements
        })
    }

    addAchievement = e => {
        e.preventDefault()
        let achievements = this.state.achievements.concat([''])
        this.setState({
            achievements
        })
    }


    /* Courses */

    handleTextCourses = i => e => {
        let courses = [...this.state.courses]
        courses[i] = e.target.value
        this.setState({
            courses
        })
    }
    handleDeleteCourse = i => e => {
        e.preventDefault()
        let courses = [
            ...this.state.courses.slice(0, i),
            ...this.state.courses.slice(i + 1)
        ]

        this.setState({
            courses
        })
    }
    addCourse = e => {
        e.preventDefault()
        let courses = this.state.courses.concat([''])
        this.setState({
            courses
        })
    }

    /* Projects */

    handleTextGit = i => e => {
        let gitlinks = [...this.state.gitlinks]
        gitlinks[i] = e.target.value
        this.setState({
            gitlinks
        })
    }

    handleTextAdditional = i => e => {
        let additionallinks = [...this.state.additionallinks]
        additionallinks[i] = e.target.value
        this.setState({
            additionallinks
        })
    }

    handleDeleteProject = i => e => {
        e.preventDefault()
        let gitlinks = [
            ...this.state.gitlinks.slice(0, i),
            ...this.state.gitlinks.slice(i + 1)
        ]

        let additionallinks = [
            ...this.state.additionallinks.slice(0, i),
            ...this.state.additionallinks.slice(i + 1)
        ]

        this.setState({
            gitlinks,
            additionallinks
        })
    }

    addProject = e => {
        e.preventDefault()
        let gitlinks = this.state.gitlinks.concat([''])
        this.setState({
            gitlinks
        })
    }

    /* Experience */

    handleTextCompany = i => e => {
        let companies = [...this.state.companies]
        companies[i] = e.target.value
        this.setState({
            companies
        })
    }

    handleTextPosition = i => e => {
        let positions = [...this.state.positions]
        positions[i] = e.target.value
        this.setState({
            positions
        })
    }

    handleDeleteExperience = i => e => {
        e.preventDefault()
        let companies = [
            ...this.state.companies.slice(0, i),
            ...this.state.companies.slice(i + 1)
        ]

        let positions = [
            ...this.state.positions.slice(0, i),
            ...this.state.positions.slice(i + 1)
        ]

        this.setState({
            companies,
            positions
        })
    }

    addExperience = e => {
        e.preventDefault()
        let companies = this.state.companies.concat([''])
        this.setState({
            companies
        })
    }

    /* Show/Hide */

    toggleCollapseAdditional = collapseAdditionalID => () => {
        this.setState(prevState => ({
            collapseAdditionalID: ((prevState.collapseAdditionalID === "") && ((collapseAdditionalID === 'hide'))) ? collapseAdditionalID = "courses" : null,
            collapseAdditionalID: ((prevState.collapseAdditionalID !== "") && ((collapseAdditionalID === 'hide'))) ? collapseAdditionalID = prevState.collapseAdditionalID : null,
            collapseAdditionalID: ((prevState.collapseAdditionalID !== collapseAdditionalID)
            ) ? collapseAdditionalID : "",

            button: !this.state.button
        }));
    }

    onChange(id, newValue) {
        console.log(`${id} changed to ${newValue}`);
    }

} 