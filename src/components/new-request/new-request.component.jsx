import React from 'react';
import { connect } from 'react-redux';

import firebase from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import 'firebase/storage';
import 'firebase/firestore';


import './new-request.styles.scss';
import { addRequest } from '../../redux/request/request.action';
import { selectRequestItemsidvalue } from '../../redux/request/request.selector';
import {createStructuredSelector} from 'reselect';

class NewRequest extends React.Component {
    constructor(){
        super();
        this.state = {
            id: '',
            name: '',
            author: '',
            email: '',
            deadline: '',
            coins: 0,
            note: '',
            URL: '',
            files: null
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        let bucketName = 'documents'
        let file = this.state.files[0]
        let storageRef= firebase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{
                //let downloadURL = uploadTask.snapshot.downloadURL
            storageRef= firebase.storage().ref()
            storageRef.child('documents/'+this.state.files[0].name).getDownloadURL().then((url)=>{
            this.state.URL=url
            console.log(this.state.URL)
        
        const {addRequest} = this.props;

        addRequest({
            id: this.state.name+this.props.idvalue,
            name: this.state.name,
            author: this.state.author,
            email: this.state.email,
            deadline: this.state.deadline,
            coins: this.state.coins,
            note: this.state.note,
            URL: this.state.URL,
        });
        this.setState({
            id: '',
            name: '',
            author: '',
            email: '',
            deadline: '',
            coins: 0,
            note: ''
        })
        })
        })
    }
    
    handleChange=event =>{
        const {name,value} =event.target;
        this.setState({[name]: value});
        addRequest({[name]: value});
    }


    handleUpload=(files)=>{
        this.setState({
            files: files
        })
    }



    render() {
        const {name,author,email,deadline,coins,note}=this.state;
        return(
            <div className='new-request'>
                <h2 className ='request-title'>Make New Request</h2>
                <span>Fill the below information</span>
                <form className='request-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        label='name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='author'
                        value={author}
                        onChange={this.handleChange}
                        label='author'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='date'
                        name='deadline'
                        value={deadline}
                        onChange={this.handleChange}
                        label='deadline'
                        required
                    />
                    <FormInput
                        type='number'
                        name='coins'
                        value={coins}
                        onChange={this.handleChange}
                        label='coins'
                        required
                    />
                    <FormInput
                        type='text'
                        name='note'
                        value={note}
                        onChange={this.handleChange}
                        label='note'
                    />

                    <input type='file' onChange={(e)=>{this.handleUpload(e.target.files)}} />

                    <CustomButton type='submit' onClick={()=>addRequest(this.state)}> Submit Request </CustomButton>
                </form>
            </div>
        )
    }
};
const mapDispatchToProps = dispatch => ({
    addRequest: request =>dispatch(addRequest(request))
});

const mapStateToProps = createStructuredSelector({
    idvalue: selectRequestItemsidvalue
});
export default connect(mapStateToProps, mapDispatchToProps)(NewRequest);