import React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IClientPost } from '../../helper/api/interfaces';


const buttonStyle = {
	root: { width: "30%" }
}

const addIcon = { iconName: "Add" }

const textFieldStyle = {
	root: { width: "80%", marginTop: 20 }
}

interface Prop {
    handleSubmit: (item: IClientPost) => void;
}

const Form: React.FunctionComponent<Prop> = ({handleSubmit}) => {
    const [name, setName] = React.useState<string>("");
    const [size, setSize] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");

    const onChangeName = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
          setName(newValue || '');
        },
        [],
      );

    const onChangeSize = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setSize(newValue || '');
        },
        [],
    );

    const onChangeAddress = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setAddress(newValue || '');
        },
        [],
    );

    const onChangePhone = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setPhone(newValue || '');
        },
        [],
    );

    return (
        <>
            <TextField label="Nama" styles={textFieldStyle} onChange={onChangeName}/>
            <TextField label="No. Telpon" styles={textFieldStyle} onChange={onChangePhone}/>
            <TextField label="Aalamat" styles={textFieldStyle} onChange={onChangeAddress}/>
            <TextField label="Ukuran" styles={textFieldStyle} onChange={onChangeSize}/>
            <PrimaryButton 
                text='Tambah'
                styles={buttonStyle}
                iconProps={addIcon}
                onClick={() => handleSubmit({
                    name,
                    size,
                    address,
                    phone
                })}
            />
        </>
    )

}

export default Form;