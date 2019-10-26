import React, { Component } from 'react';
import Dropzone from 'react-dropzone-uploader';

class Uploader extends Component {
    constructor() {
        super();
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }
    // API Request
    getUploadParams = ({ meta }) => {
        console.log('Child: ', meta);
        return { url: 'API LINK' };
    };

    // called every time a file's `status` changes
    handleChangeStatus = ({ meta, file }, status) => {
        console.log('uploader props', this.props);
        this.props.onUpload(meta);
        console.log('Status: ', status, 'Meta:Child: ', meta, 'File: ', file);
    };

    // receives array of files that are done uploading when submit button is clicked
    handleSubmit = files => {
        console.log(files.map(f => f.meta));
    };
    render() {
        return (
            <Dropzone
                getUploadParams={this.getUploadParams}
                onChangeStatus={this.handleChangeStatus}
                onSubmit={this.handleSubmit}
                inputContent='Choose a file or drag here'
                accept='image/*,pdf'
            />
        );
    }
}
export default Uploader;
