import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateStud() {
    const [data, setData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.post('http://localhost:8080/profile', { id })
            .then((res) => {
                setData({
                    name: res.data.name,
                    gender: res.data.gender,
                    dob: res.data.dob,
                    address: res.data.address,
                    mobile: res.data.mobile,
                    rollNo: res.data.rollNo,
                    division: res.data.division,
                    studentID: res.data.studentID,
                    institute: res.data.institute
                })
            })
    }, [])
    // console.log(id)
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:3000/update-student', {
            id, data
        }).then((res) => { alert(res.data.msg) })
    }
    const handleDelete = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:3000/delete-student', {
            id
        }).then((res) => { alert(res.data.msg) })
    }
    const goBack = () => {
        window.history.back()
    }
    return (
        <div>
            <hr />
            <h5>Update Student</h5>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-12 px-3' >
                        <p style={{ fontWeight: "700", fontSize: "20px" }}>Personal Information</p>
                        <hr />
                        <table className="table  table-inverse table-responsive">
                            <tbody>
                                <tr>
                                    <td scope="row">Name</td>
                                    <td><input type='text' className='form-control' value={data.name} onChange={e => setData({ ...data, ['name']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Gender</td>
                                    <td><input type='text' className='form-control' value={data.gender} onChange={e => setData({ ...data, ['gender']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Date of Birth</td>
                                    <td><input type='text' className='form-control' value={data.dob} onChange={e => setData({ ...data, ['dob']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Address</td>
                                    <td><input type='text' className='form-control' value={data.address} onChange={e => setData({ ...data, ['address']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Mobile</td>
                                    <td><input type='text' className='form-control' value={data.mobile} onChange={e => setData({ ...data, ['mobile']: e.target.value })} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-12 col-lg-6 col-md-12 px-3'>
                        <p style={{ fontWeight: "700", fontSize: "20px" }}>Educational Information</p>
                        <hr />
                        <table className="table  table-inverse table-responsive">
                            <tbody>
                                <tr>
                                    <td scope="row">Student ID</td>
                                    <td><input type='text' className='form-control' value={data.studentID} onChange={e => setData({ ...data, ['studentID']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Roll No.</td>
                                    <td><input type='text' className='form-control' value={data.rollNo} onChange={e => setData({ ...data, ['rollNo']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Division</td>
                                    <td><input type='text' className='form-control' value={data.division} onChange={e => setData({ ...data, ['division']: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Institute</td>
                                    <td><input type='text' className='form-control' value={data.institute} onChange={e => setData({ ...data, ['institute']: e.target.value })} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <button onClick={goBack} className='btn'>Go Back</button>
                    </div>
                    <div className='col-3'></div>
                    <div className='col-3'></div>
                    <div className='col-3'>
                        <button className='btn btn-primary me-2' onClick={handleUpdate}>Update</button>
                        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateStud
