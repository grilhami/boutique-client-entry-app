import React from 'react';
import { 
	DetailsList, 
	SelectionMode, 
	DetailsHeader,  
	DetailsListLayoutMode, 
	IDetailsHeaderProps, 
	IColumn 
} from '@fluentui/react/lib/DetailsList';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { IClientGet } from '../helper/api/interfaces';

const headerStyle= { 
	root: { paddingTop: 0 }
}

const searchBoxStyle = { 
	root: { width: "40%" }
}

interface Prop {
	items: IClientGet[];
}

const Table: React.FunctionComponent<Prop> = ({items}) => {
	
	const columns: IColumn[] = [
		{ key: 'column1', name: 'Kode', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column2', name: 'Nama', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column3', name: 'Ukuran', fieldName: 'size', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column4', name: 'Tanggal Aktif', fieldName: '_ts', minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: 'column5', name: 'Alamat', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
		{ key: 'column6', name: 'No. Telp', fieldName: 'phone', minWidth: 100, maxWidth: 200, isResizable: true },
	  ];

    const onRenderDetailsHeader = (detailsHeaderProps: IDetailsHeaderProps) => {
        detailsHeaderProps.styles = headerStyle;
        return <DetailsHeader { ...detailsHeaderProps}/>
	}
	

    return (
        <>
            <SearchBox 
                placeholder=" cari disini ..." 
                underlined={true} labelText="Nama"
                styles={searchBoxStyle}
            />
            <DetailsList
                items={items}
                columns={columns}
                selectionMode={SelectionMode.none}
                onRenderDetailsHeader={onRenderDetailsHeader}
                layoutMode={DetailsListLayoutMode.justified}
            />
        </>
    )



}

export default Table;