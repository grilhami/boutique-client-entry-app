import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';


const buttonStyle = {
	root: { width: "30%" }
}

const addIcon = { iconName: "Add" }

const textFieldStyle = {
	root: { width: "80%", marginTop: 20 }
}

const Form = () => {
    return (
        <>
            <TextField label="Nama" styles={textFieldStyle}/>
            <TextField label="No. Telpon" styles={textFieldStyle} />
            <TextField label="Aalamat" styles={textFieldStyle} />
            <TextField label="Ukuran" styles={textFieldStyle} />
            <PrimaryButton 
                text='Tambah'
                styles={buttonStyle}
                iconProps={addIcon}
            />
        </>
    )

}

export default Form;