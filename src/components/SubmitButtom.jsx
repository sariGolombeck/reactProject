

import React from "react";
const SubmitBotton=()=>{
const [loading, setLoading] = useState(false);

    const save = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        }, 2000);
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        </div>
    )
}
export default SubmitBotton