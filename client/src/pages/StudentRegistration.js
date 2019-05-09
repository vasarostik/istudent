import React, { Component, useEffect, useState } from 'react';
import '../css/StudentRegistration.css';
import { AutoSuggest } from "../components/AutoSuggest";
import { Row } from 'react-bootstrap';
import { MDBCollapse } from "mdbreact";
import { Dropdown } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form, FieldArray } from 'formik';
import { useDropzone } from 'react-dropzone';
import Recaptcha from "react-recaptcha";
import * as Yup from 'yup';

const options = [
    { key: 'angular', text: 'Angular', value: 'Angular' },
    { key: 'css', text: 'CSS', value: 'CSS' },
    { key: 'design', text: 'Graphic Design', value: 'Graphic Design' },
    { key: 'ember', text: 'Ember', value: 'Ember' },
    { key: 'html', text: 'HTML', value: 'HTML' },
    { key: 'ia', text: 'Information Architecture', value: 'Information Architecture' },
    { key: 'javascript', text: 'Javascript', value: 'Javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
    { key: 'meteor', text: 'Meteor', value: 'Meteor' },
    { key: 'node', text: 'NodeJS', value: 'NodeJS' },
    { key: 'plumbing', text: 'Plumbing', value: 'Plumbing' },
    { key: 'python', text: 'Python', value: 'Python' },
    { key: 'rails', text: 'Rails', value: 'Rails' },
    { key: 'react', text: 'React', value: 'React' },
    { key: 'repair', text: 'Kitchen Repair', value: 'Kitchen Repair' },
    { key: 'ruby', text: 'Ruby', value: 'Ruby' },
    { key: 'ui', text: 'UI Design', value: 'UI Design' },
    { key: 'ux', text: 'User Experience', value: 'User Experience' },
]

const initialValues = {
    startDate: new Date(),
    endDate: new Date(),
    firstName: "",
    secName: "",
    city: "",
    university: "",
    specialization: "",
    courseUni: "",
    links: [{
        gitlink: '',
        additionallink: '',
        projectPhoto: [],
    }],
    courses: [{
        course: '',
        coursePhoto: [],
    }],
    achievements: [{
        achievement: '',
        achievementPhoto: [],
    }],
    type: [],
    experience: [{
        company: '',
        position: '',
    }],
    skill: '',
    recaptcha: "",
}

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    secName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    recaptcha: Yup.string().required(),
});

const onChange = (id, newValue) => {
    console.log(`changed to ${newValue}`);
    id === 'city' ? initialValues.city = newValue : initialValues.university = newValue;
}

function Upload(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            console.log(JSON.stringify(
                {
                    uploadPhoto: acceptedFiles.map(file => ({
                        fileName: file.name,
                        type: file.type,
                        size: `${file.size} bytes`
                    })),
                },
                null,
                2
            ));
            console.log(props.index, props.id)
            if (props.id === "course") {
                props.values.courses[props.index].coursePhoto = acceptedFiles;
            }
            if (props.id === "achievement") {
                props.values.achievements[props.index].achievementPhoto = acceptedFiles;
            }
            if (props.id === "project") {
                props.values.links[props.index].projectPhoto = acceptedFiles;
            }
        }
    });

    const thumbProject = (
        files.map(file => (
            <div className="img-thumbnail mt-2" style={thumb} key={file.name}>
                <div id="thumbInner" key={"thumb" + file.name}>

                    {props.id === "project" ?
                        ((props.values.links[props.index].projectPhoto.length === 0 ) ?

                            <img key={file.size + "img"}
                                src={file.preview}
                                id="uploadImg"
                            />
                            :
                            props.values.links[props.index].projectPhoto.map(file1 => (
                                <img key={file1.name + "img"}
                                    src={file1.preview}
                                    id="uploadImg" />
                            ))) : null}
                    {
                        props.id === "course" ?
                            ((props.values.courses[props.index].coursePhoto.length === 0 ?

                                <img key={file.size + "img1"}
                                    src={file.preview}
                                    id="uploadImg"
                                />
                                :
                                props.values.courses[props.index].coursePhoto.map(file2 => (
                                    <img key={file2.name + "img1"}
                                        src={file2.preview}
                                        id="uploadImg" />
                                )))) : null}
                    {
                        props.id === "achievement" ?
                            ((props.values.achievements[props.index].achievementPhoto.length === 0 ?

                                <img key={file.size + "img2"}
                                    src={file.preview}
                                    id="uploadImg"
                                />
                                :
                                props.values.achievements[props.index].achievementPhoto.map(file2 => (
                                    <img key={file2.name + "img2"}
                                        src={file2.preview}
                                        id="uploadImg" />
                                )))) : null}
                </div>
            </div>)));



    return (
        props.id === "project" ?
            <div className="container">
                <Row id="but" {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p style={{ marginTop: "0.5vmax",color:"#6c757d" }}>Upload image</p>
                    <i key="owncon" id="ownUploadIcon" className="far fa-image"></i>

                </Row>
                <aside>
                    {thumbProject}
                </aside>
            </div> : <div className="container">
                <div id="uploadBut" {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p style={{ marginLeft: "2vmax", color:"#6c757d" }}>Drop your image here, or click to select</p>
                </div>
                <aside id="thumbsContainer">
                    {thumbProject}
                </aside>
            </div>
    );
}

export class StudentRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseAdditionalID: "",
            startDate: new Date(),
            endDate: new Date(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);

    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src =
            "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() {

        return (
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        values.city = initialValues.city;
                        values.university = initialValues.university;
                        values.startDate = this.state.startDate;
                        values.endDate = this.state.endDate;

                        console.log(JSON.stringify({
                            coursePhoto: values.courses[0].coursePhoto.map(file => ({
                                fileName: file.name,
                                type: file.type,
                                size: `${file.size} bytes`
                            })),
                        },
                            null,
                            2
                        ));

                        console.log(JSON.stringify(values, null, 2));
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                    }}

                >
                    {({ values, errors, touched, isSubmitting, setFieldValue, handleBlur, setFieldTouched }) =>
                        <Form>
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

                                    <div className="generalFormStyle">
                                        <Row>
                                            <div className="infoRow">
                                                <Field name="firstName">
                                                    {({ field, form }) => (
                                                        <input {...field} required="required" onBlur={handleBlur} className="but" type="text" placeholder="First Name" />
                                                    )}
                                                </Field>
                                                {errors.firstName && touched.firstName ? (
                                                    <div className="error">{errors.firstName}</div>
                                                ) : null}
                                            </div>
                                            <div className="infoRow">
                                                <Field name="secName">
                                                    {({ field, form }) => (
                                                        <input {...field} required="required" onBlur={handleBlur} className="but" type="text" placeholder="Second Name" />
                                                    )}
                                                </Field>
                                                {errors.secName && touched.secName ? (
                                                    <div className="error">{errors.secName}</div>
                                                ) : null}
                                            </div>
                                            <div className="infoRow">
                                                <AutoSuggest
                                                    id="city"
                                                    name="city"
                                                    placeholder="City"
                                                    onBlur={handleBlur}
                                                    onChange={onChange} />
                                            </div>
                                        </Row>

                                        <Row>
                                            <div className="infoRow">
                                                <AutoSuggest
                                                    id="university"
                                                    name="university"
                                                    placeholder="University"
                                                    onBlur={handleBlur}
                                                    onChange={onChange} />
                                            </div>
                                            <div className="infoRow">
                                                <Field name="specialization">
                                                    {({ field, form }) => (
                                                        <input {...field} onBlur={handleBlur} className="but" type="text" placeholder="Specialization" />
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="infoRow">
                                                <Field name="courseUni">
                                                    {({ field, form }) => (
                                                        <input {...field} onBlur={handleBlur} className="but" type="text" placeholder="Course" />
                                                    )}
                                                </Field>
                                            </div>
                                        </Row>
                                    </div>


                                    {/* Own projects */}
                                    <div className="rectOwn">
                                        <h2 className="additionalRectText">Own projects</h2>
                                    </div>
                                    <div className="ownformStyle">
                                        <Row className="ownRow">
                                            <FieldArray key="linkarr" name="links">
                                                {({ push, remove }) =>
                                                    <React.Fragment key="rf">
                                                        {values.links && values.links.length > 0 && values.links.map((link, index) =>
                                                            <Row key={`link-${index}`}>
                                                                <span key="owtext" className="ownText">Project {index + 1}</span>
                                                                <div key={`col1-${index}`} className="infoRow">
                                                                    <Field key="git" name={`links[${index}].gitlink`}>
                                                                        {({ field, form }) => (
                                                                            <input {...field} key="gitinput" onBlur={handleBlur} className="but" type="text" placeholder="Github link" />
                                                                        )}
                                                                    </Field>
                                                                </div>

                                                                <span key="line1" className="ownline">|</span>

                                                                <div key={`col2-${index}`} className="infoRow">
                                                                    <Field key="add" name={`links[${index}].additionallink`}>
                                                                        {({ field, form }) => (
                                                                            <input {...field} key="addinput" onBlur={handleBlur} className="but" type="text" placeholder="Additional link" />
                                                                        )}
                                                                    </Field>
                                                                </div>

                                                                <span key="line2" className="ownline">|</span>

                                                                <div key={`col3-${index}`} className="infoRow">
                                                                    <Field name={`links${index}.projectPhoto`} key={`photo-${index}`} id="project" values={values} index={index} component={Upload} >
                                                                    </Field>

                                                                </div>

                                                                {values.links.length > 1 ? <button key="addbut" type="button" onClick={() => remove(index)} className="ownButAdd del"><i key="addicon" className="fas fa-minus"></i></button> : ''}
                                                            </Row>
                                                        )}
                                                        <button type="button" onClick={() => push({ gitlink: '', additionallink: '', projectPhoto: [] })} className="ownButAdd"><i className="fas fa-plus"></i></button>


                                                    </React.Fragment>
                                                }
                                            </FieldArray>
                                        </Row>
                                    </div>

                                    {/* Additional Information */}
                                    <div className="rectAdditional">
                                        <h2 className="additionalRectText">Additional information</h2>
                                    </div>

                                    <div className="additionalformStyle">
                                        <Row className="additionalRow">
                                            {/* <button className={this.state.button ? "additionalButtonTrue" : "additionalButtonFalse"}
                                        onClick={this.toggleCollapseAdditional("hide")}>Courses</button>*/}
                                            <button type="button" className="additionalButton"
                                                onClick={this.toggleCollapseAdditional("courses")}>Courses</button>
                                            <h2 className="line">|</h2>
                                            <button type="button" className="additionalButton"
                                                onClick={this.toggleCollapseAdditional("achievements")}>Achievements</button>
                                            <h2 className="line">|</h2>
                                            <button type="button" className="additionalButton" onClick={this.toggleCollapseAdditional("skills")}>Skills</button>
                                            <h2 className="line">|</h2>
                                            <button type="button" className="additionalButton" onClick={this.toggleCollapseAdditional("technology")}>Technology</button>
                                            <h2 className="line">|</h2>
                                            <button type="button" className="additionalButton" onClick={this.toggleCollapseAdditional("experience")}>Work Experience</button>
                                        </Row>
                                        <MDBCollapse id="courses" isOpen={this.state.collapseAdditionalID}>
                                            <FieldArray key="coursearr" name="courses">
                                                {({ push, remove }) =>
                                                    <Row key="courserow">
                                                        {values.courses && values.courses.length > 0 && values.courses.map((course, index) =>
                                                            <>
                                                                <div key={"coursecol1" + index} style={{ marginLeft: "3vmax", marginTop: "5.4vh" }}>
                                                                    <Field key={"coursefield1" + index} name={`courses[${index}].course`}>
                                                                        {({ field, form }) => (
                                                                            <input {...field} key={"courseinput1" + index} onBlur={handleBlur} className="but" type="text" placeholder="Course link" />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div key={"coursecol2" + index} className="uploadBut">
                                                                    <Field name={`courses[${index}].coursePhoto`} key={"coursefield2" + index} id="course" values={values} index={index} component={Upload} >
                                                                    </Field>

                                                                </div>
                                                                {values.courses.length > 1 ? <button key={"courserem" + index} type="button" onClick={() => remove(index)} className="additionalButDel del"><i key="courseremicon" className="fas fa-minus"></i></button> : ''}
                                                            </>
                                                        )}
                                                        <button type="button" key={"courseadd"} onClick={() => push({ course: '', coursePhoto: [] })} className="additionalButAdd"><i key="courseaddicon" className="fas fa-plus"></i></button>
                                                    </Row>
                                                }
                                            </FieldArray>
                                        </MDBCollapse>

                                        <MDBCollapse id="achievements" isOpen={this.state.collapseAdditionalID}>
                                            <FieldArray name="achievements">
                                                {({ push, remove }) =>
                                                    <Row>
                                                        {values.achievements && values.achievements.length > 0 && values.achievements.map((achievement, index) =>
                                                            <>
                                                                <div style={{ marginLeft: "3vmax", marginTop: "5.4vh" }}>
                                                                    <Field name={`achievements[${index}].achievement`}>
                                                                        {({ field, form }) => (
                                                                            <input {...field} onBlur={handleBlur} className="but" type="text" placeholder="Achievement link" />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="uploadBut">
                                                                    <Field name={`achievements[${index}].achievementPhoto`} id="achievement" values={values} index={index} component={Upload} >
                                                                    </Field>
                                                                </div>
                                                                {values.achievements.length > 1 ? <button type="button" onClick={() => remove(index)} className="additionalButDel del"><i className="fas fa-minus"></i></button> : ''}
                                                            </>
                                                        )}
                                                        <button type="button" onClick={() => push({ achievement: '', achievementPhoto: [] })} className="additionalButAdd"><i className="fas fa-plus"></i></button>
                                                    </Row>
                                                }
                                            </FieldArray>
                                            <span className="skillsText">What are your achievements?</span>
                                        </MDBCollapse>

                                        <MDBCollapse id="skills" isOpen={this.state.collapseAdditionalID}>
                                            <Row className="ownRow">
                                                <div>
                                                    <Field name="skill[0]">
                                                        {({ field, form }) => (
                                                            <textarea {...field} onBlur={handleBlur} className="achievementText" placeholder="Write your skills.." />
                                                        )}
                                                    </Field>
                                                    <span className="skillsText">All your good points matter!</span>

                                                </div>
                                            </Row>
                                        </MDBCollapse>

                                        <MDBCollapse id="technology" isOpen={this.state.collapseAdditionalID}>
                                            <div className="ownFormStyle" style={{ paddingBottom: "1vw" }}>
                                                <Dropdown id="additionalDropDown"
                                                    name='type'
                                                    value={values.type}
                                                    onBlur={(e, { name, value }) => setFieldTouched(name, value)}
                                                    onChange={(e, { name, value }) => setFieldValue(name, value)}
                                                    placeholder='Technologies' fluid multiple selection options={options} />
                                            </div>
                                        </MDBCollapse>

                                        <MDBCollapse id="experience" isOpen={this.state.collapseAdditionalID}>
                                            <FieldArray name="experience">
                                                {({ push, remove }) =>
                                                    <Row className="ownRow">
                                                        {values.experience && values.experience.length > 0 && values.experience.map((experienc, index) =>
                                                            <>
                                                                <Row className="additionalRow" style={{ marginLeft: "2vw", marginBottom: "1vmax" }}>
                                                                    <div>
                                                                        <Field name={`experience[${index}].company`}>
                                                                            {({ field, form }) => (
                                                                                <input {...field} onBlur={handleBlur} className="but" type="text" placeholder="Company" />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <span className="line">|</span>
                                                                    <div>
                                                                        <Field name={`experience[${index}].position`}>
                                                                            {({ field, form }) => (
                                                                                <input {...field} onBlur={handleBlur} className="but" type="text" placeholder="Position" />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <span className="ownText" style={{ marginLeft: "2vmax" }}>Company {index + 1}</span>
                                                                    {values.experience.length > 1 ? <button type="button" onClick={() => remove(index)} className="ownButAdd del"><i className="fas fa-minus"></i></button> : ''}
                                                                </Row>
                                                                <Row className="additionalRow" style={{ marginLeft: "2vw", marginBottom: "1vmax" }}>
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
                                                                    <span className="line">|</span>

                                                                    <DatePicker
                                                                        className="but"
                                                                        selected={this.state.endDate}
                                                                        selectsEnd
                                                                        startDate={this.state.startDate}
                                                                        endDate={this.state.endDate}
                                                                        dateFormat="MM/yyyy"
                                                                        showMonthYearPicker
                                                                        onChange={this.handleChangeEnd}
                                                                    />
                                                                </Row>
                                                            </>
                                                        )}
                                                        <button type="button" onClick={() => push({ company: '', position: '' })} className="ownButAdd"><i className="fas fa-plus"></i></button>
                                                    </Row>
                                                }
                                            </FieldArray>
                                        </MDBCollapse>
                                    </div>
                                    <Recaptcha
                                        style={{ width: "1vmax" }}
                                        sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                                        render="explicit"
                                        theme="dark"
                                        verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                                        onloadCallback={() => { console.log("done loading!"); }}
                                        onBlur={handleBlur}
                                    />
                                    {errors.recaptcha
                                        && touched.recaptcha && (
                                            <p className="error">{errors.recaptcha}</p>
                                        )}
                                </div>
                            </div>
                            <div className="buttonsReg">
                                <a href="/"><button type="button" className="skipButtonReg">Skip by now</button></a>
                                <a href="/"><button type="submit" disabled={isSubmitting} className="createButtonReg">Create account</button></a>
                            </div>

                        </Form>
                    }
                </Formik>
            </div>
        );
    }

    /* Show/Hide */
    toggleCollapseAdditional = collapseAdditionalID => () => {
        this.setState(prevState => ({
            collapseAdditionalID: ((prevState.collapseAdditionalID !== collapseAdditionalID)) ? collapseAdditionalID : ""
        }));
    }
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
}
