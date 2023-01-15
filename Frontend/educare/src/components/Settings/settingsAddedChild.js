import React, {useEffect, useState} from "react";

function addedChildInfos() {
    const [addedChildInfos, setAddedChildInfos] = useState([{
        school: '',
        fname: '',
        lname: '',
        klasse: '',
        teacher: '',
        email: ''
    }])

    useEffect(() => {
        fetch('/addedChildInfos').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setAddedChildInfos(jsonRes));
    })

    return <div className='container'>
        <h1>Added Child</h1>
        {addedChildInfos.map(addedChildInfo =>
            <div>
                <p>addedChildInfo.school</p>
                <p>addedChildInfo.fname</p>
                <p>addedChildInfo.lname</p>
                <p>addedChildInfo.klasse</p>
                <p>addedChildInfo.teacher</p>
                <p>addedChildInfo.email</p>
            </div>
        )}

    </div>
}

export default addedChildInfos;