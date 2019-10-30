import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader';

class Uploader extends Component {
    constructor() {
        super();
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.state = {
            token: ''
        };
    }
    componentWillMount() {
        let { token } = this.props;
        this.setState({ token });
    }
    // API Request
    getUploadParams = ({ file, meta }) => {
        let { token } = this.state;
        const body = new FormData();
        body.append('file', file);
        return {
            url: '/api/upload-files',
            body,
            headers: { Authorization: `Bearer ${token}` }
        };
    };

    // called every time a file's status changes
    handleChangeStatus = ({ meta, file }, status) => {
        console.log('uploader props', this.props);
        this.props.onUpload(meta);
        console.log('Status: ', status, 'Meta: ', meta, 'File: ', file);
    };

    // receives array of files that are done uploading when submit button is clicked
    handleSubmit = files => {
        console.log(files.map(f => f.meta));
    };
    render() {
        console.log('state: ', this.state);
        return (
            <Dropzone
                getUploadParams={this.getUploadParams}
                onChangeStatus={this.handleChangeStatus}
                onSubmit={this.handleSubmit}
                accept='image/*,pdf'
            />
        );
    }
}

export default Uploader;
